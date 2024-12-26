'use client'; // Mark this component as a client component

import React, { useEffect, useState } from 'react';

const Page = () => {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const animationFrame = requestAnimationFrame(() => {
      setRotation(prevRotation => (prevRotation + 1) % 360);
    });

    return () => cancelAnimationFrame(animationFrame);
  }, [rotation]);

  const bannerStyle = {
    width: '100%',
    height: '100vh',
    textAlign: 'center',
    overflow: 'hidden',
    position: 'relative'
  };

  const sliderStyle = {
    position: 'absolute',
    width: '200px',
    height: '250px',
    top: '10%',
    left: 'calc(50% - 100px)',
    transformStyle: 'preserve-3d',
    transform: `perspective(1000px) rotateX(-16deg) rotateY(${rotation}deg)`,
    zIndex: 2
  };

  const contentStyle = {
    position: 'absolute',
    bottom: 0,
    left: '50%',
    transform: 'translateX(-50%)',
    width: 'min(1400px, 100vw)',
    height: 'max-content',
    paddingBottom: '100px',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    zIndex: 1
  };

  const headingStyle = {
    fontFamily: "'ICA Rubrik'",
    fontSize: '16em',
    lineHeight: '1em',
    color: '#25283B',
    position: 'relative'
  };

  const authorStyle = {
    fontFamily: 'Poppins',
    textAlign: 'right',
    maxWidth: '200px'
  };

  const authorHeadingStyle = {
    fontSize: '3em'
  };

  const modelStyle = {
    backgroundImage: "url('/assets/images/model.png')",
    width: '100%',
    height: '75vh',
    position: 'absolute',
    bottom: 0,
    left: 0,
    backgroundSize: 'auto 130%',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'top center',
    zIndex: 1
  };

  return (
    <div className="banner" style={bannerStyle}>
      <div className="slider" style={{...sliderStyle, '--quantity': 10}}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((position) => (
          <div 
            key={position} 
            className="item" 
            style={{ 
              position: 'absolute', 
              inset: '0 0 0 0', 
              transform: `rotateY(calc((${position} - 1) * (360 / 10) * 1deg)) translateZ(550px)`,
              '--position': position 
            }}
          >
            <img 
              src={`/assets/images/dragon_${position}.jpg`} 
              alt={`Dragon ${position}`} 
              style={{
                width: '100%', 
                height: '100%', 
                objectFit: 'cover'
              }} 
            />
          </div>
        ))}
      </div>
      <div className="content" style={contentStyle}>
        <h1 
          data-content="CSS ONLY" 
          style={{
            ...headingStyle,
            position: 'relative',
            '::after': {
              position: 'absolute',
              inset: '0 0 0 0',
              content: 'attr(data-content)',
              zIndex: 2,
              WebkitTextStroke: '2px #d2d2d2',
              color: 'transparent'
            }
          }}
        >
        </h1>
        <div 
          className="model" 
          style={modelStyle} 
        />
      </div>
    </div>
  );
};

export default Page;
