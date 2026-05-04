import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MenuButton from './MenuButton.js'

function HeroMenu() {
  return (
    <Container className='HeroMenu'>
      <Row>
        <Col> <MenuButton texto="Inicio" link="/" icono="bi bi-house-door-fill" /> </Col>
        <Col> <MenuButton texto="Inicio" link="/" icono="bi bi-house" /> </Col>
      </Row>
      <Row>
        <Col> <MenuButton texto="Inicio" link="/" icono="bi bi-house" /> </Col>
        <Col> <MenuButton texto="Inicio" link="/" icono="bi bi-house" /> </Col>
        <Col> <MenuButton texto="Inicio" link="/" icono="bi bi-house" /> </Col>
      </Row>
    </Container>
  );
}

export default HeroMenu;