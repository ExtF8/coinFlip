let coin = document.getElementById('coin');

coin.addEventListener('click', flip);

function flip() {
    const flipResult = Math.random();
    if (flipResult < 0.5) {
        coin.className = 'flipHead';
    } else {
        coin.className = 'flipTail';
    }
}