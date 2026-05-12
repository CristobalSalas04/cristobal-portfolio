import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MenuButton from './MenuButton.js';
import { GradientBorder } from 'react-gradient-borders';

function HeroMenu() {

  const [hoveredIndex, setHoveredIndex] = useState(null);

  const columns = 2;

  const buttons = [

    {
      texto: "Inicio",
      link: "/",
      icono: "bi bi-house-door-fill"
    },

    {
      texto: "Proyectos",
      link: "/proyectos",
      icono: "bi bi-grid-fill"
    },

    {
      texto: "Perfil",
      link: "/perfil",
      icono: "bi bi-person-fill"
    },

    {
      texto: "Galería",
      link: "/galeria",
      icono: "bi bi-image-fill"
    },

    {
      texto: "Blog",
      link: "/blog",
      icono: "bi bi-journal-richtext"
    },

    {
      texto: "Contacto",
      link: "/contacto",
      icono: "bi bi-envelope-fill"
    },
  ];
  const borderProps = {

    // Appearance
    colors: [
      '#31c0e0',
      '#31c0e0',
      '#58f3ff',
      '#31c0e0',
      '#31c0e0',
      '#58f3ff',
      '#31c0e0',
      '#31c0e0'
    ],

    strokeWidth: 2,
    borderRadius: 0,
    lineCapStart: "square",
    lineCapEnd: "square",

    // Animation
    animate: true,
    duration: 5000,
    animationMode: "loop",
    variant: "default",
    reverse: false,
    startPosition: "top-left",

    // Trigger
    trigger: "manual",
    showWhenInactive: false,

    // Border Position
    borderPosition: "inner",
    borderOffset: 0,

    // Ants
    ants: false,
    antsDashWidth: 20,
    antsGapWidth: 16,
    antsSpeed: 250,

    // Performance
    lazy: true,

    lazyRootMargin: "100px",
    resizeThrottle: 150,
    segments: 300,

    // Styling
    style: {},
    className: "animBorder",
  };

  const renderButton = (button, index) => {

    const isMain =
      hoveredIndex === index;

    const isLeftNeighbor =
      hoveredIndex === index + 1 &&
      index % columns !== columns - 1;

    const isRightNeighbor =
      hoveredIndex === index - 1 &&
      index % columns !== 0;

    const isTopNeighbor =
      hoveredIndex === index + columns;

    const isBottomNeighbor =
      hoveredIndex === index - columns;

    return (
      <Col
        key={index}
        md={12 / columns}
        className='HeroMenuCol'
      >

        <div
          className={`
            borderWrapper
            ${isLeftNeighbor ? 'neighborLeft' : ''}
            ${isRightNeighbor ? 'neighborRight' : ''}
            ${isTopNeighbor ? 'neighborTop' : ''}
            ${isBottomNeighbor ? 'neighborBottom' : ''}
          `}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >

          <GradientBorder
            {...borderProps}
            active={
              isMain ||
              isLeftNeighbor ||
              isRightNeighbor ||
              isTopNeighbor ||
              isBottomNeighbor
            }
          >
            <MenuButton
              texto={button.texto}
              link={button.link}
              icono={button.icono}
            />
          </GradientBorder>
        </div>
      </Col>
    );
  };

  return (
    <Container className='HeroMenu'>
      <Row>
        {buttons.map((button, index) =>
          renderButton(button, index)
        )}
      </Row>
    </Container>
  );
}
/*<Container className='HeroMenu'>
      <Row>
        {buttons.map((button, index) =>
          renderButton(button, index)
        )}
      </Row>
    </Container> <== en caso de poner el menu abajo*/
export default HeroMenu;