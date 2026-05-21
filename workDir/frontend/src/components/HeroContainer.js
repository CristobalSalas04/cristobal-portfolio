import React from 'react';

function HeroContainer({
  title,
  children,
  variant = 'default',
  className = '',
  animationDelay = 0,
  ...props
}) {

  return (
    <div
      className={`hero-container hero-container-${variant} ${className}`}
      style={{ animationDelay: `${animationDelay}s` }}
      {...props}
    >
      <div className="hero-header">

        <div className='hero-icon'>
          <i className='bi bi-diamond-fill' style={{ fontSize: '1rem' }}></i>
          <i className='bi bi-diamond-fill layer1' style={{ fontSize: '1rem' }}></i>
          <i className='bi bi-diamond-fill layer2' style={{ fontSize: '1rem' }}></i>
          <i className='bi bi-diamond-fill layer3' style={{ fontSize: '1rem' }}></i>
        </div>

        {title && (
          <h2 className="hero-title">{title}</h2>
        )}

      </div>

      <div className="hero-content">
        {children}
      </div>
    </div>
  );
}

export default HeroContainer;