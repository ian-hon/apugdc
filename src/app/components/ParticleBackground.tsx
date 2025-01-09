import React, { useRef, useEffect, useState } from 'react';

interface Particle {
    x: number;
    y: number;
    radius: number;
    color: string;
    vx: number;
    vy: number;
}

const ParticleBackground: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const animationFrameRef = useRef<number>();

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let particles: Particle[] = [];
        let backgroundOpacity = 1.0;

        const resizeCanvas = () => {
            if (canvas && window) {
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
            }
        };

        const createParticles = () => {
            const particleCount = 100;
            particles = [];

            for (let i = 0; i < particleCount; i++) {
                particles.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    radius: Math.random() * 2 + 1,
                    color: `rgba(255, 255, 255, ${Math.random() * 0.5 + 0.5})`,
                    vx: (Math.random() - 0.5) * 0.5,
                    vy: (Math.random() - 0.5) * 0.5,
                });
            }
        };

        const drawParticles = () => {
            if (!ctx || !canvas) return;
            
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particles.forEach((particle) => {
                ctx.beginPath();
                ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
                ctx.fillStyle = particle.color;
                ctx.globalAlpha = backgroundOpacity;
                ctx.fill();

                particle.x += particle.vx;
                particle.y += particle.vy;

                if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
                if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;
            });

            animationFrameRef.current = requestAnimationFrame(drawParticles);
        };

        const handleResize = () => {
            resizeCanvas();
            createParticles();
        };

        resizeCanvas();
        createParticles();
        drawParticles();

        window.addEventListener('resize', handleResize);

        window.addEventListener('scroll', () => {
            backgroundOpacity = Math.max(1 - (scrollY / window.innerHeight), 0);
        });

        return () => {
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
            }
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <canvas 
            ref={canvasRef} 
            style={{ 
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: 1,
                pointerEvents: 'none',
                background: 'transparent',
            }} 
        />
    );
};

export default ParticleBackground;