import styled from 'styled-components';
export default styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 2rem;
    background: rgb(44,62,80);
    @media screen and (max-width: 750px) {
        flex-direction: column;
    }
`;
