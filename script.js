// ==========================================
// 💝 START → IMPORTANT QUESTION → BIRTHDAY
// ==========================================

const startBtn = document.getElementById("startBtn");
const surpriseBtn = document.getElementById("surpriseBtn");

const choiceScreen = document.getElementById("choiceScreen");
const welcomeScreen = document.getElementById("welcomeScreen");
const birthdayScreen = document.getElementById("birthdayScreen");
const messageScreen = document.getElementById("messageScreen");


// ------------------------------------------
// 🌸 INITIAL STATE
// ------------------------------------------

if (choiceScreen) {
  choiceScreen.style.display = "flex";
}

if (welcomeScreen) {
  welcomeScreen.style.display = "none";
}

if (birthdayScreen) {
  birthdayScreen.style.display = "none";
}

if (messageScreen) {
  messageScreen.style.display = "none";
}


// ------------------------------------------
// 🎁 YES/NO SCREEN
// ------------------------------------------

function sayYes() {

  const emoji = document.getElementById("choiceEmoji");
  const title = document.getElementById("choiceTitle");
  const text = document.getElementById("choiceText");
  const buttons = document.querySelector(".choice-buttons");

  emoji.innerHTML = "🤩🎉🥳";

  title.innerHTML = "YAYYYYY!!! 😍✨";

  text.innerHTML =
    "I knew you would say YES! 🥹💖<br>" +
    "Get ready for something special... 🎁";

  buttons.style.display = "none";

  setTimeout(() => {

    choiceScreen.style.display = "none";

    birthdayScreen.style.display = "flex";

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

    launchConfetti();

  }, 2500);
}


// ------------------------------------------
// 😤 NO BUTTON
// ------------------------------------------

function sayNo() {

  const emoji = document.getElementById("choiceEmoji");
  const title = document.getElementById("choiceTitle");
  const text = document.getElementById("choiceText");
  const noBtn = document.getElementById("noBtn");

  emoji.innerHTML = "😤";

  title.innerHTML = "EXCUSE ME?! 😤";

  text.innerHTML =
    "Dobara socho! Itni mehnat se surprise banaya hai " +
    "aur tum NO bol rahe ho?! 😒💢";

  noBtn.innerHTML = "NO... Sorry 😭";

  setTimeout(() => {

    emoji.innerHTML = "😠";

    title.innerHTML = "Ab YES dabao! 😤👉";

    text.innerHTML =
      "Warna surprise dekhne nahi milega! 😒🎁";

  }, 1800);
}


// ------------------------------------------
// 🎉 CONFETTI
// ------------------------------------------

function launchConfetti() {

  for (let i = 0; i < 80; i++) {

    const confetti = document.createElement("span");

    confetti.innerHTML =
      ["🎉", "✨", "💖", "🎊"][
        Math.floor(Math.random() * 4)
      ];

    confetti.style.position = "fixed";
    confetti.style.left =
      Math.random() * 100 + "vw";

    confetti.style.top = "-30px";

    confetti.style.fontSize =
      Math.random() * 18 + 15 + "px";

    confetti.style.zIndex = "9999";
    confetti.style.pointerEvents = "none";

    document.body.appendChild(confetti);

    const duration =
      Math.random() * 2500 + 1500;

    const distance =
      window.innerHeight + 100;

    confetti.animate(
      [
        {
          transform: "translateY(0) rotate(0deg)",
          opacity: 1
        },
        {
          transform:
            `translateY(${distance}px) rotate(${Math.random() * 720}deg)`,
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


// ------------------------------------------
// 💌 OPEN YOUR SURPRISE
// ------------------------------------------

if (surpriseBtn) {

  surpriseBtn.addEventListener("click", () => {

    birthdayScreen.style.display = "none";

    messageScreen.style.display = "flex";

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

    launchConfetti();

  });

}


// ------------------------------------------
// 🎵 OLD START BUTTON — DISABLED
// ------------------------------------------

// Start button ab use nahi ho raha,
// kyunki Important Question pehle hi aa raha hai.
// PREMIUM ENVELOPE OPEN

const envelope = document.getElementById("envelope");

envelope.addEventListener("click", () => {

  // Envelope opens
  envelope.classList.add("open");

  // Photos section
  const memories = document.getElementById("memoryReveal");

  // Thoda delay — letter open hone ke baad photos appear
  setTimeout(() => {
    if (memories) {
      memories.classList.add("show-memories");

      // Photos section tak smoothly scroll
      setTimeout(() => {
        memories.scrollIntoView({
          behavior: "smooth",
          block: "center"
        });
      }, 300);
    }
  }, 1200);

});

// 🎂 CAKE CUTTING + BALLOON CELEBRATION

const cutCakeBtn = document.getElementById("cutCakeBtn");
const cakeSurprise = document.getElementById("cakeSurprise");
const cakeMessage = document.getElementById("cakeMessage");

if (cutCakeBtn) {
  cutCakeBtn.addEventListener("click", () => {

    // Button hide
    cutCakeBtn.style.display = "none";

    // Step 1: Knife enters
    cakeSurprise.classList.add("cutting");

    cakeMessage.innerHTML = "Cutting the cake... 🔪🎂";

    // Step 2: Knife cake par pahunchne ke baad cut
    setTimeout(() => {
      cakeSurprise.classList.remove("cutting");
      cakeSurprise.classList.add("cut");

      cakeMessage.innerHTML =
        "YAYYYYY!!! Happy Birthday! 🥳🎂✨";
    }, 900);

    // Step 3: Cake split ke baad balloons
    setTimeout(() => {
      createBirthdayBalloons();
      createCakeConfetti();
    }, 1700);

  });
}


function createBirthdayBalloons() {

  const balloons = ["🎈", "🎈", "🎈", "🎈", "🎈", "🎈"];

  balloons.forEach((balloon, index) => {

    const element = document.createElement("div");

    element.innerHTML = balloon;

    element.style.position = "fixed";
    element.style.left = (10 + index * 15) + "vw";
    element.style.bottom = "-80px";
    element.style.fontSize =
      (45 + Math.random() * 25) + "px";

    element.style.zIndex = "10001";
    element.style.pointerEvents = "none";

    document.body.appendChild(element);

    const duration = 3500 + Math.random() * 1500;

    element.animate(
      [
        {
          transform: "translateY(0) scale(0.7)",
          opacity: 0
        },
        {
          transform: "translateY(-40vh) scale(1)",
          opacity: 1
        },
        {
          transform:
            `translateY(-${window.innerHeight + 150}px) scale(1.1) rotate(12deg)`,
          opacity: 0
        }
      ],
      {
        duration: duration,
        easing: "ease-out"
      }
    );

    setTimeout(() => {
      element.remove();
    }, duration);
  });
}


function createCakeConfetti() {

  const emojis = [
    "🎉",
    "🎊",
    "✨",
    "💖",
    "💕",
    "🥳",
    "⭐"
  ];

  for (let i = 0; i < 70; i++) {

    const piece = document.createElement("span");

    piece.innerHTML =
      emojis[Math.floor(Math.random() * emojis.length)];

    piece.style.position = "fixed";
    piece.style.left = "50vw";
    piece.style.top = "45vh";
    piece.style.fontSize =
      (12 + Math.random() * 18) + "px";

    piece.style.zIndex = "10002";
    piece.style.pointerEvents = "none";

    document.body.appendChild(piece);

    const angle =
      Math.random() * Math.PI * 2;

    const distance =
      150 + Math.random() * 350;

    const x =
      Math.cos(angle) * distance;

    const y =
      Math.sin(angle) * distance;

    const duration =
      1200 + Math.random() * 1000;

    piece.animate(
      [
        {
          transform: "translate(0, 0) scale(0)",
          opacity: 1
        },
        {
          transform:
            `translate(${x}px, ${y}px) scale(1.2)`,
          opacity: 0
        }
      ],
      {
        duration: duration,
        easing: "cubic-bezier(.2,.8,.3,1)"
      }
    );

    setTimeout(() => {
      piece.remove();
    }, duration);
  }
}
// =================================================
// 📸💌 FINAL MEMORY → ENVELOPE → LETTER FLOW
// =================================================

const memorySlides =
  document.querySelectorAll(".memory-slide");

const nextMemoryBtn =
  document.getElementById("nextMemoryBtn");

const memoryReveal =
  document.getElementById("memoryReveal");

const bigLetterSection =
  document.getElementById("bigLetterSection");

const openBigLetterBtn =
  document.getElementById("openBigLetterBtn");

const personalLetter =
  document.getElementById("personalLetter");

const finalCelebration =
  document.getElementById("finalCelebration");

let currentMemory = 0;


// -----------------------------------------
// 📸 SHOW MEMORIES
// -----------------------------------------

function showMemories() {

  if (!memoryReveal) return;

  memoryReveal.classList.add("show-memories");

  memorySlides.forEach((slide, index) => {
    slide.classList.toggle("active", index === 0);
  });

  currentMemory = 0;

  if (nextMemoryBtn) {
    nextMemoryBtn.innerHTML =
      "Next Memory → ✨";
  }

}


// -----------------------------------------
// 📸 NEXT MEMORY
// -----------------------------------------

if (nextMemoryBtn) {

  nextMemoryBtn.addEventListener("click", () => {

    // अभी और photos बाकी हैं
    if (currentMemory < memorySlides.length - 1) {

      memorySlides[currentMemory]
        .classList.remove("active");

      currentMemory++;

      memorySlides[currentMemory]
        .classList.add("active");

      if (currentMemory === memorySlides.length - 1) {

        nextMemoryBtn.innerHTML =
          "Next Surprise → 💌";

      } else {

        nextMemoryBtn.innerHTML =
          "Next Memory → ✨";

      }

      memorySlides[currentMemory]
        .scrollIntoView({
          behavior: "smooth",
          block: "center"
        });

      return;
    }


    // -----------------------------------------
    // 📸 PHOTO 8 → BIG ENVELOPE
    // -----------------------------------------

    memoryReveal.style.display = "none";

    if (bigLetterSection) {

      bigLetterSection.classList.add("show-letter");

      setTimeout(() => {

        bigLetterSection.scrollIntoView({
          behavior: "smooth",
          block: "center"
        });

      }, 300);

    }

  });

}


// -----------------------------------------
// 💌 OPEN BIG ENVELOPE
// -----------------------------------------

if (openBigLetterBtn) {

  openBigLetterBtn.addEventListener("click", () => {

    if (!bigLetterSection) return;

    // Envelope opens
    bigLetterSection.classList.add("opened");

    // Button disappears
    openBigLetterBtn.style.display = "none";

    // Letter ke liye scroll
    setTimeout(() => {

      if (personalLetter) {

        personalLetter.scrollIntoView({
          behavior: "smooth",
          block: "center"
        });

      }

    }, 900);

  });

}
