let clickCount = 0;
const upgradeLevel = 1;

function updateClickCount() {
    document.getElementById('click-count').textContent = clickCount;
}

function clickCookie() {
    clickCount += upgradeLevel;
    updateClickCount();
    
    if (clickCount % 100 === 0) {
        showMessage();
        playSound();
    }
}

function showMessage() {
    const messages = [
        "Best cookies EVER!",
        "It's just the beginning.",
        "Cookie Maniac!",
        "Cookie Master!",
        "Cookie Clicker Extraordinaire!"
    ];
    const randomIndex = Math.floor(Math.random() * messages.length);
    document.getElementById('message').textContent = messages[randomIndex];
    setTimeout(() => {
        document.getElementById('message').textContent = '';
    }, 2000);
}

function resetClickCount() {
    clickCount = 0;
    updateClickCount();
}