import styled from 'styled-components'

export const Image = styled.img`
    width: ${props => props.width ? props.width : "100%"};
`;