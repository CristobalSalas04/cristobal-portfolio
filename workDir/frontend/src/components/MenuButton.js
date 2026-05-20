import { useGlitch } from 'react-powerglitch';
import { useRef } from 'react';
import GlitchIcon from './glitchicon.js';
import Button from 'react-bootstrap/Button';

function MenuButton({ texto, onClick, href, icono }) {
  const glitch = useGlitch({ playMode: "manual" });
  const loopRef = useRef(null);

  const startRandomGlitch = () => {
    const run = () => {
      loopRef.current = setTimeout(() => {
        glitch.startGlitch();

        setTimeout(() => {
          glitch.stopGlitch();
          run();
        }, 150);

      }, Math.random() * 5000 + 1000);
    };
    run();
  };

  const stopRandomGlitch = () => {
    glitch.stopGlitch();
    if (loopRef.current) {
      clearTimeout(loopRef.current);
    }
  };

  const handleClick = (e) => {
    if (onClick) {
      e.preventDefault();
      onClick();
    } else if (!href) {
      e.preventDefault();
    }
  };

  const buttonProps = {
    className: "menu-button d-flex flex-column align-items-center",
    onMouseEnter: startRandomGlitch,
    onMouseLeave: stopRandomGlitch,
    onClick: handleClick
  };

  if (href && !onClick) {
    buttonProps.href = href;
  }

  return (
    <Button {...buttonProps}>
      <div className="menu-button-bg"></div>
      <GlitchIcon icono={icono} glitchRef={glitch.ref} />
      <span>{texto}</span>
    </Button>
  );
}

export default MenuButton;