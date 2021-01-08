import Navbar from './components/Navbar'
import {Row, Col, Flex} from './atoms/flexHandler/FlexHandler'
import {Container} from './atoms/Container'
import {Title} from './atoms/Title'
import {Image} from './atoms/Image'
import {WrapColor, WrapWidth} from './atoms/Wrap'
import {SubTitle} from './atoms/SubTitle'
import {Text} from './atoms/Text'
import {Card} from './atoms/Card'

import cvImage from './assets/img/cvImage.svg'
import eShop from './assets/img/e-shop.gif'
import sr from './assets/img/sr.gif'
import {mainBlue, mainGris} from './assets/js/color'

import Fade from 'react-reveal/Fade';
import Reveal from 'react-reveal/Reveal';

const App = () => {

  return(<>
    <Navbar 
      titleColor={mainBlue}
      backgroundColor={mainGris}
      arrayNavItems={[
        {arrayLink: [
          {content: "À propos", link: "#about"},
          {content: "Compétences", link: "#skills"},
          {content: "Projet", link: "#project"},
          {content: "Contactez-moi", link: "#contact"}
        ],
      },
      ]}
    />
    
    {/* box one */}
    
      <Row height="90vh" backgroundColor={mainGris} alignItems="center">
        <Container flex={true}>
          <Col size="50%">
            <Fade top>
              <div>
                <SubTitle size="20px">Bonjour je suis <WrapColor color={mainBlue}>développeur.</WrapColor></SubTitle>
                <SubTitle size="3rem">Hugo Duchêne</SubTitle>
                <Text width="90%" lineHeight="1.5">Passionné depuis ma tendre enfance, j'ai commencé à programmer à l'âge de 15 ans 
                suite à un film qui m'a profondément marqué. À 18 ans j'ai voulu me professionnaliser dans le monde du dévloppement web.
                Et en à peine 3 mois j'ai réussi à être diplomé de la formation développeur d'application python de OpenClassrooms.
                </Text>
              </div>
            </Fade>
          </Col>

          <Col size="50%" alignItems="center">
            <Fade top>
              <Image src={cvImage}/>
            </Fade>
          </Col>

        </Container>
      </Row>

    {/* box two */}

      <Row minHeight="60vh" backgroundColor={mainBlue} alignItems="center" id="about">
        <Container flex={true}>
          <Col size="50%">
            <Fade top>
              <WrapWidth width="80%">
                <Title color="white" size="18px" fontWeight="400" textTransform="uppercase">À propos</Title>
                <SubTitle color="white" size="25px">Comment ai-je appris ?</SubTitle>
                <Text color="white" lineHeight="1.5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged</Text>
              </WrapWidth>
            </Fade>
          </Col>

          <Col size="50%" alignItems="center">
            <Fade top>
              <WrapWidth width="80%">
                <SubTitle color="white" size="25px">Pourquoi me choisir ?</SubTitle>
                <Text color="white" lineHeight="1.5">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
              </WrapWidth>
            </Fade>
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
              <Card paddingLeft="5%" minHeight="20vh" marginRight="10px" style={{backgroundColor: mainBlue, boxShadow: "2px 2px 4px black" }} >
                <SubTitle size="25px" color="white">Python3</SubTitle>
                <Text color="white" size="15px" lineHeight="1.4">Python est un langage de programmation interprété, multi-paradigme et multiplateformes. Il favorise la programmation impérative structurée, fonctionnelle et orientée objet.</Text>
              </Card>
            </Col>
            <Col size="33%" justifyContent="center" alignItems="center" style={{paddingBottom: "3%"}}>
              <Card minHeight="20vh" paddingLeft="5%" marginRight="10px" style={{backgroundColor: mainBlue, boxShadow: "2px 2px 4px black" }} >
                <SubTitle size="25px" color="white">Django</SubTitle>
                <Text width="90%" size="15px" lineHeight="1.4" color="white">Django est un cadre de développement web open source en Python. Il a pour but de rendre le développement web 2.0 simple et rapide. Pour cette raison, le projet a pour slogan "Le framework pour les perfectionnistes avec des deadlines".</Text>
              </Card>
            </Col>
            <Col size="33%" justifyContent="center" alignItems="center" style={{paddingBottom: "3%"}}>
              <Card minHeight="20vh" paddingLeft="5%" marginRight="10px" style={{backgroundColor: mainBlue, boxShadow: "2px 2px 4px black" }} >
                <SubTitle size="25px" color="white">Django Rest Framework</SubTitle>
                <Text width="90%" size="15px" lineHeight="1.4" color="white">Le framework Django REST est une boîte à outils puissante et flexible pour la création d'API Web.</Text>
              </Card>
            </Col>
            <Col size="33%" justifyContent="center" alignItems="center" style={{paddingBottom: "3%"}}>
              <Card minHeight="20vh" paddingLeft="5%" marginRight="10px" style={{backgroundColor: mainBlue, boxShadow: "2px 2px 4px black" }} >
                <SubTitle size="25px" color="white">React.js</SubTitle>
                <Text width="90%" size="15px" lineHeight="1.4" color="white">React (aussi appelé React.js ou ReactJS) est une bibliothèque JavaScript libre développée par Facebook depuis 2013. Le but principal de cette bibliothèque est de faciliter la création d'application web monopage.</Text>
              </Card>
            </Col>
            <Col size="33%" justifyContent="center" alignItems="center" style={{paddingBottom: "3%"}}>
              <Card minHeight="20vh" paddingLeft="5%" marginRight="10px" style={{backgroundColor: mainBlue, boxShadow: "2px 2px 4px black" }} >
                <SubTitle size="25px" color="white">Next.js</SubTitle>
                <Text width="90%" size="15px" lineHeight="1.4" color="white">Next.js est un framework Web de développement front-end open-source React qui active des fonctionnalités telles que le rendu côté serveur et la génération de sites Web statiques pour les applications Web basées sur React.</Text>
              </Card>
            </Col>
            <Col size="33%" justifyContent="center" alignItems="center" style={{paddingBottom: "3%"}}>
              <Card minHeight="20vh" paddingLeft="5%" marginRight="10px" style={{backgroundColor: mainBlue, boxShadow: "2px 2px 4px black" }} >
                <SubTitle size="25px" color="white">React Native</SubTitle>
                <Text width="90%" size="15px" lineHeight="1.4" color="white">React Native est un framework d'applications mobiles open source créé par Facebook. Il est utilisé pour développer des applications pour Android, iOS et UWP.</Text>
              </Card>
            </Col>
          </Container>
        </Reveal>
      </Row>

      {/* box three */}

      <Row minHeight="60vh" backgroundColor={mainGris} alignItems="center" id="project">
        <Reveal>
          <Container flex={true}>
            <Col size="33.33%">
              <Title size="18px" fontWeight="400" textTransform="uppercase">Mes projets</Title>
              <SubTitle size="25px">Qu'est ce que j'ai fait ?</SubTitle>
              <Text lineHeight="1.8">Je suis capable de réaliser n'importe quelle application web que ce soit un e-shop, un site vitrine ou une application plus complexe comme un réseau social.</Text>
            </Col>

            <Col size="66.66%">
              <WrapWidth width="90%" height="100%" center>
                <Flex alignItems="center" height="100%">
                  <Col size="50%" style={{textAlign: "center"}}>
                    <Image src={eShop} width="90%"></Image>
                    <SubTitle size="20px" fontWeight="100">E-shop</SubTitle>
                  </Col>
                  <Col size="50%" style={{textAlign: "center"}}>
                    <Image src={sr} width="90%"></Image>
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
          <Container flex={true}>

          </Container>
        </Reveal>
      </Row>

  </>)
}

export default App;
