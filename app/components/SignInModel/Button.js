import styled from 'styled-components';

export default styled.button`
  width: 175px;
  margin: 10px 20px 10px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  padding: 5px 45px;
  line-height: 1.8;
  appearance: none;
  box-shadow: none;
  border-radius: 3px;
  color: rgb(236,240,241);
  background-color: rgb(44,62,80);
  border: none;
  transition: all 200ms;
  &:hover {
    background-color: rgb(231,76,60);
  }
  &:active {
    outline: none
  }
  &:focus {
    outline: none
  }
`;
