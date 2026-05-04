import { useGlitch } from 'react-powerglitch';
import { useRef } from 'react';
import GlitchIcon from './glitchicon.js';
import Button from 'react-bootstrap/Button';

function MenuButton({ texto, link, icono }) {
  const glitch = useGlitch({ playMode: "manual" });
  const loopRef = useRef(null);

 const startRandomGlitch = () => {
  const run = () => {
    // ⏱ espera random ANTES del glitch
    loopRef.current = setTimeout(() => {
      
      glitch.startGlitch();

      setTimeout(() => {
        glitch.stopGlitch();

        // 🔁 vuelve a ejecutarse
        run();

      }, 150); // duración del glitch

    }, Math.random() * 5000 + 1000); // delay inicial random
  };

  run();
};

  const stopRandomGlitch = () => {
    glitch.stopGlitch();

    if (loopRef.current) {
      clearTimeout(loopRef.current);
    }
  };

    return (
    <Button
        href={link}
        className="menu-button d-flex flex-column align-items-center"
        onMouseEnter={startRandomGlitch}
        onMouseLeave={stopRandomGlitch}
    >
        <GlitchIcon icono={icono} glitchRef={glitch.ref} />

        <span>{texto}</span>
    </Button>
    );
}
export default MenuButton;