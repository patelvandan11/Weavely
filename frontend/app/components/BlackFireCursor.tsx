"use client";

import { useEffect, useRef } from 'react';

const SmoothPointyCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const posRef = useRef({ x: 0, y: 0 });
  const velocityRef = useRef({ x: 0, y: 0 });
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const handleMouseMove = (e: MouseEvent) => {
      velocityRef.current = {
        x: e.clientX - posRef.current.x,
        y: e.clientY - posRef.current.y
      };
      posRef.current = { x: e.clientX, y: e.clientY };
    };

    const animate = () => {
      const { x, y } = posRef.current;
      const { x: velX, y: velY } = velocityRef.current;
      const speed = Math.min(Math.sqrt(velX * velX + velY * velY), 50);

      // Calculate movement direction (pointy end faces opposite)
      const moveAngle = Math.atan2(velY, velX);
      
      // Subtle deformation parameters
      const stretch = 1 + speed * 0.008; // Gentle stretch
      const squash = 1 - speed * 0.003; // Counter-squash
      const pointiness = Math.min(speed * 0.02, 10); // How pointy it gets
      
      // Apply smooth transformations
      cursor.style.transform = `
        translate(${x - 12}px, ${y - 12}px)
        rotate(${moveAngle}rad)
        scaleX(${stretch})
        scaleY(${squash})
      `;

      // Dynamic border-radius for pointy effect
      cursor.style.borderRadius = `
        50% 50% 
        ${50 - pointiness}% ${50 - pointiness}%
      `;

      // Very subtle velocity-based effects
      cursor.style.filter = `blur(${Math.min(speed * 0.001, 0.2)}px)`;
      cursor.style.opacity = `${0.9 + speed * 0.002}`;

      // Decelerate
      velocityRef.current = {
        x: velX * 0.85,
        y: velY * 0.85
      };

      animationRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove);
    animationRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="smooth-pointy-cursor"
      style={{
        backgroundColor: '#000',
        mixBlendMode: 'difference'
      }}
    />
  );
};

export default SmoothPointyCursor;
