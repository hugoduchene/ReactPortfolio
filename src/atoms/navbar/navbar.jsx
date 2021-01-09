import styled from 'styled-components'

export const BoxNavbar = styled.div`
    height: 10vh;
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    `;

const StyledNavItems = styled.a`
    margin-right: 15px;
    color: #000F6F;
    text-decoration: none;
    font-weight: bolder;
`;

export const NavItems = ({arrayLink}) => {
    return(<>
        <div>
            {arrayLink.map((elt, i) => (
                <StyledNavItems href={elt.link} key={i}>{elt.content}</StyledNavItems>
            ))}
        </div>
    </>)
}