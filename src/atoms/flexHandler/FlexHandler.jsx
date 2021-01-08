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
`;

export const Col = styled.div`
    flex: 1 1 ${props => props.size ? props.size : null};
    min-width: ${props => props.size ? props.size : null};
    align-items: ${props => props.alignItems ? props.alignItems : null};
    justify-content: ${props => props.justifyContent ? props.justifyContent : props.alignItems ? "center" : null};
    display: ${props => props.justifyContent || props.alignItems ? "flex" : null};
    flex-direction: ${props => props.justifyContent || props.alignItems ? "column" : null}
`;

export const Flex = styled.div`
    display: flex;
    align-items: ${props => props.alignItems ? props.alignItems : null};
    height: ${props => props.height ? props.height : null};
`;