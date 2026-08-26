const swipeHint =
    document.getElementById("swipeHint");
const continueButton =
    document.getElementById("continueButton");
const cameraButton = document.getElementById("cameraButton");
const photoStack = document.getElementById("photoStack");

let cards = [];

let startX = 0;
let currentX = 0;
let dragging = false;


/* =========================
   OPEN PHOTOS
========================= */

cameraButton.addEventListener("click", function () {

    photoStack.classList.add("show");

    cameraButton.style.display = "none";

    cards = Array.from(
        document.querySelectorAll(".photo-card")
    );

    setupTopCard();
});



/* =========================
   SET TOP CARD
========================= */

function setupTopCard() {

    if (cards.length === 0) {
        return;
    }

    const topCard = cards[0];

    topCard.addEventListener("pointerdown", startDrag);

    topCard.addEventListener("pointermove", drag);

    topCard.addEventListener("pointerup", endDrag);

    topCard.addEventListener("pointercancel", endDrag);
}


/* =========================
   START DRAG
========================= */

function startDrag(event) {

    if (cards.length === 0) {
        return;
    }

    dragging = true;

    startX = event.clientX;

    currentX = 0;

    event.currentTarget.setPointerCapture(event.pointerId);

    event.currentTarget.style.transition = "none";
}


/* =========================
   DRAG PHOTO
========================= */

function drag(event) {

    if (!dragging || cards.length === 0) {
        return;
    }

    currentX = event.clientX - startX;

    const topCard = cards[0];

    const rotation = currentX * 0.05;

    topCard.style.transform =
        `translateX(${currentX}px) rotate(${rotation}deg)`;
}


/* =========================
   RELEASE PHOTO
========================= */

function endDrag() {

    if (!dragging || cards.length === 0) {
        return;
    }

    dragging = false;

    const topCard = cards[0];

    topCard.style.transition =
        "transform 0.4s ease, opacity 0.4s ease";


    /* Swipe threshold */

    if (Math.abs(currentX) > 100) {

        const direction =
            currentX > 0 ? 1 : -1;


        /* Throw photo away */

        topCard.style.transform =
            `translateX(${direction * 600}px) rotate(${direction * 30}deg)`;

        topCard.style.opacity = "0";


        /* Move to next photo */

        setTimeout(function () {

            topCard.style.display = "none";

            cards.shift();

            updateStack();

            setupTopCard();

        }, 400);


    } else {

        /* Return photo to center */

        topCard.style.transform =
            "translateX(0) rotate(0deg)";
    }

}


/* =========================
   UPDATE STACK
========================= */

function updateStack() {

    cards.forEach(function (card, index) {

        card.style.display = "block";

        card.style.opacity = "1";

        card.style.transition =
            "transform 0.3s ease";

        if (index === 0) {

            card.style.transform =
                "scale(1) translateY(0)";

            card.style.zIndex = "10";

        } else if (index === 1) {

            card.style.transform =
                "scale(0.96) translateY(10px)";

            card.style.zIndex = "3";

        } else if (index === 2) {

            card.style.transform =
                "scale(0.92) translateY(20px)";

            card.style.zIndex = "2";

        } else {

            card.style.transform =
                "scale(0.88) translateY(30px)";

            card.style.zIndex = "1";
        }

    });

}

if (cards.length > 0) {

    setupTopCard();

} else {

    showContinueButton();

}
function showContinueButton() {

    setTimeout(function () {

        continueButton.classList.add("show");

    }, 500);

}
continueButton.addEventListener("click", function () {

    window.location.href = "inbox.html";

});
