
/* eslint no-confusing-arrow:0 */

import styled from 'styled-components';

export default styled.button`
  color: ${(props) => props.disabled ? 'rgba(231,76,60,0.3);' : 'rgba(231,76,60,1);'};
  outline: none;
  margin: 0em 0.5em 0em 0.5em;
  &:hover {
    cursor: pointer;
  }
`;
