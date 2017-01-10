/*
 *
 * SearchBar actions
 *
 */

import {
  SEARCH_SUBMIT,
  SEARCH_SUCCESS,
  SEARCH_ERROR,
  FIREBASE_DATA_RECEIVED,
  FIREBASE_ADD_RECORD,
  FIREBASE_UPDATE_RECORD,
  INCREMENT_RESULTS,
  DECREMENT_RESULTS,

} from './constants';

export function searchSubmit(searchInput) {
  return {
    type: SEARCH_SUBMIT,
    searchInput,
  };
}

export function searchSuccess(data) {
  return {
    type: SEARCH_SUCCESS,
    data,
  };
}

export function searchError(err) {
  return {
    type: SEARCH_ERROR,
    err,
  };
}

export function incrementResults() {
  return {
    type: INCREMENT_RESULTS,
  };
}

export function decrementResults() {
  return {
    type: DECREMENT_RESULTS,
  };
}

export function firebaseDataReceived(data) {
  return {
    type: FIREBASE_DATA_RECEIVED,
    data,
  };
}

export function addFirebaseRecord() {
  return {
    type: FIREBASE_ADD_RECORD,
  };
}

export function amendFirebaseRecord(data) {
  return {
    type: FIREBASE_UPDATE_RECORD,
    data,
  };
}
