import { useState } from 'react';
import './App.scss';
import HeroMenu from './components/HeroMenu.js'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
  const [activeContent, setActiveContent] = useState('inicio');

  const renderContent = () => {
    switch(activeContent) {
      case 'inicio':
        return (
          <div>
            <h2>Bienvenido a mi sitio</h2>
            <p>Esta es la pagina principal para poner test test test test etst test est etest</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        );
      case 'proyectos':
        return (
          <div>
            <h2>Mis Proyectos</h2>
            <div className="proyectos-grid">
              <div className="proyecto-card">Proyecto 1</div>
              <div className="proyecto-card">Proyecto 2</div>
              <div className="proyecto-card">Proyecto 3</div>
            </div>
          </div>
        );
      case 'perfil':
        return (
          <div>
            <h2>Mi Perfil</h2>
            <p>Nombre: Tu Nombre</p>
            <p>Email: tu@email.com</p>
            <p>Bio: Desarrollador web apasionado por la tecnología.</p>
          </div>
        );
      case 'galeria':
        return (
          <div>
            <h2>Galería</h2>
            <div className="galeria-grid">
              <div className="galeria-item">Imagen 1</div>
              <div className="galeria-item">Imagen 2</div>
              <div className="galeria-item">Imagen 3</div>
            </div>
          </div>
        );
      case 'blog':
        return (
          <div>
            <h2>Blog</h2>
            <article>
              <h3>Artículo 1</h3>
              <p>Contenido del primer artículo...</p>
            </article>
            <article>
              <h3>Artículo 2</h3>
              <p>Contenido del segundo artículo...</p>
            </article>
          </div>
        );
      case 'contacto':
        return (
          <div>
            <h2>Contacto</h2>
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
          </div>
        );
      default:
        return <h2>Contenido no encontrado</h2>;
    }
  };

  return (
    <div className="App">
      <Container fluid className="h-100">
        <Row className="py-4 border-bottom">
          <Col>
            <h1>pagina web chad</h1>
            <p className="lead">Bienvenido a mi sitio</p>
          </Col>
        </Row>

        <Row className="flex-grow-1">
          <Col md={8} className="p-4 contenido-principal">
            {renderContent()}
          </Col>
          
          <Col md={4} className="bg-dark p-3">
            <HeroMenu onNavigate={setActiveContent} />
          </Col>
        </Row>

        <Row className="py-3 border-top">
          <Col className="text-center text-muted">
            <small>Footer - 2056</small>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;