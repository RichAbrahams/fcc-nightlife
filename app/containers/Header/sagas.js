import { takeLatest } from 'redux-saga';
import { call, put, fork } from 'redux-saga/effects';
import { SOCIAL_SIGN_IN, SIGN_OUT } from 'containers/Header/constants';
import googleSignIn from 'utils/googleSignIn';
import twitterSignIn from 'utils/twitterSignIn';
import signOut from 'utils/signOut';
import { signInError } from './actions';

function* fetchSignIn(action) {
  let provider;
  switch (action.provider) {
    case 'google':
      provider = googleSignIn;
      break;
    case 'twitter':
      provider = twitterSignIn;
      break;
    default:
      return;
  }
  try {
    yield call(provider);
    return;
  } catch (err) {
    yield put(signInError('Could not sign you in, please check credentials.'));
  }
}

export function* watchSignIn() {
  yield fork(takeLatest, SOCIAL_SIGN_IN, fetchSignIn);
}

function* fetchSignOut() {
  try {
    yield call(signOut);
    return;
  } catch (err) {
    console.log('sign Out error');
    return;
  }
}

export function* watchSignOut() {
  yield fork(takeLatest, SIGN_OUT, fetchSignOut);
}
