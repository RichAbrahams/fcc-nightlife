/**
*
* Searching
*
*/

import React from 'react';
import Fontawesome from 'react-fontawesome';
import H1 from './H1';

function Searching() {
  return (
    <div>
      <H1>
        Searching
        <Fontawesome
          name="spinner"
          spin
          style={{ marginLeft: '1em' }}
        />
      </H1>
    </div>
  );
}

export default Searching;
