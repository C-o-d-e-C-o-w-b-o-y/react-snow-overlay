const MAX_PARTICLES = 50;
type SnowParticle = { x: number; y: number; r: number; d: number };
const SNOW_COLOR = "rgba(255, 255, 255, 0.8)";
const MS_BETWEEN_UPDATES = 33;

let particles: Array<SnowParticle>;
let angle = 0;
let lastUpdateTime = -Infinity;
let animationRequestId: number | null = null;

let canvas: OffscreenCanvas;
let ctx: OffscreenCanvasRenderingContext2D;

self.onmessage = (event) => {
  if (event.data.canvas) {
    canvas = event.data.canvas;
    ctx = canvas.getContext("2d")!;
  }

  canvas.width = event.data.width;
  canvas.height = event.data.height;

  particles = [...Array(MAX_PARTICLES)].map(() => ({
    x: Math.random() * event.data.width,
    y: Math.random() * -event.data.height,
    r: Math.random() * 4 + 1,
    d: Math.random() * MAX_PARTICLES,
  }));

  const updateSnow = () => {
    if (performance.now() - lastUpdateTime < MS_BETWEEN_UPDATES) {
      animationRequestId = requestAnimationFrame(updateSnow);
      return;
    }

    const { width, height } = ctx.canvas;

    ctx.clearRect(0, 0, width, height);

    ctx.fillStyle = SNOW_COLOR;
    ctx.beginPath();
    for (let i = 0; i < MAX_PARTICLES; i++) {
      const p = particles[i];
      ctx.moveTo(p.x, p.y);
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2, true);
    }
    ctx.fill();

    angle = (angle + 0.01) % 360;
    for (let i = 0; i < MAX_PARTICLES; i++) {
      const p = particles[i];
      p.y += Math.cos(angle + p.d) + 1 + p.r / 2;
      p.x += Math.sin(angle) * 2;

      if (p.x > width + 5 || p.x < -5 || p.y > height) {
        if (i % 3 > 0) {
          particles[i] = {
            x: Math.random() * width,
            y: -10,
            r: p.r,
            d: p.d,
          };
        } else {
          if (Math.sin(angle) > 0) {
            particles[i] = {
              x: -5,
              y: Math.random() * height,
              r: p.r,
              d: p.d,
            };
          } else {
            particles[i] = {
              x: width + 5,
              y: Math.random() * height,
              r: p.r,
              d: p.d,
            };
          }
        }
      }
    }
    lastUpdateTime = performance.now();

    animationRequestId = requestAnimationFrame(updateSnow);
  };

  if (animationRequestId) {
    cancelAnimationFrame(animationRequestId);
  }

  requestAnimationFrame(updateSnow);
};
