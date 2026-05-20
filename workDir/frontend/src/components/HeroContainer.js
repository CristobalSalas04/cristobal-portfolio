import React from 'react';


function HeroContainer({ 
  title, 
  children, 
  variant = 'default',
  className = '',
  ...props 
}) {
  return (
    <div className={`hero-container hero-container-${variant} ${className}`} {...props}>
      {title && <h2 className="hero-title">{title}</h2>}
      <div className="hero-content">
        {children}
      </div>
    </div>
  );
}

export default HeroContainer;