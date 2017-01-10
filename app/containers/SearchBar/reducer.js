/*
 *
 * SearchBar reducer
 *
 */

import { fromJS } from 'immutable';
import {
  SEARCH_SUBMIT,
  SEARCH_SUCCESS,
  SEARCH_ERROR,
  INCREMENT_RESULTS,
  DECREMENT_RESULTS,
  FIREBASE_DATA_RECEIVED,
} from './constants';

const initialState = fromJS({
  searching: false,
  location: null,
  error: null,
  businesses: [],
  total: null,
  offset: 0,
  userSelections: {},
});

function searchBarReducer(state = initialState, action) {
  switch (action.type) {

    case SEARCH_SUBMIT:
      return state
        .set('searching', true)
        .set('location', action.searchInput.toJS().location)
        .set('error', null)
        .set('businesses', fromJS([]))
        .set('total', null)
        .set('offset', 0);

    case SEARCH_SUCCESS:
      return state
        .set('searching', false)
        .set('error', null)
        .set('businesses', fromJS(action.data.businesses))
        .set('total', action.data.total);

    case SEARCH_ERROR:
      return state
        .set('searching', false)
        .set('error', action.err);

    case INCREMENT_RESULTS: {
      const nextOffset = state.get('offset') + 20;
      return state
        .set('searching', true)
        .set('offset', nextOffset);
    }
    case DECREMENT_RESULTS: {
      const nextOffset = state.get('offset') - 20;
      return state
        .set('searching', true)
        .set('offset', nextOffset);
    }

    case FIREBASE_DATA_RECEIVED:
      return state
        .set('userSelections', fromJS(action.data));

    default:
      return state;
  }
}

export default searchBarReducer;
