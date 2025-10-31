function observeElements() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const delay = entry.target.dataset.delay || 0;
        setTimeout(() => entry.target.classList.add('visible'), delay);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.info-card, .experience-section, .cta-section')
    .forEach(el => observer.observe(el));
}

function createParticles() {
  for (let i = 0; i < 15; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.top = Math.random() * 100 + '%';
    particle.style.animationDelay = Math.random() * 15 + 's';
    particle.style.animationDuration = (10 + Math.random() * 10) + 's';
    document.body.appendChild(particle);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  observeElements();
  createParticles();

  const scrollIndicator = document.getElementById('scroll-indicator');
  if (scrollIndicator) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 30) {
        scrollIndicator.style.opacity = '0';
      } else {
        scrollIndicator.style.opacity = '1';
      }
    }, { passive: true });
  }
});

document.addEventListener('mousemove', (e) => {
  if (Math.random() > 0.95) {
    const sparkle = document.createElement('div');
    sparkle.style.cssText = `
      position: fixed;
      left: ${e.clientX}px;
      top: ${e.clientY}px;
      width: 4px;
      height: 4px;
      background: #3535e6;
      border-radius: 50%;
      pointer-events: none;
      animation: sparkle 1s ease-out forwards;
      z-index: 9999;
    `;

    const sparkleStyle = document.createElement('style');
    sparkleStyle.textContent = `
      @keyframes sparkle {
        to {
          transform: translate(${Math.random() * 40 - 20}px, ${Math.random() * 40 - 20}px) scale(0);
          opacity: 0;
        }
      }
    `;
    document.head.appendChild(sparkleStyle);

    document.body.appendChild(sparkle);
    setTimeout(() => sparkle.remove(), 1000);
  }
});