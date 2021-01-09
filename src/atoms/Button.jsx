import styled from 'styled-components'

export const Button = styled.div`
    right: ${props => props.right ? props.right : null};
    bottom: ${props => props.bottom ? props.bottom : null};
    position: ${props => props.position ? props.position : null};
    width: ${props => props.width ? props.width : null};
    height: ${props => props.height ? props.height: null};
    justify-content: ${props => props.alignItems ? "center": null};
    align-items: ${props => props.alignItems ? props.alignItems : null};
    display: ${props => props.flex || props.alignItems ? "flex": null};
    border-radius: ${props => props.borderRadius ? props.borderRadius: null};
    background-color: ${props => props.backgroundColor ? props.backgroundColor: null};
    padding: ${props => props.padding ? props.padding: null};
    color: ${props => props.color ? props.color: null};
    cursor: pointer;
`;