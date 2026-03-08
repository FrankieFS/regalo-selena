document.addEventListener('DOMContentLoaded', () => {
    const petalContainer = document.getElementById('petal-container');
    const revealBtn = document.getElementById('reveal-btn');
    const messageCard = document.getElementById('message-card');

    // Configuration
    const petalCount = 20;
    const petalSymbols = ['🌸'];

    function createPetal() {
        const petal = document.createElement('div');
        petal.className = 'petal';
        petal.innerHTML = petalSymbols[Math.floor(Math.random() * petalSymbols.length)];

        const startX = Math.random() * 100;
        const size = Math.random() * 15 + 15;
        const duration = Math.random() * 5 + 7; // 7s to 12s
        const delay = Math.random() * 10;

        petal.style.left = startX + 'vw';
        petal.style.fontSize = size + 'px';
        petal.style.animationDuration = duration + 's';
        petal.style.animationDelay = delay + 's';

        petalContainer.appendChild(petal);

        // Remove and recreate to maintain a constant loop without huge DOM growth
        setTimeout(() => {
            petal.remove();
            createPetal();
        }, (duration + delay) * 1000);
    }

    // Initialize petals across the screen
    for (let i = 0; i < petalCount; i++) {
        createPetal();
    }

    // Interaction
    revealBtn.addEventListener('click', () => {
        messageCard.classList.remove('hidden');
        messageCard.classList.add('show');

        // Update button instead of hiding it
        revealBtn.innerHTML = 'ESO MAMIIIII KLSJVKLASV';
        revealBtn.style.pointerEvents = 'none';
        revealBtn.style.opacity = '0.7';
        revealBtn.style.boxShadow = 'none';

        // Add a small delay for a smooth entrance
        messageCard.style.opacity = '1';
        messageCard.style.transform = 'translateY(0)';

        // Extra celebration burst
        for (let i = 0; i < 15; i++) {
            createPetal();
        }
    });
});
