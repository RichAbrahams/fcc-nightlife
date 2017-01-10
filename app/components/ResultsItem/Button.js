import styled from 'styled-components';

export default styled.button`
  display: flex;
  justify-content: center;
  margin: 0px 0px 0px 20px;
  padding: 5px 45px;
  display: flex;
  height: 42px;
  border-radius: 3px;
  color: rgb(236,240,241);
  background-color: rgb(44,62,80);
  border: none;
  transition: all 200ms;
  width: 177px;
&:hover {
  background-color: rgb(231,76,60);
  cursor: pointer;
}
&:active {
  outline: none
}
&:focus {
  outline: none
}
`;
