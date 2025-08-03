// === Лічильник користувачів і токенів ===
function animateCounter(id, start, end, duration) {
    const obj = document.getElementById(id);
    let startTime = null;

    function step(timestamp) {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        obj.textContent = Math.floor(progress * (end - start) + start).toLocaleString();
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    }

    window.requestAnimationFrame(step);
}

// Запускаємо лічильники після завантаження сторінки
window.addEventListener("load", () => {
    animateCounter("users", 450000, 472885, 2500);
    animateCounter("tokens", 49000000, 50234678, 3000);
    createParticles();
});

// === Ефект частинок на фоні Hero ===
function createParticles() {
    const heroSection = document.querySelector(".hero");
    const canvas = document.createElement("canvas");
    canvas.classList.add("particles");
    heroSection.appendChild(canvas);

    const ctx = canvas.getContext("2d");
    let particlesArray;

    canvas.width = heroSection.offsetWidth;
    canvas.height = heroSection.offsetHeight;

    // Масив частинок
    function initParticles() {
        particlesArray = [];
        const numberOfParticles = 50;
        for (let i = 0; i < numberOfParticles; i++) {
            particlesArray.push(new Particle());
        }
    }

    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 3 + 1;
            this.speedX = (Math.random() - 0.5) * 1.5;
            this.speedY = (Math.random() - 0.5) * 1.5;
            this.color = Math.random() > 0.5 ? "#7B3FE4" : "#00FFD1";
        }
        update() {
            this.x += this.speedX;
            this.y += this.speedY;
            if (this.size > 0.2) this.size -= 0.01;
            if (this.x < 0 || this.x > canvas.width) this.speedX = -this.speedX;
            if (this.y < 0 || this.y > canvas.height) this.speedY = -this.speedY;
        }
        draw() {
            ctx.fillStyle = this.color;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.closePath();
            ctx.fill();
        }
    }

    function animateParticles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < particlesArray.length; i++) {
            particlesArray[i].update();
            particlesArray[i].draw();
        }
        requestAnimationFrame(animateParticles);
    }

    window.addEventListener("resize", () => {
        canvas.width = heroSection.offsetWidth;
        canvas.height = heroSection.offsetHeight;
        initParticles();
    });

    initParticles();
    animateParticles();
}

