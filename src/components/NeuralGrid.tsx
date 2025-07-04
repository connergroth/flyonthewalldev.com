import React, { useEffect, useRef, useState } from 'react';

const NeuralGrid: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const animationRef = useRef<number>();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const updateCanvasSize = () => {
      if (!canvas.parentElement) return;
      canvas.width = canvas.parentElement.clientWidth;
      canvas.height = canvas.parentElement.clientHeight;
    };
    updateCanvasSize();

    // Grid configuration
    const gridSize = 60;
    const nodes: Array<{ x: number; y: number; connections: number[]; pulse: number; lastPulse: number }> = [];
    const pulses: Array<{ fromNode: number; toNode: number; progress: number; intensity: number }> = [];

    // Create grid nodes
    const createNodes = () => {
      const cols = Math.ceil(canvas.width / gridSize) + 1;
      const rows = Math.ceil(canvas.height / gridSize) + 1;

      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          const x = col * gridSize;
          const y = row * gridSize;
          const nodeIndex = nodes.length;
          
          // Create connections to nearby nodes
          const connections: number[] = [];
          if (col > 0) connections.push(nodeIndex - 1); // left
          if (row > 0) connections.push(nodeIndex - cols); // up
          if (col > 0 && row > 0) connections.push(nodeIndex - cols - 1); // diagonal up-left
          if (col < cols - 1 && row > 0) connections.push(nodeIndex - cols + 1); // diagonal up-right

          nodes.push({
            x,
            y,
            connections,
            pulse: 0,
            lastPulse: 0
          });
        }
      }
    };

    createNodes();

    // Mouse tracking
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      };
    };

    canvas.addEventListener('mousemove', handleMouseMove);

    let time = 0;
    let lastPulseTime = 0;

    const animate = () => {
      time += 0.016; // ~60fps
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Create new pulses occasionally
      if (time - lastPulseTime > 2 + Math.random() * 3) {
        const startNode = Math.floor(Math.random() * nodes.length);
        if (nodes[startNode].connections.length > 0) {
          const targetConnection = nodes[startNode].connections[Math.floor(Math.random() * nodes[startNode].connections.length)];
          pulses.push({
            fromNode: startNode,
            toNode: targetConnection,
            progress: 0,
            intensity: 0.3 + Math.random() * 0.7
          });
          lastPulseTime = time;
        }
      }

      // Update pulses
      for (let i = pulses.length - 1; i >= 0; i--) {
        const pulse = pulses[i];
        pulse.progress += 0.02;
        
        if (pulse.progress >= 1) {
          // Pulse reached destination, create new pulses from this node
          const destinationNode = nodes[pulse.toNode];
          destinationNode.pulse = 1;
          destinationNode.lastPulse = time;
          
          // Sometimes spawn new pulses from the destination
          if (Math.random() < 0.3 && destinationNode.connections.length > 0) {
            const nextConnection = destinationNode.connections[Math.floor(Math.random() * destinationNode.connections.length)];
            pulses.push({
              fromNode: pulse.toNode,
              toNode: nextConnection,
              progress: 0,
              intensity: pulse.intensity * 0.8
            });
          }
          
          pulses.splice(i, 1);
        }
      }

      // Draw grid lines and nodes
      nodes.forEach((node, index) => {
        // Calculate distance to mouse for parallax effect
        const mouseDistance = Math.sqrt(
          Math.pow(mouseRef.current.x - node.x, 2) + 
          Math.pow(mouseRef.current.y - node.y, 2)
        );
        const mouseInfluence = Math.max(0, 1 - mouseDistance / 200);
        
        // Fade node pulse over time
        if (node.pulse > 0) {
          node.pulse = Math.max(0, node.pulse - 0.02);
        }

        // Draw connections
        node.connections.forEach(connectionIndex => {
          if (connectionIndex < nodes.length) {
            const connectedNode = nodes[connectionIndex];
            
            // Base line opacity with subtle animation
            const baseOpacity = 0.1 + Math.sin(time * 0.5 + index * 0.1) * 0.05;
            const mouseBoost = mouseInfluence * 0.2;
            const lineOpacity = Math.min(0.3, baseOpacity + mouseBoost);
            
            ctx.strokeStyle = `rgba(255, 255, 255, ${lineOpacity})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(connectedNode.x, connectedNode.y);
            ctx.stroke();
          }
        });

        // Draw node with pulse effect
        const nodeOpacity = 0.2 + node.pulse * 0.6 + mouseInfluence * 0.3;
        const nodeSize = 1 + node.pulse * 2 + mouseInfluence;
        
        ctx.fillStyle = `rgba(255, 255, 255, ${Math.min(0.8, nodeOpacity)})`;
        ctx.beginPath();
        ctx.arc(node.x, node.y, nodeSize, 0, Math.PI * 2);
        ctx.fill();
      });

      // Draw active pulses
      pulses.forEach(pulse => {
        const fromNode = nodes[pulse.fromNode];
        const toNode = nodes[pulse.toNode];
        
        if (fromNode && toNode) {
          const x = fromNode.x + (toNode.x - fromNode.x) * pulse.progress;
          const y = fromNode.y + (toNode.y - fromNode.y) * pulse.progress;
          
          // Pulse glow effect
          const glowSize = 3 + pulse.intensity * 4;
          const gradient = ctx.createRadialGradient(x, y, 0, x, y, glowSize);
          gradient.addColorStop(0, `rgba(255, 255, 255, ${pulse.intensity})`);
          gradient.addColorStop(0.5, `rgba(255, 255, 255, ${pulse.intensity * 0.5})`);
          gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
          
          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(x, y, glowSize, 0, Math.PI * 2);
          ctx.fill();
          
          // Core pulse dot
          ctx.fillStyle = `rgba(255, 255, 255, ${pulse.intensity})`;
          ctx.beginPath();
          ctx.arc(x, y, 1.5, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    // Start animation after a brief delay for loading effect
    setTimeout(() => {
      setIsLoaded(true);
      animate();
    }, 500);

    // Handle resize
    let resizeTimeout: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        const oldWidth = canvas.width;
        const oldHeight = canvas.height;
      updateCanvasSize();
        
        // Scale existing nodes instead of resetting them
        if (oldWidth > 0 && oldHeight > 0) {
          const scaleX = canvas.width / oldWidth;
          const scaleY = canvas.height / oldHeight;
          
          // Scale existing nodes
          nodes.forEach(node => {
            node.x *= scaleX;
            node.y *= scaleY;
          });
          
          // Note: Pulses will naturally adjust as they're based on node positions
        } else {
          // Only reset if we don't have valid dimensions
      nodes.length = 0;
      pulses.length = 0;
      createNodes();
        }
      }, 100);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      clearTimeout(resizeTimeout);
      canvas.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
        isLoaded ? 'opacity-100' : 'opacity-0'
      }`}
      style={{ background: '#0a0a0a' }}
    />
  );
};

export default NeuralGrid;
