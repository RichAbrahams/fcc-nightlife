/* eslint no-unused-vars: 0 */
/* eslint no-console: 0 */
/* eslint consistent-return: 0 */
/* eslint no-param-reassign: 0 */
import { SEARCH_SUBMIT } from 'containers/SearchBar/constants';
import { createStructuredSelector } from 'reselect';
import { selectUserName } from 'containers/Header/selectors';

const props = createStructuredSelector({
  userName: selectUserName(),
});

export function setLocation({ dispatch }) {
  return (next) => (action) => {
    if (action.type !== SEARCH_SUBMIT) {
      return next(action);
    }
    const location = action.searchInput.toJS().location;
    const Ls = location;
    localStorage.setItem('location', JSON.stringify(Ls));
    next(action);
  };
}

