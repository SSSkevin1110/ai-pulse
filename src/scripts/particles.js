// Particle background animation
class ParticleBackground {
  constructor() {
    this.canvas = document.createElement('canvas');
    this.ctx = this.canvas.getContext('2d');
    this.particles = [];
    this.animationId = null;
    this.init();
  }

  init() {
    const container = document.getElementById('particle-bg');
    if (!container) return;
    
    container.appendChild(this.canvas);
    this.resize();
    this.createParticles();
    this.animate();
    
    window.addEventListener('resize', () => this.resize());
  }

  resize() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  createParticles() {
    const particleCount = Math.min(50, Math.floor(window.innerWidth / 30));
    this.particles = [];
    
    for (let i = 0; i < particleCount; i++) {
      this.particles.push({
        x: Math.random() * this.canvas.width,
        y: Math.random() * this.canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.2,
      });
    }
  }

  animate() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    
    // Check dark mode
    const isDark = document.documentElement.classList.contains('dark');
    const particleColor = isDark ? '255, 255, 255' : '229, 57, 53';
    const lineColor = isDark ? '255, 255, 255' : '229, 57, 53';
    
    this.particles.forEach((particle, i) => {
      // Update position
      particle.x += particle.vx;
      particle.y += particle.vy;
      
      // Wrap around edges
      if (particle.x < 0) particle.x = this.canvas.width;
      if (particle.x > this.canvas.width) particle.x = 0;
      if (particle.y < 0) particle.y = this.canvas.height;
      if (particle.y > this.canvas.height) particle.y = 0;
      
      // Draw particle
      this.ctx.beginPath();
      this.ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
      this.ctx.fillStyle = `rgba(${particleColor}, ${particle.opacity})`;
      this.ctx.fill();
      
      // Draw connections
      this.particles.slice(i + 1).forEach((other) => {
        const dx = particle.x - other.x;
        const dy = particle.y - other.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 150) {
          this.ctx.beginPath();
          this.ctx.moveTo(particle.x, particle.y);
          this.ctx.lineTo(other.x, other.y);
          this.ctx.strokeStyle = `rgba(${lineColor}, ${0.1 * (1 - distance / 150)})`;
          this.ctx.lineWidth = 0.5;
          this.ctx.stroke();
        }
      });
    });
    
    this.animationId = requestAnimationFrame(() => this.animate());
  }
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => new ParticleBackground());
} else {
  new ParticleBackground();
}
