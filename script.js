let password = "";
const correctPassword = "0209";

function pressNumber(number) {

    if (password.length < 4) {
        password += number;

        const boxes = document.querySelectorAll(".password-boxes input");

        boxes[password.length - 1].value = "●";
    }
}

function checkPassword() {

    const message = document.getElementById("message");

    if (password === correctPassword) {

        message.innerHTML = "Password Correct 💖";

        setTimeout(function() {
            window.location.href = "birthday.html";
        }, 800);

    } else {

        message.innerHTML = "Wrong password 💔";

        password = "";

        const boxes = document.querySelectorAll(".password-boxes input");

        boxes.forEach(box => {
            box.value = "";
        });
    }
}

// Create falling glitter

const glitterContainer = document.querySelector(".glitter-container");

for (let i = 0; i < 80; i++) {

    const glitter = document.createElement("span");

    glitter.classList.add("glitter");

    glitter.style.left = Math.random() * 100 + "%";

    glitter.style.animationDuration =
        (3 + Math.random() * 5) + "s";

    glitter.style.animationDelay =
        Math.random() * 5 + "s";

    const size = 2 + Math.random() * 5;

    glitter.style.width = size + "px";
    glitter.style.height = size + "px";

    glitterContainer.appendChild(glitter);
}