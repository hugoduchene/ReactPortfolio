import styled from 'styled-components'

export const Row = styled.section`
    flex-direction: ${props => props.flexDirection ? props.flexDirection: null};
    min-height: ${props => props.minHeight ? props.minHeight: null};
    height: ${props => props.height ? props.height: null};
    background-color: ${props => props.backgroundColor ? props.backgroundColor : null};
    align-items: ${props => props.alignItems ? props.alignItems : null};
    justify-content: ${
        props => props.justifyContent ? 
            props.justifyContent : props.flexDirection === "column" && props.alignItems === "center" ?
        "center" : null};
    display: flex;

    @media (max-width: 768px) {
        padding-bottom: ${props => props.responsivePaddingBottom ? props.responsivePaddingBottom : null};
      }
`;

export const Col = styled.div`
    flex: 1 1 ${props => props.size ? props.size : null};
    min-width: ${props => props.size ? props.size : null};
    align-items: ${props => props.alignItems ? props.alignItems : null};
    justify-content: ${props => props.justifyContent ? props.justifyContent : props.alignItems ? "center" : null};
    display: ${props => props.justifyContent || props.alignItems ? "flex" : null};
    flex-direction: ${props => props.justifyContent || props.alignItems ? "column" : null};
    @media (max-width: 768px) {
        flex: 1 1 100%!important;
      }
`;

export const Flex = styled.div`
    display: flex;
    flex-direction: ${props => props.flexDirection ? props.flexDirection : null};
    justify-content: ${
        props => props.justifyContent ? props.justifyContent : props.flexDirection ?
    "center" : null};
    align-items: ${props => props.alignItems ? props.alignItems : props.flexDirection ?
    "center" : null};
    height: ${props => props.height ? props.height : null};
    width: 100%;
    @media (max-width: 768px) {
       flex-direction: ${props => props.columnMobile ? "column" : null};
      }
`;