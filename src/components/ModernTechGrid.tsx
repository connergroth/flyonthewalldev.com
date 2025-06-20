import React, { useEffect, useRef, useState, useCallback } from 'react';

const ModernTechGrid: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const animationRef = useRef<number>();
  const [isLoaded, setIsLoaded] = useState(false);
  const isVisibleRef = useRef(true);
  const lastMouseUpdateRef = useRef(0);
  const gradientCacheRef = useRef(new Map());

  // Throttled mouse handler
  const handleMouseMove = useCallback((e: MouseEvent) => {
    const now = Date.now();
    if (now - lastMouseUpdateRef.current < 16) return; // ~60fps max
    lastMouseUpdateRef.current = now;
    
    const rect = canvasRef.current?.getBoundingClientRect();
    if (rect) {
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      };
    }
  }, []);

  // Visibility change handler
  const handleVisibilityChange = useCallback(() => {
    isVisibleRef.current = !document.hidden;
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const updateCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      // Clear gradient cache on resize
      gradientCacheRef.current.clear();
    };
    updateCanvasSize();

    // Modern tech grid configuration
    const gridSize = 80;
    const dataStreams: Array<{ 
      x: number; 
      y: number; 
      targetX: number; 
      targetY: number; 
      speed: number; 
      color: string; 
      size: number;
      life: number;
      maxLife: number;
    }> = [];
    
    const aiNodes: Array<{ 
      x: number; 
      y: number; 
      pulse: number; 
      connections: Array<{ x: number; y: number; strength: number }>;
      processing: boolean;
    }> = [];

    // Pre-calculate colors array
    const colors = ['#3b82f6', '#10b981', '#8b5cf6', '#f59e0b', '#ef4444'];

    // Create AI processing nodes
    for (let i = 0; i < 8; i++) {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      const connections = [];
      
      // Create connections to other nodes
      for (let j = 0; j < 3; j++) {
        connections.push({
          x: x + (Math.random() - 0.5) * 300,
          y: y + (Math.random() - 0.5) * 300,
          strength: Math.random()
        });
      }

      aiNodes.push({
        x,
        y,
        pulse: Math.random(),
        connections,
        processing: Math.random() > 0.7
      });
    }

    canvas.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('visibilitychange', handleVisibilityChange);

    let time = 0;
    let lastStreamTime = 0;
    let frameCount = 0;

    const animate = () => {
      if (!isVisibleRef.current) {
        animationRef.current = requestAnimationFrame(animate);
        return;
      }

      frameCount++;
      time += 0.016;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Create flowing data streams (reduced frequency slightly)
      if (time - lastStreamTime > 0.4 + Math.random() * 0.8) {
        const startSide = Math.floor(Math.random() * 4);
        let startX, startY, targetX, targetY;
        
        switch (startSide) {
          case 0: // top
            startX = Math.random() * canvas.width;
            startY = -20;
            targetX = Math.random() * canvas.width;
            targetY = canvas.height + 20;
            break;
          case 1: // right
            startX = canvas.width + 20;
            startY = Math.random() * canvas.height;
            targetX = -20;
            targetY = Math.random() * canvas.height;
            break;
          case 2: // bottom
            startX = Math.random() * canvas.width;
            startY = canvas.height + 20;
            targetX = Math.random() * canvas.width;
            targetY = -20;
            break;
          default: // left
            startX = -20;
            startY = Math.random() * canvas.height;
            targetX = canvas.width + 20;
            targetY = Math.random() * canvas.height;
        }

        dataStreams.push({
          x: startX,
          y: startY,
          targetX,
          targetY,
          speed: 1 + Math.random() * 2,
          color: colors[Math.floor(Math.random() * colors.length)],
          size: 1 + Math.random() * 2,
          life: 0,
          maxLife: 100 + Math.random() * 100
        });
        
        lastStreamTime = time;
      }

      // Update and draw data streams
      for (let i = dataStreams.length - 1; i >= 0; i--) {
        const stream = dataStreams[i];
        
        // Move towards target
        const dx = stream.targetX - stream.x;
        const dy = stream.targetY - stream.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance > stream.speed) {
          stream.x += (dx / distance) * stream.speed;
          stream.y += (dy / distance) * stream.speed;
        }
        
        stream.life++;
        
        // Remove old streams
        if (stream.life > stream.maxLife || distance < stream.speed) {
          dataStreams.splice(i, 1);
          continue;
        }
        
        // Draw stream with trail effect
        const alpha = Math.max(0, 1 - stream.life / stream.maxLife);
        
        // Trail (reduced from 5 to 4 for performance)
        for (let j = 0; j < 4; j++) {
          const trailAlpha = alpha * (1 - j * 0.25);
          if (trailAlpha <= 0) break;
          
          const trailX = stream.x - (dx / distance) * stream.speed * j * 0.5;
          const trailY = stream.y - (dy / distance) * stream.speed * j * 0.5;
          
          ctx.fillStyle = stream.color + Math.floor(trailAlpha * 255).toString(16).padStart(2, '0');
          ctx.beginPath();
          ctx.arc(trailX, trailY, stream.size * (1 - j * 0.1), 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // Draw AI processing nodes
      aiNodes.forEach((node, index) => {
        // Update node pulse
        node.pulse += 0.02 + Math.sin(time + index) * 0.01;
        if (node.pulse > 1) node.pulse = 0;
        
        // Calculate mouse influence
        const mouseDistance = Math.sqrt(
          Math.pow(mouseRef.current.x - node.x, 2) + 
          Math.pow(mouseRef.current.y - node.y, 2)
        );
        const mouseInfluence = Math.max(0, 1 - mouseDistance / 150);
        
        // Draw connections with cached gradients
        node.connections.forEach(connection => {
          const connectionAlpha = 0.1 + node.pulse * 0.3 + mouseInfluence * 0.2;
          
          // Cache gradient key
          const gradientKey = `${node.x.toFixed(0)},${node.y.toFixed(0)},${connection.x.toFixed(0)},${connection.y.toFixed(0)}`;
          let gradient = gradientCacheRef.current.get(gradientKey);
          
          if (!gradient) {
            gradient = ctx.createLinearGradient(node.x, node.y, connection.x, connection.y);
            gradient.addColorStop(0, `rgba(59, 130, 246, 0.5)`);
            gradient.addColorStop(1, `rgba(59, 130, 246, 0)`);
            gradientCacheRef.current.set(gradientKey, gradient);
          }
          
          ctx.strokeStyle = gradient;
          ctx.lineWidth = 1 + connection.strength;
          ctx.beginPath();
          ctx.moveTo(node.x, node.y);
          ctx.lineTo(connection.x, connection.y);
          ctx.stroke();
        });
        
        // Draw processing node
        const nodeSize = 3 + node.pulse * 2 + mouseInfluence * 2;
        const nodeAlpha = 0.4 + node.pulse * 0.4 + mouseInfluence * 0.2;
        
        // Outer glow
        const glowGradient = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, nodeSize * 3);
        glowGradient.addColorStop(0, `rgba(59, 130, 246, ${nodeAlpha * 0.8})`);
        glowGradient.addColorStop(0.5, `rgba(16, 185, 129, ${nodeAlpha * 0.4})`);
        glowGradient.addColorStop(1, 'rgba(59, 130, 246, 0)');
        
        ctx.fillStyle = glowGradient;
        ctx.beginPath();
        ctx.arc(node.x, node.y, nodeSize * 3, 0, Math.PI * 2);
        ctx.fill();
        
        // Core node
        ctx.fillStyle = `rgba(255, 255, 255, ${nodeAlpha})`;
        ctx.beginPath();
        ctx.arc(node.x, node.y, nodeSize, 0, Math.PI * 2);
        ctx.fill();
        
        // Processing indicator
        if (node.processing) {
          const processingPulse = Math.sin(time * 3 + index) * 0.5 + 0.5;
          ctx.strokeStyle = `rgba(16, 185, 129, ${processingPulse * 0.8})`;
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.arc(node.x, node.y, nodeSize + 2, 0, Math.PI * 2);
          ctx.stroke();
        }
      });

      // Draw subtle background grid (only every 2 frames for performance)
      if (frameCount % 2 === 0) {
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.03)';
        ctx.lineWidth = 1;
        
        for (let x = 0; x < canvas.width; x += gridSize) {
          ctx.beginPath();
          ctx.moveTo(x, 0);
          ctx.lineTo(x, canvas.height);
          ctx.stroke();
        }
        
        for (let y = 0; y < canvas.height; y += gridSize) {
          ctx.beginPath();
          ctx.moveTo(0, y);
          ctx.lineTo(canvas.width, y);
          ctx.stroke();
        }
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    setTimeout(() => {
      setIsLoaded(true);
      animate();
    }, 500);

    const handleResize = () => {
      updateCanvasSize();
    };
    window.addEventListener('resize', handleResize);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      canvas.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('resize', handleResize);
      gradientCacheRef.current.clear();
    };
  }, [handleMouseMove, handleVisibilityChange]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 transition-opacity duration-1000 ${
        isLoaded ? 'opacity-100' : 'opacity-0'
      }`}
      style={{ background: 'linear-gradient(135deg, #111827 0%, #1f2937 100%)' }}
    />
  );
};

export default ModernTechGrid;
