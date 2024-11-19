import React, { useEffect, useRef, useState } from 'react';
import { isMobile } from 'react-device-detect';

interface Particle {
  x: number;
  y: number;
}

const ParticleCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const initialParticles: Particle[] = [];
    for (let i = 0; i < 100; i++) {
      initialParticles.push({ x: Math.random() * canvas.width, y: Math.random() * canvas.height });
    }
    setParticles(initialParticles);

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, 5, 0, Math.PI * 2);
        ctx.fill();
      });
    };

    const handleOrientation = (event: DeviceOrientationEvent) => {
      const { beta, gamma } = event;
      setParticles(prevParticles => prevParticles.map(p => {
        p.x += gamma ? gamma / 10 : 0;
        p.y += beta ? beta / 10 : 0;
        if (p.x > canvas.width) p.x = 0;
        if (p.x < 0) p.x = canvas.width;
        if (p.y > canvas.height) p.y = 0;
        if (p.y < 0) p.y = canvas.height;
        return p;
      }));
      drawParticles();
    };

    if (isMobile) {
      window.addEventListener('deviceorientation', handleOrientation);
    }

    drawParticles();

    return () => {
      if (isMobile) {
        window.removeEventListener('deviceorientation', handleOrientation);
      }
    };
  }, [particles]);

  return <canvas ref={canvasRef} />;
};

export default ParticleCanvas;