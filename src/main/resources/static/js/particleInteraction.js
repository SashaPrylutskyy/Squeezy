// Додаємо стилі для градієнтного кола
const style = document.createElement('style');
style.textContent = `
    .mouse-gradient {
        position: fixed;
        width: 150px;
        height: 150px;
        background: radial-gradient(circle at center, rgba(0,0,0,0.08) 0%, transparent 80%);
        border-radius: 50%;
        pointer-events: none;
        transform: translate(-50%, -50%);
        z-index: 1; /* Нижче за основні елементи */
        opacity: 0;
        transition: opacity 0.3s;
    }
`;
document.head.appendChild(style);

// Створюємо елемент градієнтного кола
const gradientCircle = document.createElement('div');
gradientCircle.className = 'mouse-gradient';
document.body.appendChild(gradientCircle);

let mouseX = 0;
let mouseY = 0;
let isMouseActive = false;

// Постійна сила притягання
const ATTRACTION_FORCE = 0.5;
const MAX_DISTANCE = 100;

// Оновлюємо позицію мишки
document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    gradientCircle.style.left = `${mouseX}px`;
    gradientCircle.style.top = `${mouseY}px`;
    if (!isMouseActive) {
        gradientCircle.style.opacity = '0.3';
        isMouseActive = true;
    }
});

// Анімаційний цикл
function updateParticles() {
    if (!isMouseActive) return;

    const particles = document.querySelectorAll('.particle');
    particles.forEach(particle => {
        const rect = particle.getBoundingClientRect();
        const particleX = rect.left + rect.width/2;
        const particleY = rect.top + rect.height/2;

        const dx = mouseX - particleX;
        const dy = mouseY - particleY;
        const distance = Math.sqrt(dx*dx + dy*dy);

        if (distance < MAX_DISTANCE) {
            const force = ATTRACTION_FORCE * (MAX_DISTANCE - distance)/MAX_DISTANCE;
            particle.style.transform = `translate(
                ${dx * force}px, 
                ${dy * force}px
            )`;
        }
    });

    requestAnimationFrame(updateParticles);
}

// Запускаємо анімацію
document.addEventListener('mouseenter', () => {
    isMouseActive = true;
    updateParticles();
});

document.addEventListener('mouseleave', () => {
    isMouseActive = false;
    gradientCircle.style.opacity = '0';
});