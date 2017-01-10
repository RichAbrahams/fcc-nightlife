/* eslint no-unused-vars: 0 */
/* eslint no-console: 0 */
/* eslint consistent-return: 0 */
/* eslint no-param-reassign: 0 */
import { INCREMENT_RESULTS, DECREMENT_RESULTS } from 'containers/SearchBar/constants';

export function nextScrollWindow({ dispatch }) {
  return (next) => (action) => {
    if (action.type !== INCREMENT_RESULTS) {
      return next(action);
    }
    window.scrollTo(0, 0);
    next(action);
  };
}

export function previousScrollWindow({ dispatch }) {
  return (next) => (action) => {
    if (action.type !== DECREMENT_RESULTS) {
      return next(action);
    }
    window.scrollTo(0, 0);
    next(action);
  };
}
