import styled from 'styled-components'

export const SubTitle = styled.h2`
    margin-bottom: 2%!important;
    margin-top: 2%!important;
    color: ${props => props.color ? props.color : "black"};
    font-size: ${props => props.size ? props.size : null};
    font-weight: ${props => props.fontWeight ? props.fontWeight : "bold"};
    text-align: ${props => props.textAlign ? props.textAlign : null};
`;