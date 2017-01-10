/**
*
* SearchError
*
*/

import React from 'react';

function SearchError(props) {
  const { error } = props;
  return (
    <span>
      {error}
    </span>
  );
}

SearchError.propTypes = {
  error: React.PropTypes.string,
};


export default SearchError;
