import React, { useRef, useEffect } from 'react';

const CanvasAnimation = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let positionX = 0;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = 'blue';
      ctx.fillRect(positionX, 50, 50, 50);

      positionX += 2;
      if (positionX > canvas.width) {
        positionX = 0;
      }

      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return <canvas ref={canvasRef} width={400} height={200} />;
};

export default CanvasAnimation;
