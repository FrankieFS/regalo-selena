document.addEventListener('DOMContentLoaded', () => {
    const petalContainer = document.getElementById('petal-container');
    const revealBtn = document.getElementById('reveal-btn');
    const messageCard = document.getElementById('message-card');

    // Configuration
    const petalCount = 20;
    const petalSymbols = ['🌸'];

    // Messages Configuration
    const messageCount = 12;
    const loveMessages = [
        'Muaaaaaaaa', 'Muaa', 'Besotes', 'Mamacitaaaaaaaa',
        'Mencantassss', 'Amorcito', ':\'\')', ':\'\'3',
        '<333', '<3'
    ];

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

    function createMessage() {
        const msgElement = document.createElement('div');
        msgElement.className = 'floating-message';
        msgElement.innerHTML = loveMessages[Math.floor(Math.random() * loveMessages.length)];

        const startX = Math.random() * 100;
        const size = Math.random() * 10 + 14;
        const duration = Math.random() * 6 + 8;
        const delay = Math.random() * 15;

        msgElement.style.left = startX + 'vw';
        msgElement.style.fontSize = size + 'px';
        msgElement.style.animationDuration = duration + 's';
        msgElement.style.animationDelay = delay + 's';

        petalContainer.appendChild(msgElement);

        setTimeout(() => {
            msgElement.remove();
            createMessage();
        }, (duration + delay) * 1000);
    }

    // Initialize messages across the screen
    for (let i = 0; i < messageCount; i++) {
        createMessage();
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
