import styled from 'styled-components';
export default styled.div`
  display:flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  margin-top: 1em;
  padding: 1em;
  text-align: center;
  transition: all 300ms;
  background: rgb(41,128,185);
  box-shadow: 0 1px 2px rgba(0,0,0,.1);
  @media screen and (max-width: 750px) {
       flex-direction: column;
}
`;
