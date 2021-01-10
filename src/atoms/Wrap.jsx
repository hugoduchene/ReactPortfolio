import styled from 'styled-components'

export const Wrap = styled.div`
    width: 100%;
    background-color: ${props => props.backgroundColor ? props.backgroundColor + "!important" : console.error("you have to put the attribute 'backgroundColor' ")};
    `;

export const WrapColor = styled.span`
    color: ${props => props.color ? props.color + "!important" : console.error("you have to put the attribute 'color' ")};
`;

export const WrapStyle = styled.span`
    font-weight: ${props => props.fontWeight ? props.fontWeight : null};
    font-style:  ${props => props.fontStyle ? props.fontStyle : null};
`;

export const WrapWidth = styled.div`
    height: ${props => props.height ? props.height : null};
    margin: ${props => props.center ? "0 auto" : null};
    width: ${props => props.width ? props.width + "!important" : console.error("you have to put the attribute 'width' ")};
    @media (max-width: 768px) {
        width: ${props => props.hiddenMobile ? "100%!important" : null};
      }
`;