import styled from 'styled-components'

export const Card = styled.div`
    margin-right: ${props => props.marginRight ? props.marginRight: null};
    padding-right: ${props => props.paddingLeft ? props.paddingLeft: null};
    padding-left: ${props => props.paddingLeft ? props.paddingLeft: null};
    min-height: ${props => props.minHeight ? props.minHeight: null};
    height: ${props => props.height ? props.height: "100%"};
    width: ${props => props.width ? props.width: null};
    border-radius: 5px;
`;