/*
 *
 * Header actions
 *
 */

import {
  SHOW_SIGN_IN,
  HIDE_SIGN_IN,
  SOCIAL_SIGN_IN,
  SIGNED_IN_TRUE,
  SIGN_IN_ERROR,
  SIGN_OUT,
} from './constants';

export function showSignIn() {
  return {
    type: SHOW_SIGN_IN,
  };
}

export function hideSignIn() {
  return {
    type: HIDE_SIGN_IN,
  };
}

export function socialSignIn(provider) {
  return {
    type: SOCIAL_SIGN_IN,
    provider,
  };
}

export function signedInTrue(user) {
  return {
    type: SIGNED_IN_TRUE,
    user,
  };
}

export function signOut() {
  return {
    type: SIGN_OUT,
  };
}

export function signInError(err) {
  return {
    type: SIGN_IN_ERROR,
    err,
  };
}
