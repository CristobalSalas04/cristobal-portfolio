import { useState } from 'react';
import './App.scss';
import HeroMenu from './components/HeroMenu.js'
import HeroContainer from './components/HeroContainer.js'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
    
  const [activeContent, setActiveContent] = useState('inicio');
  const [transitionState, setTransitionState] = useState('animate-in');

    const handleNavigation = (newContent) => {

    if (newContent === activeContent) return;

    setTransitionState('animate-out');

    setTimeout(() => {

      setActiveContent(newContent);

      setTransitionState('animate-in');

    }, 200);
  };

    const renderContent = () => {
      switch(activeContent) {
        case 'inicio':
          return (
            <div className="hero-container-wrapper">
            <HeroContainer title="Bienvenido a mi sitio">
              <p>Esta es mi pagina web portafolio</p>
              <p>Puedes navegar presionando los botones de abajo</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </HeroContainer>
            </div>
          );
        case 'proyectos':
          return (
            <div className="hero-container-wrapper">
            <HeroContainer title="Mis proyectos">
              <div className="proyectos-grid">
                <div className="proyecto-card">Proyecto 1</div>
                <div className="proyecto-card">Proyecto 2</div>
                <div className="proyecto-card">Proyecto 3</div>
              </div>
            </HeroContainer>
            </div>
          );
        case 'perfil':
          return (
            <div className="hero-container-wrapper">
              <HeroContainer title="Perfil">
                <div className="proyectos-grid">
                  <div className="proyecto-card">Hola soy yo Cristobal Salas omg</div>
                  <div className="proyecto-card">test</div>
                  <div className="proyecto-card">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                </div>
              </HeroContainer>
              <HeroContainer title="Fotos" variant='gray'>
                <div className="proyectos-grid">
                  <div className="proyecto-card">Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
                </div>
              </HeroContainer>
            </div>
          );
        case 'galeria':
          return (
            <div className="hero-container-wrapper">
              <HeroContainer title="Galeria">
                <div className="proyectos-grid">
                  <div className="proyecto-card">Aca pondria mas de una imagen pero nomas estoy probando</div>
                  <div className="proyecto-card">test</div>
                  <div className="proyecto-card">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                </div>
              </HeroContainer>
              <HeroContainer title="Foto 1" variant='gray'>
                <div className="proyectos-grid">
                  <div className="proyecto-card">Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
                </div>
              </HeroContainer>
              <HeroContainer title="Foto 2" variant='gray'>
                <div className="proyectos-grid">
                  <div className="proyecto-card">Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
                </div>
              </HeroContainer>
            </div>
          );
        case 'blog':
          return (
            <div className="hero-container-wrapper">
            <HeroContainer title="Blog">
              <div className="proyectos-grid">
                <div className="proyecto-card">Articulo 1</div>
                <div className="proyecto-card">Articulo 2</div>
                <div className="proyecto-card">Articulo 3</div>
              </div>
            </HeroContainer>
            </div>
          );
        case 'contacto':
          return (
            <div className="hero-container-wrapper">
              <HeroContainer title="Contacto">
              <form>
                <div>
                  <label>Nombre:</label>
                  <input type="text" placeholder="Tu nombre" />
                </div>
                <div>
                  <label>Email:</label>
                  <input type="email" placeholder="tu@email.com" />
                </div>
                <div>
                  <label>Mensaje:</label>
                  <textarea placeholder="Tu mensaje"></textarea>
                </div>
                <button type="submit">Enviar</button>
              </form>
              </HeroContainer>
            </div>
          );
        default:
          return <h2>Contenido no encontrado</h2>;
      }
    };

    return (
    <div className="App">
    <Container fluid className="min-vh-100 mainContainer d-flex flex-column">
    
      <Row className="py-4 border-bottom">
        <Col>
          <h1>pagina web chad</h1>
          <p className="lead">Bienvenido a mi sitio wep</p>
        </Col>
      </Row>

      
      <Row className="flex-grow-1">
        <Col md={12} className="p-4 mainContent">
        <div className={transitionState}>
          {renderContent()}
        </div>
        </Col>
      </Row>


      <Row className="py-4">
        <Col md={12} className="d-flex justify-content-center">
          <HeroMenu onNavigate={handleNavigation}/>
        </Col>
      </Row>


      <Row className="py-3 border-top">
        <Col className="text-center text-muted">
          <small>pagina cristobal salas - 2056</small>
        </Col>
      </Row>
    </Container>
  </div>
    );
}

export default App;