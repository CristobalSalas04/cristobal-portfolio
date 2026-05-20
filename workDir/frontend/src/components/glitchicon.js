import { useGlitch } from 'react-powerglitch';

const GlitchIcon = ({ icono, size = "2rem", glitchRef}) => {
  return (
    <div className="glitch-icon" ref={glitchRef}>
      <i className={icono} style={{ fontSize: size }}></i>

      <i className={`${icono} glitch-layer layer1`} style={{ fontSize: size }}></i>
      <i className={`${icono} glitch-layer layer2`} style={{ fontSize: size }}></i>
      <i className={`${icono} glitch-layer layer3`} style={{ fontSize: size }}></i>
    </div>
  );
};

export default GlitchIcon;