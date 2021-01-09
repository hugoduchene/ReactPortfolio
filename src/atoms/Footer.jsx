import styled from 'styled-components'

export const Footer = styled.footer`
    background-color: ${props => props.backgroundColor ? props.backgroundColor: null};
    padding: ${props => props.padding ? props.padding: null};
    text-align: ${props => props.textAlign ? props.textAlign: null};;
    color: white;
`;