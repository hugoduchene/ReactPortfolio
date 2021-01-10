import styled from 'styled-components'
import {rotate90} from '../Keyframes'

export const BoxNavbar = styled.div`
    height: 10vh;
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    `;

const StyledNavItems = styled.a`
    margin-right: 15px;
    color: ${props => props.color  ? props.color: null};
    text-decoration: none;
    font-weight: bolder;
    @media (max-width: 768px) {
        display: ${props => props.hiddenMobile ? "none" : null};
      }
`;

export const StyledNavItemsMobile = styled.div`
    cursor: ${props => props.cursor  ? props.cursor: null};
    color: ${props => props.color ? props.color: null};
    font-size: 23px;
    display: none;
    animation: ${props => props.rotate === "rotate" ? rotate90: null} 0.2s forwards;   
    @media (max-width: 768px) {
        display: block;
    }
`;

const StyledNavItemsModal = styled.div`
    display: ${props => props.column  ? "flex" : null};
    flex-direction: ${props => props.column  ? "column" : null};
    width: ${props => props.column  ? "80%" : null};
    margin: ${props => props.column  ? "0 auto" : null};
    line-height: ${props => props.column  ? "2" : null};
    margin-top: ${props => props.column  ? "5%" : null};
`;

export const NavItems = ({arrayLink, styleNavItems, column}) => {
    return(<>
        <StyledNavItemsModal column={column && true}>
            {arrayLink.map((elt, i) => (
                <StyledNavItems 
                    href={elt.link} 
                    color={styleNavItems.color && styleNavItems.color} 
                    hiddenMobile={styleNavItems.hiddenMobile && styleNavItems.hiddenMobile}
                    onClick={styleNavItems.onClick && styleNavItems.onClick}
                    key={i}
                >{elt.content}</StyledNavItems>
            ))}
        </StyledNavItemsModal>
    </>)
}