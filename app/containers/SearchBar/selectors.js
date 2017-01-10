import { createSelector } from 'reselect';
import { fromJS } from 'immutable';

const selectSearchBarDomain = () => (state) => state.get('searchBar');

const selectSearching = () => createSelector(
  selectSearchBarDomain(),
  (substate) => substate.get('searching')
);

const selectLocation = () => createSelector(
  selectSearchBarDomain(),
  (substate) => substate.get('location')
);

const selectError = () => createSelector(
  selectSearchBarDomain(),
  (substate) => substate.get('error')
);

const selectBusinesses = () => createSelector(
  selectSearchBarDomain(),
  (substate) => substate.get('businesses')
);

const selectTotal = () => createSelector(
  selectSearchBarDomain(),
  (substate) => substate.get('total')
);

const selectOffset = () => createSelector(
  selectSearchBarDomain(),
  (substate) => substate.get('offset')
);

const selectUserSelections = () => createSelector(
  selectSearchBarDomain(),
  (substate) => substate.get('userSelections')
);

const selectMappedBusinesses = () => createSelector(
  selectBusinesses(),
  selectUserSelections(),
  (businesses, users) => businesses.map((business) => {
    let businessObject = fromJS({
      name: business.get('name'),
      address: business.get('location')
                       .get('display_address'),
      telephone: business.get('display_phone'),
      id: business.get('id'),
    });
    if (users.has(business.get('id'))) {
      businessObject = businessObject.set('attending', users.get(business.get('id')).get('users'));
    } else {
      businessObject = businessObject.set('attending', []);
    }
    return businessObject;
  }
));


export {
  selectSearching,
  selectLocation,
  selectError,
  selectBusinesses,
  selectTotal,
  selectOffset,
  selectUserSelections,
  selectMappedBusinesses,
};
