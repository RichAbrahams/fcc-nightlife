/*
 *
 * Header reducer
 *
 */

import { fromJS } from 'immutable';
import {
  SHOW_SIGN_IN,
  HIDE_SIGN_IN,
  SIGNED_IN_TRUE,
  SOCIAL_SIGN_IN,
  SIGN_IN_ERROR,
  SIGN_OUT,
} from './constants';

const initialState = fromJS({
  showModel: false,
  signedIn: false,
  userName: null,
  uid: null,
  email: null,
  disableSignIn: false,
  error: null,
});

function HeaderReducer(state = initialState, action) {
  switch (action.type) {
    case SHOW_SIGN_IN:
      return state
        .set('showModel', true);
    case HIDE_SIGN_IN:
      return state
        .set('showModel', false);
    case SIGNED_IN_TRUE:
      return state
        .set('showModel', false)
        .set('signedIn', true)
        .set('userName', action.user.displayName)
        .set('uid', action.user.uid)
        .set('email', action.user.email)
        .set('disableSignin', false)
        .set('error', null);
    case SIGN_IN_ERROR:
      return state
        .set('signedIn', false)
        .set('userName', null)
        .set('uid', null)
        .set('email', null)
        .set('disableSignin', false)
        .set('error', action.err);
    case SOCIAL_SIGN_IN:
      return state
        .set('disableSignin', true);
    case SIGN_OUT:
      return state
        .set('signedIn', false)
        .set('userName', null)
        .set('uid', null)
        .set('email', null)
        .set('disableSignin', true)
        .set('error', null);
    default:
      return state;
  }
}

export default HeaderReducer;
