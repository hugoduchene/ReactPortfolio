import styled from 'styled-components'

export const Card = styled.div`
    margin-right: ${props => props.marginRight ? props.marginRight: null};
    padding-right: ${props => props.paddingLeft ? props.paddingLeft: null};
    padding-left: ${props => props.paddingLeft ? props.paddingLeft: null};
    min-height: ${props => props.minHeight ? props.minHeight + "vh": null};
    height: ${props => props.height ? props.height: "100%"};
    width: ${props => props.width ? props.width: null};
    border-radius: 5px;
    @media (max-width: 768px) {
        margin-right: ${props => props.hiddenMobileMargin ? "0!important" : null};
        min-height: ${props => props.minHeight ? props.minHeight*2 + "vh" : null};
        display: ${props => props.alignMobile ? "flex" : null};
        align-items: ${props => props.alignMobile ? "center" : null};
        flex-direction: ${props => props.alignMobile ? "column" : null};
        justify-content: ${props => props.alignMobile ? "center" : null};
      }
`;