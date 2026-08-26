const continueButton =
    document.getElementById("continueButton");
const letterButton = document.getElementById("letterButton");

const letterContainer =
    document.querySelector(".letter-container");

letterButton.addEventListener("click", function () {

    letterContainer.classList.add("open");

    setTimeout(function () {

        continueButton.classList.add("show");

    }, 1800);

});

/* =========================
   FALLING RIBBONS
========================= */

const ribbonContainer =
    document.getElementById("fallingRibbons");

const ribbonCount = 35;


for (let i = 0; i < ribbonCount; i++) {

    const ribbon =
        document.createElement("div");

    ribbon.className = "ribbon";


    /* Random horizontal position */

    ribbon.style.left =
        Math.random() * 100 + "%";


    /* Random size */

    const size =
        Math.random() * 0.7 + 0.6;

    ribbon.style.transform =
        `scale(${size})`;


    /* Different falling speeds */

    ribbon.style.animationDuration =
        (Math.random() * 5 + 5) + "s";


    /* Random starting delay */

    ribbon.style.animationDelay =
        (Math.random() * 8) + "s";


    /* Slightly different pink shades */

    const colors = [
        "#ff4fa3",
        "#ff69b4",
        "#ff1493",
        "#f78fc5",
        "#ffffff"
    ];

    ribbon.style.background =
        colors[Math.floor(Math.random() * colors.length)];


    ribbonContainer.appendChild(ribbon);
}

const endButton =
    document.getElementById("endButton");

letterButton.addEventListener("click", function () {

    letterContainer.classList.add("open");

    setTimeout(function () {

        endButton.classList.add("show");

    }, 1800);

});