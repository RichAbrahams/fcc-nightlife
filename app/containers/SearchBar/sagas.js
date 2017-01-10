/* eslint consistent-return:0 */

// import * as firebase from 'firebase';
import { eventChannel, takeLatest } from 'redux-saga';
import { fork, take, call, put, select } from 'redux-saga/effects';
import {
  SEARCH_SUBMIT,
  INCREMENT_RESULTS,
  DECREMENT_RESULTS,
  FIREBASE_DATA_SUCCESS,
  FIREBASE_DATA_ERROR,
  FIREBASE_USER_SUCCESS,
  FIREBASE_USER_SIGN_OUT,
 } from 'containers/SearchBar/constants';
import { ADD_USER_TO_VENUE, REMOVE_USER_FROM_VENUE } from 'containers/HomePage/constants';
import { searchSuccess, searchError, firebaseDataReceived } from './actions';
import { signedInTrue, signOut } from 'containers/Header/actions';
import { selectOffset, selectLocation } from './selectors';
import yelpRequest from 'utils/yelpRequest';
import firebase from 'firebase/app';
import auth from 'firebase/auth';
import database from 'firebase/database';

// Search Sagas

function* fetchYelpRequest(action) {
  let location;
  let offset;

  if (action.type === SEARCH_SUBMIT) {
    location = action.searchInput.toJS().location;
    offset = 0;
  }

  if (action.type === INCREMENT_RESULTS) {
    offset = yield select(selectOffset());
    location = yield select(selectLocation());
  }

  if (action.type === DECREMENT_RESULTS) {
    offset = yield select(selectOffset());
    location = yield select(selectLocation());
  }

  const payload = JSON.stringify({
    location,
    offset,
  });

  try {
    const request = yield call(yelpRequest, payload);
    request.location = location;
    if (request.error) {
      throw new Error('Could not retrieve results, please try later');
    }
    yield put(searchSuccess(request));
  } catch (err) {
    yield put(searchError(err.message));
  }
}

export function* rootYelpRequestSaga() {
  yield fork(takeLatest, [SEARCH_SUBMIT, INCREMENT_RESULTS, DECREMENT_RESULTS], fetchYelpRequest);
}

// Firebase Sagas

const firebaseConfig = {
  apiKey: 'AIzaSyAJLi0zEa9viBHyXLcoOXm6gmj7JsALve4',
  authDomain: 'silent-wharf-153101.firebaseapp.com',
  databaseURL: 'https://silent-wharf-153101.firebaseio.com',
  storageBucket: 'silent-wharf-153101.appspot.com',
  messagingSenderId: '411725484863',
};

function initFirebase() {
  return eventChannel((emitter) => {
    firebase.initializeApp(firebaseConfig);

    const dbRef = database()
      .ref()
      .child('bars');

    const dataSuccess = (data) => emitter({ type: FIREBASE_DATA_SUCCESS, value: data });
    const dataFailed = (err) => emitter({ type: FIREBASE_DATA_ERROR, value: err });
    dbRef.on('value', dataSuccess, dataFailed);

    auth()
      .onAuthStateChanged((user) => {
        if (user) {
          emitter({ type: FIREBASE_USER_SUCCESS, value: user });
        } else {
          emitter({ type: FIREBASE_USER_SIGN_OUT, value: null });
        }
      });

    return () => console.log('Socket off');
  });
}

function* fireBaseReceiveData(channel) {
  while (true) {
    const action = yield take(channel);
    if (action.type === FIREBASE_DATA_SUCCESS) {
      yield put(firebaseDataReceived(action.value.val()));
    }
    if (action.type === FIREBASE_USER_SUCCESS) {
      yield put(signedInTrue(action.value));
    }
    if (action.type === FIREBASE_USER_SIGN_OUT) {
      yield put(signOut());
    }
  }
}

function fireBaseAddUser(action) {
  const venue = action.data.venue;
  const user = action.data.user;
  const ref = `bars/${venue}`;
  const dbRef = database()
    .ref(ref);
  dbRef.transaction((currentData) => {
    if (currentData === null) {
      return { users: [user] };
    }
    const currentUsers = currentData.users;
    const index = currentUsers.indexOf(user);
    if (index === -1) {
      currentUsers.push(user);
    }
    return { users: currentUsers };
  }
);
}

function fireBaseRemoveUser(action) {
  const venue = action.data.venue;
  const user = action.data.user;
  const ref = `bars/${venue}`;
  const dbRef = database()
    .ref(ref);
  dbRef.transaction((currentData) => {
    if (currentData === null) {
      return;
    }
    const currentUsers = currentData.users;
    const index = currentUsers.indexOf(user);
    if (index > -1) {
      currentUsers.splice(index, 1);
    }
    return { users: currentUsers };
  });
}

function* fbAdd() {
  while (true) {
    const action = yield take(ADD_USER_TO_VENUE);
    yield call(fireBaseAddUser, action);
  }
}

function* fbRemove() {
  while (true) {
    const action = yield take(REMOVE_USER_FROM_VENUE);
    yield call(fireBaseRemoveUser, action);
  }
}

export function* rootFirebaseSaga() {
  const channel = yield call(initFirebase);
  yield fork(fireBaseReceiveData, channel);
  yield fork(fbRemove);
  yield fork(fbAdd);
}
