import styled from 'styled-components'

export const Image = styled.img`
    width: ${props => props.width ? props.width : "100%"};
    @media (max-width: 768px) {
        display: ${props => props.hiddenMobile ? "none" : null};
      }
`;