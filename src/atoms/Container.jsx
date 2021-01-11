import styled from 'styled-components'

export const Container = styled.div`
    flex-direction: ${props => props.flexDirection ? props.flexDirection : "relative"};
    flex-wrap: wrap;
    display: ${props => props.flex ? "flex" : "relative"};
    width: 80%;
    max-width: 1100px;
    margin: 0 auto;
    @media (max-width: 768px) {
        width: 90%;
       }
    `;