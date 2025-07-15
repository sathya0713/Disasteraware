import React, { useEffect, useRef } from 'react';

function DisasterCanvas() {
  const canvasRef = useRef();

  useEffect(() => {
    const ctx = canvasRef.current.getContext('2d');
    ctx.clearRect(0, 0, 400, 200);

    // Background
    ctx.fillStyle = '#d8dbdcff';
    ctx.fillRect(0, 0, 400, 200);

    // Flood zone
    ctx.fillStyle = '#41d318ff';
    ctx.beginPath();
    ctx.arc(120, 100, 50, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#000';
    ctx.fillText('Flood Zone', 90, 170);

    // Fire zone
    ctx.fillStyle = '#e57373';
    ctx.beginPath();
    ctx.arc(280, 100, 50, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#000';
    ctx.fillText('Fire Zone', 250, 170);
  }, []);

  return (
    <div className="card" data-aos="fade-up">
      <h2>Risk Zones</h2>
      <canvas ref={canvasRef} width={400} height={200}></canvas>
    </div>
  );
}

export default DisasterCanvas;
