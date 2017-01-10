import { createSelector } from 'reselect';

const selectHeaderDomain = () => (state) => state.get('header');

const selectShowModel = () => createSelector(
  selectHeaderDomain(),
  (substate) => substate.get('showModel')
);

const selectSignedIn = () => createSelector(
  selectHeaderDomain(),
  (substate) => substate.get('signedIn')
);

const selectUserName = () => createSelector(
  selectHeaderDomain(),
  (substate) => substate.get('userName')
);

const selectDisableSignIn = () => createSelector(
  selectHeaderDomain(),
  (substate) => substate.get('disableSignIn')
);

const selectError = () => createSelector(
  selectHeaderDomain(),
  (substate) => substate.get('error')
);

export {
  selectShowModel,
  selectSignedIn,
  selectUserName,
  selectDisableSignIn,
  selectError,
};
