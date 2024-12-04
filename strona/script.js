const heartsContainer = document.querySelector('.hearts');
setInterval(() => createHeart(heartsContainer), 300);

// Generowanie serc w pobliżu zdjęcia
const photoHeartsContainer = document.querySelector('.photo-hearts');
setInterval(() => {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.left = Math.random() * 100 + '%'; // Pozycja w obrębie zdjęcia
    heart.style.animationDuration = Math.random() * 2 + 3 + 's';
    photoHeartsContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}, 500);