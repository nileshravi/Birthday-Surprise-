const startBtn = document.getElementById("startBtn");
const surpriseBtn = document.getElementById("surpriseBtn");

const welcomeScreen = document.getElementById("welcomeScreen");
const birthdayScreen = document.getElementById("birthdayScreen");
const messageScreen = document.getElementById("messageScreen");

startBtn.addEventListener("click", () => {
  welcomeScreen.style.display = "none";
  birthdayScreen.style.display = "flex";

  launchConfetti();
});

surpriseBtn.addEventListener("click", () => {
  birthdayScreen.style.display = "none";
  messageScreen.style.display = "flex";

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

  launchConfetti();
});

function launchConfetti() {
  for (let i = 0; i < 80; i++) {
    const confetti = document.createElement("span");

    confetti.innerHTML = ["🎉", "✨", "💖", "🎊"][Math.floor(Math.random() * 4)];

    confetti.style.position = "fixed";
    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.top = "-30px";
    confetti.style.fontSize = Math.random() * 18 + 15 + "px";
    confetti.style.zIndex = "9999";
    confetti.style.pointerEvents = "none";

    document.body.appendChild(confetti);

    const duration = Math.random() * 2500 + 1500;
    const distance = window.innerHeight + 100;

    confetti.animate(
      [
        {
          transform: "translateY(0) rotate(0deg)",
          opacity: 1
        },
        {
          transform: `translateY(${distance}px) rotate(${Math.random() * 720}deg)`,
          opacity: 0
        }
      ],
      {
        duration: duration,
        easing: "cubic-bezier(.25,.46,.45,.94)"
      }
    );
    

    setTimeout(() => {
      confetti.remove();
    }, duration);
  }
      }
function sayYes() {
  const emoji = document.getElementById("choiceEmoji");
  const title = document.getElementById("choiceTitle");
  const text = document.getElementById("choiceText");
  const buttons = document.querySelector(".choice-buttons");

  emoji.innerHTML = "🤩🎉🥳";
  title.innerHTML = "YAYYYYY!!! 😍✨";
  text.innerHTML = "I knew you would say YES! 🥹💖<br>Get ready for something special... 🎁";

  buttons.style.display = "none";

  setTimeout(() => {
    document.getElementById("choiceScreen").classList.add("hide");
  }, 2500);
}


function sayNo() {
  const emoji = document.getElementById("choiceEmoji");
  const title = document.getElementById("choiceTitle");
  const text = document.getElementById("choiceText");
  const noBtn = document.getElementById("noBtn");

  emoji.innerHTML = "😤";
  title.innerHTML = "EXCUSE ME?! 😤";
  text.innerHTML = "Dobara socho! Itni mehnat se surprise banaya hai aur tum NO bol rahe ho?! 😒💢";

  noBtn.innerHTML = "NO... Sorry 😭";

  setTimeout(() => {
    emoji.innerHTML = "😠";
    title.innerHTML = "Ab YES dabao! 😤👉";
    text.innerHTML = "Warna surprise dekhne nahi milega! 😒🎁";
  }, 1800);
}
// PHOTO FULL-SCREEN VIEWER

const memoryPhotos = document.querySelectorAll(".memory-photo img");
const photoViewer = document.getElementById("photoViewer");
const viewerImage = document.getElementById("viewerImage");
const closeViewer = document.getElementById("closeViewer");

memoryPhotos.forEach((photo) => {
  photo.addEventListener("click", () => {
    viewerImage.src = photo.src;
    viewerImage.alt = photo.alt;
    photoViewer.classList.add("show");
  });
});

closeViewer.addEventListener("click", () => {
  photoViewer.classList.remove("show");
});

// Background par tap karke bhi close hoga
photoViewer.addEventListener("click", (event) => {
  if (event.target === photoViewer) {
    photoViewer.classList.remove("show");
  }
});
// PREMIUM ENVELOPE OPEN

const envelope = document.getElementById("envelope");

envelope.addEventListener("click", () => {
  envelope.classList.add("open");
});
