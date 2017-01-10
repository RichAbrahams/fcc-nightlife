/* eslint no-confusing-arrow:0 */

import styled from 'styled-components';
export default styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: ${(props) => props.userName ? '30%' : '50%'};
    text-align: left;
     @media screen and (max-width: 750px) {
        align-items: center;
        width: 100%;
        margin: 1em 0em 1em 0em;
        align-items: center;
}
`;

