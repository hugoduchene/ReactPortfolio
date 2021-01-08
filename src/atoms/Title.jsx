import styled from 'styled-components'

export const Title = styled.h1`
    text-transform: ${props => props.textTransform ? props.textTransform : null};
    font-weight: ${props => props.fontWeight ? props.fontWeight : null};
    color: ${props => props.color ? props.color : "black"};
    font-size: ${props => props.size ? props.size : null};
`;