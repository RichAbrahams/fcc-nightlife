/*
 *
 * HomePage actions
 *
 */

import {
  ADD_USER_TO_VENUE,
  REMOVE_USER_FROM_VENUE,
} from './constants';

export function addUserToVenue(data) {
  return {
    type: ADD_USER_TO_VENUE,
    data,
  };
}

export function removeUserFromVenue(data) {
  return {
    type: REMOVE_USER_FROM_VENUE,
    data,
  };
}
