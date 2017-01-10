import styled from 'styled-components';

export default styled.input`
  background: white;
  height: 42px;
  padding: 5px;
  color: black;
  border-radius: 3px;
  width: 25em;
  @media screen and (max-width: 500px) {
        width: 15em;
  }
`;
