"use client";

import { useEffect, useRef } from "react";

// Particle class - moved outside component
class Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  connections: number;
  pulsePhase: number;
  pulseSpeed: number;
  canvasWidth: number;
  canvasHeight: number;

  constructor(canvasWidth: number, canvasHeight: number) {
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;
    this.x = Math.random() * canvasWidth;
    this.y = Math.random() * canvasHeight;
    this.vx = (Math.random() - 0.5) * 0.5;
    this.vy = (Math.random() - 0.5) * 0.5;
    this.size = Math.random() * 2 + 1;
    this.opacity = Math.random() * 0.5 + 0.3;
    this.connections = 0;
    this.pulsePhase = Math.random() * Math.PI * 2;
    this.pulseSpeed = Math.random() * 0.02 + 0.01;
  }

  update(mouseX: number, mouseY: number, mouseRadius: number) {
    // Move particle
    this.x += this.vx;
    this.y += this.vy;

    // Bounce off edges
    if (this.x < 0 || this.x > this.canvasWidth) this.vx *= -1;
    if (this.y < 0 || this.y > this.canvasHeight) this.vy *= -1;

    // Keep within bounds
    this.x = Math.max(0, Math.min(this.canvasWidth, this.x));
    this.y = Math.max(0, Math.min(this.canvasHeight, this.y));

    // Update pulse
    this.pulsePhase += this.pulseSpeed;

    // Mouse interaction - attract particles
    const dx = mouseX - this.x;
    const dy = mouseY - this.y;
    const distance = Math.sqrt(dx * dx + dy * dy);

    if (distance < mouseRadius && distance > 0) {
      const force = (mouseRadius - distance) / mouseRadius;
      this.vx += (dx / distance) * force * 0.1;
      this.vy += (dy / distance) * force * 0.1;
    }

    // Limit velocity
    const maxSpeed = 2;
    const speed = Math.sqrt(this.vx * this.vx + this.vy * this.vy);
    if (speed > maxSpeed) {
      this.vx = (this.vx / speed) * maxSpeed;
      this.vy = (this.vy / speed) * maxSpeed;
    }

    // Add slight friction
    this.vx *= 0.99;
    this.vy *= 0.99;
  }

  draw(ctx: CanvasRenderingContext2D) {
    // Pulsing effect
    const pulse = Math.sin(this.pulsePhase) * 0.5 + 0.5;
    const currentSize = this.size * (1 + pulse * 0.3);
    const currentOpacity = this.opacity * (0.7 + pulse * 0.3);

    // Glow effect
    const gradient = ctx.createRadialGradient(
      this.x,
      this.y,
      0,
      this.x,
      this.y,
      currentSize * 3
    );

    // Color based on connections (more connections = warmer color)
    const hue = 200 + this.connections * 5; // Blue to purple
    gradient.addColorStop(0, `hsla(${hue}, 80%, 60%, ${currentOpacity})`);
    gradient.addColorStop(
      0.5,
      `hsla(${hue}, 80%, 50%, ${currentOpacity * 0.5})`
    );
    gradient.addColorStop(1, `hsla(${hue}, 80%, 40%, 0)`);

    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(this.x, this.y, currentSize * 3, 0, Math.PI * 2);
    ctx.fill();

    // Core particle
    ctx.fillStyle = `hsla(${hue}, 90%, 70%, ${currentOpacity})`;
    ctx.beginPath();
    ctx.arc(this.x, this.y, currentSize, 0, Math.PI * 2);
    ctx.fill();

    // Reset connections for next frame
    this.connections = 0;
  }
}

export default function ThreeBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    const mouse = { x: 0, y: 0 };
    const connectionDistance = 150;
    const mouseRadius = 200;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    // Initialize particles
    const initParticles = () => {
      particles = [];
      const particleCount = Math.min(
        Math.floor((canvas.width * canvas.height) / 15000),
        120
      );

      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle(canvas.width, canvas.height));
      }
    };

    // Draw connections between particles (neural network style)
    const drawConnections = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionDistance) {
            particles[i].connections++;
            particles[j].connections++;

            // Calculate opacity based on distance
            const opacity = (1 - distance / connectionDistance) * 0.5;

            // Color gradient based on connection strength
            const avgConnections =
              (particles[i].connections + particles[j].connections) / 2;
            const hue = 200 + avgConnections * 3;

            // Draw line with gradient
            const gradient = ctx.createLinearGradient(
              particles[i].x,
              particles[i].y,
              particles[j].x,
              particles[j].y
            );
            gradient.addColorStop(0, `hsla(${hue}, 70%, 60%, ${opacity})`);
            gradient.addColorStop(
              0.5,
              `hsla(${hue + 10}, 70%, 55%, ${opacity * 1.2})`
            );
            gradient.addColorStop(1, `hsla(${hue}, 70%, 60%, ${opacity})`);

            ctx.strokeStyle = gradient;
            ctx.lineWidth = 1 + avgConnections * 0.1;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();

            // Add data flow animation along connections
            if (Math.random() > 0.98) {
              const progress = Math.random();
              const x =
                particles[i].x + (particles[j].x - particles[i].x) * progress;
              const y =
                particles[i].y + (particles[j].y - particles[i].y) * progress;

              ctx.fillStyle = `hsla(${hue + 40}, 90%, 70%, ${opacity * 2})`;
              ctx.beginPath();
              ctx.arc(x, y, 2, 0, Math.PI * 2);
              ctx.fill();
            }
          }
        }
      }
    };

    // Mouse connection effect
    const drawMouseConnections = () => {
      particles.forEach((particle) => {
        const dx = mouse.x - particle.x;
        const dy = mouse.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < mouseRadius && distance > 0) {
          const opacity = (1 - distance / mouseRadius) * 0.6;

          const gradient = ctx.createLinearGradient(
            particle.x,
            particle.y,
            mouse.x,
            mouse.y
          );
          gradient.addColorStop(0, `hsla(280, 80%, 60%, ${opacity})`);
          gradient.addColorStop(1, `hsla(320, 80%, 60%, ${opacity})`);

          ctx.strokeStyle = gradient;
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.moveTo(particle.x, particle.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
        }
      });

      // Draw mouse glow
      if (mouse.x > 0 && mouse.y > 0) {
        const gradient = ctx.createRadialGradient(
          mouse.x,
          mouse.y,
          0,
          mouse.x,
          mouse.y,
          50
        );
        gradient.addColorStop(0, "hsla(280, 80%, 60%, 0.3)");
        gradient.addColorStop(1, "hsla(280, 80%, 60%, 0)");

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 50, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    // Animation loop
    const animate = () => {
      // Create trailing effect
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw
      drawConnections();
      particles.forEach((particle) => {
        particle.update(mouse.x, mouse.y, mouseRadius);
        particle.draw(ctx);
      });
      drawMouseConnections();

      animationFrameId = requestAnimationFrame(animate);
    };

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    // Touch handler for mobile
    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        mouse.x = e.touches[0].clientX;
        mouse.y = e.touches[0].clientY;
      }
    };

    // Initialize
    resizeCanvas();
    animate();

    // Event listeners
    window.addEventListener("resize", resizeCanvas);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleTouchMove);

    // Cleanup
    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10 bg-gradient-to-br from-black via-gray-900 to-black"
      style={{ pointerEvents: "none" }}
    />
  );
}
