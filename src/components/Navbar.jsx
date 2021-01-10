import {BoxNavbar, NavItems, StyledNavItemsMobile} from '../atoms/navbar/navbar'
import {Container} from '../atoms/Container'
import {Title} from '../atoms/Title'
import {Wrap, WrapColor} from '../atoms/Wrap'
import {Modal} from '../atoms/Modal'

import {useState} from 'react'

const Navbar = ({arrayNavItems, backgroundColor, titleColor, itemMobile}) => {
    const [stateModal, SetStateModal] = useState({modal: false, animation: true})

    const modalMenuHandler = () => {
        stateModal.modal === false ? 
            SetStateModal({...stateModal, modal: true}) : 
                stateModal.animation ? SetStateModal({...stateModal, animation: false}) 
                    : SetStateModal({...stateModal, animation: true}) 
    }

    const stateModalHandler = () => {
        stateModal.animation ? SetStateModal({...stateModal, animation: false}) 
                    : SetStateModal({...stateModal, animation: true}) 
    }
    
    return(<>
        <Wrap backgroundColor={backgroundColor} id="navbar">
            <Container>
                <BoxNavbar>
                    <Title>Hugo<WrapColor color={titleColor}>.dev</WrapColor></Title>
                    {arrayNavItems.map((elt, i) => (
                        <NavItems key={i} styleNavItems={{color: titleColor, hiddenMobile: true}} arrayLink={elt.arrayLink} />
                    ))}
                    <StyledNavItemsMobile
                        cursor="pointer"
                        color={itemMobile.color} 
                        onClick={modalMenuHandler}
                        rotate={stateModal.animation && stateModal.modal ? "rotate" : null}
                    >{itemMobile.item}</StyledNavItemsMobile>
                </BoxNavbar>
            </Container>
        </Wrap>

        {stateModal.modal && <Modal fixed top width="50%" height="100vh" toRight={stateModal.animation ? true : false} backgroundColor={itemMobile.color}>
            {arrayNavItems.map((elt, i) => (
                <NavItems 
                    key={i} 
                    column={true} 
                    styleNavItems={{
                        color: "white",
                        onClick: stateModalHandler,
                    }} 
                    arrayLink={elt.arrayLink} 
                />
            ))}
        </Modal>}
    </>)
}

export default Navbar;