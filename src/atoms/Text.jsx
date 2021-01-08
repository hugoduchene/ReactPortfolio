import styled from 'styled-components'

export const Text = styled.p`
    color: ${props => props.color ? props.color : null};
    font-size: ${props => props.size ? props.size : null};
    width: ${props => props.width ? props.width : null};
    line-height: ${props => props.lineHeight ? props.lineHeight : "1"};
`;