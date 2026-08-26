const balloonContainer = document.getElementById("balloon-container");

const balloonColors = [
    "#ff69b4",
    "#ff1493",
    "#ff4d6d",
    "#ffd166",
    "#42a9bd",
    "#b388ff",
    "#ff9f1c",
    "#7bdff2"
];

function createBalloon() {
    const balloon = document.createElement("div");
    balloon.className = "balloon";

    // Random horizontal position
    balloon.style.left = Math.random() * 100 + "vw";

    // Random color
    balloon.style.background =
        balloonColors[Math.floor(Math.random() * balloonColors.length)];

    // Small random size
    const size = 10 + Math.random() * 8;

    balloon.style.width = size + "px";
    balloon.style.height = size * 1.3 + "px";

    // Random floating speed
    balloon.style.animationDuration =
        6 + Math.random() * 6 + "s";

    // Random delay
    balloon.style.animationDelay =
        Math.random() * 4 + "s";

    balloonContainer.appendChild(balloon);

    setTimeout(() => {
        balloon.remove();
    }, 14000);
}

// Keep creating balloons
setInterval(createBalloon, 700);

// Start with random balloons
for (let i = 0; i < 18; i++) {
    setTimeout(createBalloon, Math.random() * 5000);
}