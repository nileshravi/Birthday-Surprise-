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
