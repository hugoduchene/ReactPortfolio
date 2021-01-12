import styled from 'styled-components'

export const StyledImg = styled.img`
    width: ${props => props.width ? props.width : "100%"};
    @media (max-width: 768px) {
        display: ${props => props.hiddenMobile ? "none" : null};
      }
`;

export const Image = ({link, styled}) => {
  if (link) {
    return (
      <a href={link}>
        <StyledImg 
          src={styled.src} 
          width={styled.width} 
          hiddenMobile={styled.hiddenMobile ? true : false}
        />
        </a>
    )
  } else{
    return(
      <StyledImg 
        src={styled.src}
        width={styled.width} 
        hiddenMobile={styled.hiddenMobile ? true : false}
      />
    )
  }
}