const particlesContainer = document.getElementById('particles');
const particleCount = 230;

for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    particle.style.top = `${Math.random() * 100}%`;
    particle.style.left = `${Math.random() * 100}%`;
    particlesContainer.appendChild(particle);
}