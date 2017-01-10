/* eslint no-confusing-arrow:0 */

import styled from 'styled-components';
export default styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: ${(props) => props.userName ? '30%' : '50%'};
    @media screen and (max-width: 750px) {
        align-items: center;
        width: 100%;

}
`;

