import styled from 'styled-components';

export default styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
  flex-grow: 1;
  width: 100%;
  padding-bottom: 5px;
  padding-right: 10px;
  &:focus {
    outline: none;
  }
`;
