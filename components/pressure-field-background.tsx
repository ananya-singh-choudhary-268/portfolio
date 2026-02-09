"use client";
import { useEffect, useRef, useState } from "react";

/**
 * Subtle Matrix-Inspired Background
 * 
 * Features:
 * - Continuous subtle matrix rain across the screen
 * - More visible and darker columns near mouse position
 * - Gentle floating particles
 * - Calm, professional aesthetic
 */

interface MatrixColumn {
  x: number;
  y: number;
  speed: number;
  chars: string[];
  baseOpacity: number;
  isAmbient: boolean;
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
}

export default function PressureFieldBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let animationId: number;
    let matrixColumns: MatrixColumn[] = [];
    let particles: Particle[] = [];

    // Subtle color palette - enhanced visibility
    const colors = {
      matrixSubtle: ["#a0b0c0", "#90a0b0", "#8090a0", "#a8b8c8"],
      matrixDark: ["#304060", "#203050", "#405070", "#253555"],
      particle: "#b0c0d0",
    };

    // Matrix characters
    const matrixChars = "01アイウエオカキクケコサシスセソタチツテト{}[]()<>/\\|=+-*&%$#@!?.,:;'\"".split("");

    const COLUMN_WIDTH = 18;
    const MOUSE_INFLUENCE_RADIUS = 200;

    function createMatrixColumn(x: number, isAmbient: boolean): MatrixColumn {
      return {
        x: x,
        y: -Math.random() * height,
        speed: Math.random() * 2 + 1.5,
        chars: Array(Math.floor(Math.random() * 20 + 15))
          .fill(0)
          .map(() => matrixChars[Math.floor(Math.random() * matrixChars.length)]),
        baseOpacity: isAmbient ? 0.35 : 0.6,
        isAmbient: isAmbient,
      };
    }

    function createParticle(): Particle {
      return {
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.2 + 0.05,
      };
    }

    function initElements() {
      matrixColumns = [];
      particles = [];

      // Create continuous ambient matrix columns across the screen
      const columnCount = Math.ceil(width / COLUMN_WIDTH);
      for (let i = 0; i < columnCount; i++) {
        const column = createMatrixColumn(i * COLUMN_WIDTH, true);
        // Stagger starting positions
        column.y = Math.random() * height * 2 - height;
        matrixColumns.push(column);
      }

      // Initialize ambient particles
      for (let i = 0; i < 40; i++) {
        particles.push(createParticle());
      }
    }

    function handleResize() {
      if (!canvas) return;
      
      width = window.innerWidth;
      height = window.innerHeight;

      const dpr = window.devicePixelRatio || 1;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.scale(dpr, dpr);

      initElements();
    }

    function handleMouseMove(e: MouseEvent) {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    }

    function drawMatrixColumn(column: MatrixColumn) {
      const fontSize = 14;
      ctx.font = `${fontSize}px "Courier New", monospace`;

      // Calculate distance from mouse to this column
      const dx = mouseRef.current.x - column.x;
      const mouseDistance = Math.abs(dx);
      
      // Proximity factor: 1 when at mouse, 0 when far
      const proximityFactor = Math.max(0, 1 - mouseDistance / MOUSE_INFLUENCE_RADIUS);
      
      // Interpolate opacity based on mouse proximity
      const baseOpacity = column.baseOpacity;
      const maxOpacity = 0.95;
      const currentOpacity = baseOpacity + (maxOpacity - baseOpacity) * proximityFactor;

      column.chars.forEach((char, i) => {
        const y = column.y + i * fontSize;
        
        if (y > -fontSize && y < height + fontSize) {
          // Gradient effect - brighter at the head
          const distanceFromHead = i / column.chars.length;
          const charOpacity = currentOpacity * (1 - distanceFromHead * 0.6);
          
          // Choose color based on proximity - darker near mouse
          const colorSet = proximityFactor > 0.3 ? colors.matrixDark : colors.matrixSubtle;
          ctx.fillStyle = colorSet[i % colorSet.length];
          ctx.globalAlpha = charOpacity;
          
          // Glow effect for the head, stronger near mouse
          if (i < 3) {
            ctx.shadowBlur = 4 + proximityFactor * 12;
            ctx.shadowColor = proximityFactor > 0.3 ? colors.matrixDark[0] : colors.matrixSubtle[0];
          } else {
            ctx.shadowBlur = 0;
          }
          
          ctx.fillText(char, column.x, y);
        }
      });

      ctx.shadowBlur = 0;
      ctx.globalAlpha = 1;
    }

    function render() {
      // Soft gradient background
      const gradient = ctx.createLinearGradient(0, 0, width, height);
      gradient.addColorStop(0, "#fafbfc");
      gradient.addColorStop(0.5, "#f5f6f8");
      gradient.addColorStop(1, "#f0f2f5");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      // Update and draw matrix columns
      matrixColumns.forEach((column) => {
        column.y += column.speed;

        // Reset column when it goes off screen
        if (column.y > height + 300) {
          column.y = -Math.random() * 200 - 100;
          // Regenerate characters
          column.chars = Array(Math.floor(Math.random() * 20 + 15))
            .fill(0)
            .map(() => matrixChars[Math.floor(Math.random() * matrixChars.length)]);
        }

        drawMatrixColumn(column);
      });

      // Update and draw particles
      particles.forEach((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Wrap around edges
        if (particle.x < 0) particle.x = width;
        if (particle.x > width) particle.x = 0;
        if (particle.y < 0) particle.y = height;
        if (particle.y > height) particle.y = 0;

        ctx.globalAlpha = particle.opacity;
        ctx.fillStyle = colors.particle;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
      });

      ctx.globalAlpha = 1;

      // Subtle vignette overlay
      const vignette = ctx.createRadialGradient(
        width / 2, height / 2, 0,
        width / 2, height / 2, Math.max(width, height) / 2
      );
      vignette.addColorStop(0, "rgba(255, 255, 255, 0)");
      vignette.addColorStop(1, "rgba(240, 242, 245, 0.2)");
      ctx.fillStyle = vignette;
      ctx.fillRect(0, 0, width, height);

      animationId = requestAnimationFrame(render);
    }

    handleResize();
    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);

    setTimeout(() => {
      setIsLoaded(true);
      animationId = requestAnimationFrame(render);
    }, 100);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`fixed inset-0 -z-10 transition-opacity duration-1000 ${
        isLoaded ? "opacity-100" : "opacity-0"
      }`}
      style={{
        backgroundColor: "#f8f9fa",
      }}
      aria-hidden="true"
    />
  );
}