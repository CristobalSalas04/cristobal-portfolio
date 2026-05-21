import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MenuButton from './MenuButton.js';
import { GradientBorder } from 'react-gradient-borders';

function HeroMenu({ onNavigate }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const columns = 3;

  const buttons = [
    {
      texto: "Inicio",
      navigation: {
        type: "internal",
        target: "inicio"
      },
      icono: "bi bi-house-door-fill"
    },
    {
      texto: "Proyectos",
      navigation: {
        type: "internal",
        target: "proyectos"
      },
      icono: "bi bi-grid-fill"
    },
    {
      texto: "Perfil",
      navigation: {
        type: "internal",
        target: "perfil"
      },
      icono: "bi bi-person-fill"
    },
    {
      texto: "Galería",
      navigation: {
        type: "internal",
        target: "galeria"
      },
      icono: "bi bi-image-fill"
    },
    {
      texto: "Blog",
      navigation: {
        type: "internal",
        target: "blog"
      },
      icono: "bi bi-journal-richtext"
    },
    {
      texto: "Contacto",
      navigation: {
        type: "internal",
        target: "contacto"
      },
      icono: "bi bi-envelope-fill"
    }
  ];

  const borderProps = {
    colors: [
      '#31c0e0', '#31c0e0', '#58f3ff', '#31c0e0',
      '#31c0e0', '#58f3ff', '#31c0e0', '#31c0e0'
    ],
    strokeWidth: 2,
    borderRadius: 0,
    lineCapStart: "square",
    lineCapEnd: "square",
    animate: true,
    duration: 2500,
    animationMode: "loop",
    variant: "default",
    reverse: false,
    startPosition: "top-right",
    trigger: "manual",
    showWhenInactive: false,
    borderPosition: "inner",
    borderOffset: 0,
    ants: false,
    antsDashWidth: 20,
    antsGapWidth: 16,
    antsSpeed: 250,
    lazy: true,
    lazyRootMargin: "100px",
    resizeThrottle: 150,
    segments: 300,
    style: {},
    className: "animBorder",
  };

  const getNavigationProps = (button) => {
    if (button.navigation.type === 'internal' && onNavigate) {
      return { 
        onClick: () => onNavigate(button.navigation.target) 
      };
    } 
    else if (button.navigation.type === 'external') {
      return { 
        href: button.navigation.target 
      };
    }
    return {};
  };

  const renderButton = (button, index) => {
    const isMain = hoveredIndex === index;
    const isLeftNeighbor = hoveredIndex === index + 1 && index % columns !== columns - 1;
    const isRightNeighbor = hoveredIndex === index - 1 && index % columns !== 0;
    const isTopNeighbor = hoveredIndex === index + columns;
    const isBottomNeighbor = hoveredIndex === index - columns;

    return (
      <Col key={index} md={12 / columns} className='HeroMenuCol'>
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
              isMain || isLeftNeighbor || isRightNeighbor ||
              isTopNeighbor || isBottomNeighbor
            }
          >
            <MenuButton
              texto={button.texto}
              icono={button.icono}
              {...getNavigationProps(button)}
            />
          </GradientBorder>
        </div>
      </Col>
    );
  };

  return (
    <Container className='HeroMenu'>
      <Row>
        {buttons.map((button, index) => renderButton(button, index))}
      </Row>
    </Container>
  );
}

export default HeroMenu;