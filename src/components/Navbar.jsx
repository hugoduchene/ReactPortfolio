import {BoxNavbar, NavItems} from '../atoms/navbar/navbar'
import {Container} from '../atoms/Container'
import {Title} from '../atoms/Title'
import {Wrap} from '../atoms/Wrap'

const Navbar = ({arrayNavItems, backgroundColor, titleColor}) => {
    return(
        <Wrap backgroundColor={backgroundColor}>
            <Container>
                <BoxNavbar>
                    <Title color={titleColor}>Hugo Duchêne</Title>
                    {arrayNavItems.map((elt, i) => (
                        <NavItems key={i} arrayLink={elt.arrayLink} />
                    ))}
                </BoxNavbar>
            </Container>
        </Wrap>
    )
}

export default Navbar;