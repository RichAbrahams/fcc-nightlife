import styled from 'styled-components';

export default styled.button`
  display: flex;
  justify-content: center;
  margin: 0px 0px 0px 20px;
  padding: 5px 45px;
  display: flex;
  height: 42px;
  border-radius: 3px;
  color: #fff;
  background-color: rgb(44,62,80);
  border: none;
  transition: all 200ms;
  &:hover {
    background-color: rgb(52,152,219);
  }
  &:active {
    outline: none
  }
  &:focus {
    outline: none
  }
  @media screen and (max-width: 750px) {
    margin-top: 1em;
  }
`;
