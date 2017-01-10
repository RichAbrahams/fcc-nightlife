import styled from 'styled-components';
export default styled.div`
    font-size: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    &>h1 {
        margin: 0;
    }
    @media screen and (max-width: 500px) {
        font-size: 1rem;
    }
`;
