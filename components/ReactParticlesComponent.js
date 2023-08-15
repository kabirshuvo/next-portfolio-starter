import React, { useEffect, useRef } from 'react';


const ReactParticlesComponent = () => {
  const canvasRef = useRef(null);
  let particles = [];
  let frequency = 10;
  let max_particles = 2500;
  let init_num = max_particles;
  let max_time = frequency * max_particles;
  let time_to_recreate = false;

  useEffect(() => {
    setTimeout(() => {
      time_to_recreate = true;
    }, max_time);

    popolate(max_particles);
    update();
  }, []);

  class Particle {
    constructor() {
      let random = Math.random();
      this.progress = 0;
      this.center = {
        x: window.innerWidth / 2,
        y: window.innerHeight / 2,
      };
      this.point_of_attraction = {
        x: window.innerWidth / 2,
        y: window.innerHeight / 2,
      };

      if (Math.random() > 0.5) {
        this.x = window.innerWidth * Math.random();
        this.y = Math.random() > 0.5 ? -Math.random() - 100 : window.innerHeight + Math.random() + 100;
      } else {
        this.x = Math.random() > 0.5 ? -Math.random() - 100 : window.innerWidth + Math.random() + 100;
        this.y = window.innerHeight * Math.random();
      }

      this.s = Math.random() * 2;
      this.a = 0;
      this.radius = random > 0.2 ? Math.random() * 1 : Math.random() * 3;
      this.color = random > 0.2 ? '#694FB9' : '#9B0127';
      this.radius = random > 0.8 ? Math.random() * 2.2 : this.radius;
      this.color = random > 0.8 ? '#3CFBFF' : this.color;
    }

    calculateDistance(v1, v2) {
      let x = Math.abs(v1.x - v2.x);
      let y = Math.abs(v1.y - v2.y);
      return Math.sqrt(x * x + y * y);
    }

    move() {
      let p1 = {
        x: this.x,
        y: this.y,
      };

      let distance = this.calculateDistance(p1, this.point_of_attraction);
      let force = Math.max(100, 1 + distance);

      let attr_x = (this.point_of_attraction.x - this.x) / force;
      let attr_y = (this.point_of_attraction.y - this.y) / force;

      this.x += Math.cos(this.a) * this.s + attr_x;
      this.y += Math.sin(this.a) * this.s + attr_y;
      this.a += Math.random() > 0.5 ? Math.random() * 0.9 - 0.45 : Math.random() * 0.4 - 0.2;

      if (distance < 30 + Math.random() * 100) {
        return false;
      }

      return true;
    }
  }

  function popolate(num) {
    for (var i = 0; i < num; i++) {
      setTimeout(() => {
        particles.push(new Particle());
      }, frequency * i);
    }
  }

  function clear(canvas) {
    canvas.globalAlpha = 0.08;
    canvas.fillStyle = '#110031';
    canvas.fillRect(0, 0, canvas.canvas.width, canvas.canvas.height);
    canvas.globalAlpha = 1;
  }

  function update() {
    particles = particles.filter((p) => p.move());

    if (time_to_recreate) {
      if (particles.length < init_num) {
        popolate(1);
      }
    }

    const canvas = canvasRef.current.getContext('2d');
    clear(canvas);
    requestAnimationFrame(update);
  }

  return (
    <canvas ref={canvasRef} width={window.innerWidth} height={window.innerHeight} />
  );
};

export default ReactParticlesComponent;
