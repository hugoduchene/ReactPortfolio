import styled from 'styled-components'

import { slideToRight, slideToLeft } from './Keyframes'

export const Modal = styled.div`
    position: ${
        props => props.fixed ? "fixed": props.absolute ? "absolute" : null
    };
    width: ${props => props.width ? props.width: null};
    height: ${props => props.height ? props.height: null};
    background-color: ${props => props.backgroundColor ? props.backgroundColor: null};
    top: ${props => props.top ? "0": null};
    animation: ${props => props.toRight ? slideToRight: slideToLeft} 0.2s forwards;    
    z-index: 1;
    display: ${props => props.hiddenMobile ? "none" : null};
    @media (max-width: 768px) {
        display: ${props => props.hiddenMobile ? "block": null};
      }
    `;
