function gatherParticles(color = 'green') {
    return new Promise((resolve) => {
        const particles = document.querySelectorAll('.particle');
        particles.forEach(particle => {
            const centerX = 50;
            const centerY = 50;
            const duration = Math.random() * 1000 + 500;

            particle.style.transition = `top ${duration}ms ease-in-out, left ${duration}ms ease-in-out, opacity ${duration}ms ease-in-out, transform ${duration}ms ease-in-out`;
            particle.style.top = `${centerY}%`;
            particle.style.left = `${centerX}%`;
            particle.style.opacity = '1';
        });

        // Resolve the Promise after the particles gather and explode
        setTimeout(() => {
            explodeParticles(color);
            resolve(); // Resolve after explosion starts
        }, 1500);
    });
}

function explodeParticles(color = 'green') {
    const particles = document.querySelectorAll('.particle');
    particles.forEach((particle, index) => {
        const angle = Math.random() * 2 * Math.PI; // Випадковий кут
        const distance = Math.random() * 100 + 50; // Збільшена відстань для розкидання
        const duration = Math.random() * 2000 + 1000; // Більша тривалість для інерції

        // Визначаємо, чи частинка летить вперед чи в сторону
        const isFlyingForward = index % 2 === 0; // Кожна друга частинка летить вперед

        let endX, endY;

        if (isFlyingForward) {
            // Частинки, що летять вперед, зменшуються
            endX = 50 + Math.cos(angle) * (distance / 2); // Менший рух
            endY = 50 + Math.sin(angle) * (distance / 2); // Менший рух
            particle.style.transform = `scale(0.2)`; // Зменшуємо розмір
        } else {
            // Частинки, що розлітаються в сторони
            endX = 50 + Math.cos(angle) * distance;
            endY = 50 + Math.sin(angle) * distance;
        }

        // Дозволяємо частинкам вилітати за межі екрану, але не дуже далеко
        endX = Math.max(-20, Math.min(endX, 120)); // -20% - 120%
        endY = Math.max(-20, Math.min(endY, 120)); // -20% - 120%

        // Визначаємо розмір частинки в залежності від відстані
        const size = 8 - (distance / 20); // Чим далі, тим менше
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;

        // Частинки в центрі залишаються дуже маленькими
        if (distance < 10) {
            particle.style.width = '2px';
            particle.style.height = '2px';
        }

        particle.style.transition = `top ${duration}ms cubic-bezier(0.25, 0.1, 0.25, 1), left ${duration}ms cubic-bezier(0.25, 0.1, 0.25, 1), opacity ${duration}ms ease-out, background-color ${duration}ms ease-out, transform ${duration}ms ease-out`;
        particle.style.top = `${endY}%`;
        particle.style.left = `${endX}%`;
        particle.style.backgroundColor = color; // Використовуємо переданий колір
        particle.style.opacity = '1'; // Залишаємо частинки видимими
    });
}