/**
*
* Logo
*
*/

import React from 'react';
import Wrapper from './Wrapper';
import Icon from './Icon';

function Logo() {
  return (
    <Wrapper>
      <h1>Drinky Time</h1>
      <Icon
        name="glass"
        size="2x"
      />
    </Wrapper>
  );
}

export default Logo;
