import Navbar from './components/Navbar'
import {Row, Col, Flex} from './atoms/flexHandler/FlexHandler'
import {Container} from './atoms/Container'
import {Title} from './atoms/Title'
import {Image, StyledImg} from './atoms/Image'
import {WrapColor, WrapWidth, WrapStyle} from './atoms/Wrap'
import {SubTitle} from './atoms/SubTitle'
import {Text} from './atoms/Text'
import {Card} from './atoms/Card'
import {Button} from './atoms/Button'
import {Footer} from './atoms/Footer'

import cvImage from './assets/img/cvImage.svg'
import eShop from './assets/img/e-shop.gif'
import sr from './assets/img/sr.gif'
import {mainBlue, mainGris} from './assets/js/color'


import Reveal from 'react-reveal/Reveal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faLinkedin} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faArrowUp, faBars } from '@fortawesome/free-solid-svg-icons'

const App = () => {

  return(<>
    <Navbar 
      itemMobile={{
        item: <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>,
        color: mainBlue
      }}
      titleColor={mainBlue}
      backgroundColor={mainGris}
      arrayNavItems={[
        {arrayLink: [
          {content: "À propos", link: "#about"},
          {content: "Compétences", link: "#skills"},
          {content: "Projets", link: "#projects"},
          {content: "Contactez-moi", link: "#contact"}
        ],
      },
      ]}
    />
    
    {/* box one */}
    
      <Row height="90vh" backgroundColor={mainGris} alignItems="center" id="firstBox">
        <Container flex={true}>
          <Col size="50%">
            <Reveal>
              <div>
                <SubTitle size="20px">Bonjour je suis <WrapColor color={mainBlue}>développeur.</WrapColor></SubTitle>
                <SubTitle size="3rem">Hugo Duchêne</SubTitle>
                <Text width="90%" lineHeight="1.5">Passionné depuis ma tendre enfance, j'ai commencé à programmer à l'âge de 15 ans 
                suite à un film qui m'a profondément marqué. À 18 ans j'ai voulu me professionnaliser dans le monde du développement web.
                En à peine 3 mois j'ai réussi à être diplomé de la formation <WrapStyle fontWeight="bolder" fontStyle="italic">développeur d'application python de OpenClassrooms.</WrapStyle>
                </Text>
              </div>
            </Reveal>
          </Col>

          <Col size="50%" alignItems="center">
            <Reveal>
              <StyledImg src={cvImage} hiddenMobile/>
            </Reveal>
          </Col>

        </Container>
      </Row>

    {/* box two */}

      <Row minHeight="60vh" responsivePaddingBottom="2vh" backgroundColor={mainBlue} alignItems="center" id="about">
        <Container flex={true}>
          <Col size="50%">
            <Reveal>
              <WrapWidth width="80%" hiddenMobile>
                <Title color="white" size="18px" fontWeight="400" textTransform="uppercase">À propos</Title>
                <SubTitle color="white" size="25px">Comment ai-je appris ?</SubTitle>
                <Text color="white" lineHeight="1.5">À l'âge de 15 ans j'ai débuté la programmation en apprenant les bases du développement web sur <WrapStyle fontWeight="bolder" fontStyle="italic">OpenClassrooms</WrapStyle> en passant du sql au php je me suis découvert un réelle passion pour le développement informatique.
                À 18 ans j'ai souhaité me professionnaliser en certifiant toutes mes connaissances apprises durant mon adolescence en me lançant dans une formation <WrapStyle fontWeight="bolder" fontStyle="italic">OpenClassrooms</WrapStyle> que j'ai réussi en un temps record.</Text>
              </WrapWidth>
            </Reveal>
          </Col>

          <Col size="50%" alignItems="center">
            <Reveal>
              <WrapWidth width="80%" hiddenMobile>
                <SubTitle color="white" size="25px">Pourquoi me choisir ?</SubTitle>
                <Text color="white" lineHeight="1.5">Je suis à disposition pour réaliser n'importe quel projet que ça soit une application mobile ou un site web classique.</Text>
              </WrapWidth>
            </Reveal>
          </Col>
        </Container>
      </Row>

    {/* box three */}

      <Row minHeight="90vh" backgroundColor={mainGris} alignItems="center" flexDirection="column" id="skills">
        <Reveal>
          <Container flex={true} flexDirection="column" style={{paddingBottom: "3%", textAlign: "center"}}>
            <Title size="18px" fontWeight="400" textTransform="uppercase">Compétences</Title>
            <SubTitle size="25px">Qu'est ce que je suis capable de faire ?</SubTitle>
          </ Container>
        
          <Container flex={true}>
            <Col size="33%" justifyContent="center" alignItems="center" style={{paddingBottom: "3%"}}>
              <Card alignMobile paddingLeft="5%" minHeight={20} marginRight="10px" hiddenMobileMargin style={{backgroundColor: mainBlue }} >
                <SubTitle size="25px" color="white">Python3</SubTitle>
                <Text size="15px" lineHeight="1.4" color="white">Python est un langage de programmation interprété, multi-paradigme et multiplateformes. Il favorise la programmation impérative structurée, fonctionnelle et orientée objet.</Text>
              </Card>
            </Col>
            <Col size="33%" justifyContent="center" alignItems="center" style={{paddingBottom: "3%"}}>
              <Card alignMobile minHeight={20} paddingLeft="5%" marginRight="10px" hiddenMobileMargin style={{boxShadow: "0 3px 6px rgba(0,0,0,.16), 0 3px 6px rgba(0,0,0,.23)" }} >
                <SubTitle size="25px">Django</SubTitle>
                <Text width="90%" size="15px" lineHeight="1.4">Django est un cadre de développement web open source en Python. Il a pour but de rendre le développement web 2.0 simple et rapide. Pour cette raison, le projet a pour slogan "Le framework pour les perfectionnistes avec des deadlines".</Text>
              </Card>
            </Col>
            <Col size="33%" justifyContent="center" alignItems="center" style={{paddingBottom: "3%"}}>
              <Card alignMobile minHeight={20} paddingLeft="5%" marginRight="10px" hiddenMobileMargin style={{boxShadow: "0 3px 6px rgba(0,0,0,.16), 0 3px 6px rgba(0,0,0,.23)" }} >
                <SubTitle size="25px">Django Rest Framework</SubTitle>
                <Text width="90%" size="15px" lineHeight="1.4">Le framework Django REST est une boîte à outils puissante et flexible pour la création d'API Web.</Text>
              </Card>
            </Col>
            <Col size="33%" justifyContent="center" alignItems="center" style={{paddingBottom: "3%"}}>
              <Card alignMobile minHeight={20} paddingLeft="5%" marginRight="10px" hiddenMobileMargin style={{boxShadow: "0 3px 6px rgba(0,0,0,.16), 0 3px 6px rgba(0,0,0,.23)" }} >
                <SubTitle size="25px">React.js</SubTitle>
                <Text width="90%" size="15px" lineHeight="1.4">React (aussi appelé React.js ou ReactJS) est une bibliothèque JavaScript libre développée par Facebook depuis 2013. Le but principal de cette bibliothèque est de faciliter la création d'application web monopage.</Text>
              </Card>
            </Col>
            <Col size="33%" justifyContent="center" alignItems="center" style={{paddingBottom: "3%"}}>
              <Card alignMobile minHeight={20} paddingLeft="5%" marginRight="10px" hiddenMobileMargin style={{boxShadow: "0 3px 6px rgba(0,0,0,.16), 0 3px 6px rgba(0,0,0,.23)"}} >
                <SubTitle size="25px">Next.js</SubTitle>
                <Text width="90%" size="15px" lineHeight="1.4">Next.js est un framework Web de développement front-end open-source React qui active des fonctionnalités telles que le rendu côté serveur et la génération de sites Web statiques pour les applications Web basées sur React.</Text>
              </Card>
            </Col>
            <Col size="33%" justifyContent="center" alignItems="center" style={{paddingBottom: "3%"}}>
              <Card alignMobile minHeight={20} paddingLeft="5%" marginRight="10px" hiddenMobileMargin style={{boxShadow: "0 3px 6px rgba(0,0,0,.16), 0 3px 6px rgba(0,0,0,.23)" }} >
                <SubTitle size="25px" >React Native</SubTitle>
                <Text width="90%" size="15px" lineHeight="1.4">React Native est un framework d'applications mobiles open source créé par Facebook. Il est utilisé pour développer des applications pour Android, iOS et UWP.</Text>
              </Card>
            </Col>
          </Container>
        </Reveal>
      </Row>

      {/* box three */}

      <Row minHeight="60vh" responsivePaddingBottom="8%" backgroundColor={mainGris} alignItems="center" id="projects">
        <Reveal>
          <Container flex={true}>
            <Col size="33.33%">
              <Title size="18px" fontWeight="400" textTransform="uppercase">Mes projets</Title>
              <SubTitle size="25px">Qu'est ce que j'ai fait ?</SubTitle>
              <Text lineHeight="1.8">Je suis capable de réaliser n'importe quelle application web que ce soit un e-shop, un site vitrine ou une application plus complexe comme un réseau social.</Text>
            </Col>

            <Col size="66.66%">
              <WrapWidth width="90%" height="100%" hiddenMobile center>
                <Flex alignItems="center" height="100%">
                  <Col size="50%" style={{textAlign: "center"}}>
                    <Image styled={{src: eShop, width: "90%"}}></Image>
                    <SubTitle size="20px" fontWeight="100">E-shop</SubTitle>
                  </Col>
                  <Col size="50%" style={{textAlign: "center"}}>
                    <Image  link="https://shaready.fr/home" styled={{src: sr, width: "90%"}}></Image>
                    <SubTitle size="20px" fontWeight="100">Réseau social</SubTitle>
                  </Col>
                </Flex>
              </WrapWidth>
            </Col>
          </Container>
        </Reveal>
      </Row>

      {/* box four */}

      <Row minHeight="40vh" backgroundColor={mainBlue} alignItems="center" id="contact">
        <Reveal>
          <Container flex={true} flexDirection="column">
            <Title size="18px" fontWeight="400" textTransform="uppercase" color="white" textAlign="center" style={{}}>Contactez-moi</Title>
            <div style={{borderTop: "1px solid white", width:"8%", textAlign: "center", paddingBottom: "5%", margin: "0 auto"}}></div>

            <Flex justifyContent="space-around" columnMobile>
              
              <Flex flexDirection="column">
                <Button as="a" href="https://twitter.com/hugo_duchene" color="white" backgroundColor="#00acee" height="80px" width="80px" alignItems="center" borderRadius="40px">
                  <FontAwesomeIcon icon={faTwitter} size="2x"/>
                </Button>
                <SubTitle textAlign="center" color="white" size="15px" fontWeight="400" style={{paddingTop: "10px"}}>Twitter</SubTitle>
              </Flex>

              <Flex flexDirection="column">
                <Button as="a" color="white" backgroundColor="#FF3939" height="80px" width="80px" alignItems="center" borderRadius="40px">
                  <FontAwesomeIcon icon={faEnvelope} size="2x"/>
                </Button>
                <SubTitle textAlign="center" color="white" size="15px" fontWeight="400" style={{paddingTop: "10px"}}>duchenehugo10@gmail.com</SubTitle>
              </Flex>

              <Flex flexDirection="column">
                <Button as="a" href="https://www.linkedin.com/in/hugo-duch%C3%AAne-401b751aa/" color="white" backgroundColor="#2867B2" height="80px" width="80px" alignItems="center" borderRadius="40px">
                  <FontAwesomeIcon icon={faLinkedin} size="2x"/>
                </Button>
                <SubTitle textAlign="center" color="white" size="15px" fontWeight="400" style={{paddingTop: "10px"}}>Linkedin</SubTitle>
              </Flex>
            </Flex>
          </Container>
        </Reveal>
      </Row>

      {/* button to top */}

      <Button 
        as="a" 
        href="#navbar" 
        color="black" 
        width="50px" 
        height="50px" 
        alignItems="center" 
        position="fixed" 
        right="3%" 
        bottom="3%"
        style={{boxShadow: "0 3px 6px rgba(0,0,0,.16), 0 3px 6px rgba(0,0,0,.23)", borderRadius: "25px", backgroundColor: mainGris}}
      >
        <FontAwesomeIcon icon={faArrowUp} />
      </Button>

      {/* footer */}

      <Footer backgroundColor={mainBlue} padding="15px" textAlign="center" style={{borderTop: "0.1px solid white"}}>Hugo.dev © 2021</Footer>
  
  </>)
}

export default App;
