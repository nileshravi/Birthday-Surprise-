document.addEventListener("DOMContentLoaded", () => {

  /* =========================================
     GET ALL SCREENS
     ========================================= */

  const screens = {
    question: document.getElementById("questionScreen"),
    birthday: document.getElementById("birthdayScreen"),
    cake: document.getElementById("cakeScreen"),
    envelope: document.getElementById("envelopeScreen"),
    memories: document.getElementById("memoriesScreen"),
    letterEnvelope: document.getElementById("letterEnvelopeScreen"),
    letter: document.getElementById("letterScreen"),
    final: document.getElementById("finalScreen")
  };


  /* =========================================
     SCREEN CONTROLLER
     ========================================= */

  function showScreen(screen) {

    Object.values(screens).forEach((item) => {
      if (item) {
        item.classList.add("hidden");
      }
    });

    if (screen) {
      screen.classList.remove("hidden");

      setTimeout(() => {
        screen.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }, 100);
    }
  }


  /* =========================================
     YES / NO
     ========================================= */

  const yesBtn = document.getElementById("yesBtn");
  const noBtn = document.getElementById("noBtn");

  const questionEmoji = document.getElementById("questionEmoji");
  const questionTitle = document.getElementById("questionTitle");
  const questionText = document.getElementById("questionText");

  if (yesBtn) {

    yesBtn.addEventListener("click", () => {
      if (noReactionTimer) {
  clearTimeout(noReactionTimer);
      }

      questionEmoji.innerHTML = "🤩🎉🥳";
      questionTitle.innerHTML = "YAYYYYY!!! 😍✨";

      questionText.innerHTML =
        "I knew you would say YES! 🥹💖<br>" +
        "Get ready for something really special... 🎁✨";

      yesBtn.style.display = "none";

      if (noBtn) {
        noBtn.style.display = "none";
      }

      launchConfetti();

      setTimeout(() => {
        showScreen(screens.birthday);
      }, 2300);

    });

  }

  let noReactionTimer;
  if (noBtn) {

    noBtn.addEventListener("click", () => {

      questionEmoji.innerHTML = "😤💢";

      questionTitle.innerHTML =
        "EXCUSE ME?! 😤";

      questionText.innerHTML =
        "Itni mehnat se surprise banaya hai<br>" +
        "aur tum NO bol rahe ho?! 😒💢";

      noBtn.innerHTML =
        "NO... Sorry 😭";

      noReactionTimer = setTimeout(() => {

        questionEmoji.innerHTML = "😠👉";

        questionTitle.innerHTML =
          "Ab YES dabao! 😤";

        questionText.innerHTML =
          "Warna surprise dekhne nahi milega! 😒🎁";

      }, 1800);

    });

  }


  /* =========================================
     BIRTHDAY → CAKE
     ========================================= */

  const startCakeBtn =
    document.getElementById("startCakeBtn");

  if (startCakeBtn) {

    startCakeBtn.addEventListener("click", () => {

      showScreen(screens.cake);

    });

  }


/* =========================================
   CAKE CUTTING
   ========================================= */

const cutCakeBtn =
  document.getElementById("cutCakeBtn");

const cake =
  document.getElementById("cake");

const cakeStatus =
  document.getElementById("cakeStatus");

const continueAfterCake =
  document.getElementById("continueAfterCake");

const leftCake =
  document.querySelector(".cake-left");

const rightCake =
  document.querySelector(".cake-right");

const knife =
  document.getElementById("knife");

if (cutCakeBtn) {

  cutCakeBtn.addEventListener("click", () => {

    cutCakeBtn.disabled = true;
    cutCakeBtn.style.opacity = "0.5";

    if (cakeStatus) {
      cakeStatus.innerHTML =
        "Cutting the cake... 🔪🎂";
    }

    /* 🔪 KNIFE GOES DOWN */
    if (knife) {

      knife.animate(
        [
          {
            transform:
              "translateX(-50%) translateY(-15px) rotate(-18deg)"
          },
          {
            transform:
              "translateX(-50%) translateY(20px) rotate(-8deg)"
          },
          {
            transform:
              "translateX(-50%) translateY(75px) rotate(5deg)"
          }
        ],
        {
          duration: 1200,
          easing: "ease-in-out",
          fill: "forwards"
        }
      );

    }

    /* 🎂 CAKE SPLIT — AFTER KNIFE */
    setTimeout(() => {

      if (leftCake) {

        leftCake.animate(
          [
            {
              transform: "translateX(0)"
            },
            {
              transform: "translateX(-12px)"
            },
            {
              transform: "translateX(-45px) rotate(-3deg)"
            }
          ],
          {
            duration: 1000,
            easing: "ease-out",
            fill: "forwards"
          }
        );

      }

      if (rightCake) {

        rightCake.animate(
          [
            {
              transform: "translateX(0)"
            },
            {
              transform: "translateX(12px)"
            },
            {
              transform: "translateX(45px) rotate(3deg)"
            }
          ],
          {
            duration: 1000,
            easing: "ease-out",
            fill: "forwards"
          }
        );

      }

    }, 1100);

    /* 🎉 CELEBRATION */
    setTimeout(() => {

      if (cakeStatus) {
        cakeStatus.innerHTML =
          "YAYYYYY!!! 🎂🥳 Happy Birthday! ✨";
      }

      createBirthdayBalloons();
      createCakeConfetti();

    }, 2200);

    /* 💌 NEXT BUTTON */
    setTimeout(() => {

      if (continueAfterCake) {
        continueAfterCake.classList.remove("hidden");
      }

    }, 2800);

  });

}


/* =========================================
   CAKE → SMALL ENVELOPE
   ========================================= */

if (continueAfterCake) {

  continueAfterCake.addEventListener("click", () => {

    showScreen(screens.envelope);

  });

}

  /* =========================================
     CAKE → SMALL ENVELOPE
     ========================================= */

  if (continueAfterCake) {

    continueAfterCake.addEventListener("click", () => {

      showScreen(screens.envelope);

    });

  }


  /* =========================================
     SMALL ENVELOPE
     ========================================= */

  const smallEnvelope =
    document.getElementById("smallEnvelope");

  const openEnvelopeBtn =
    document.getElementById("openEnvelopeBtn");

  const smallMessage =
    document.getElementById("smallMessage");

  const continueToMemories =
    document.getElementById("continueToMemories");


  if (openEnvelopeBtn && smallEnvelope) {

    openEnvelopeBtn.addEventListener("click", () => {

      smallEnvelope.classList.add("open");

      openEnvelopeBtn.style.display = "none";

      setTimeout(() => {

        if (smallMessage) {
          smallMessage.classList.remove("hidden");
        }

      }, 900);

      setTimeout(() => {

        if (continueToMemories) {
          continueToMemories.classList.remove("hidden");
        }

      }, 1800);

    });

  }


  /* =========================================
     ENVELOPE → MEMORIES
     ========================================= */

  if (continueToMemories) {

    continueToMemories.addEventListener("click", () => {

      showScreen(screens.memories);

    });

  }


  /* =========================================
     MEMORIES — ONE BY ONE
     ========================================= */

  const memorySlides =
    document.querySelectorAll(".memory-slide");

  const nextMemoryBtn =
    document.getElementById("nextMemoryBtn");

  let currentMemory = 0;


  function showMemory(index) {

    memorySlides.forEach((slide, i) => {

      slide.classList.toggle(
        "active",
        i === index
      );

    });

  }


  if (memorySlides.length > 0) {

    showMemory(0);

  }


  if (nextMemoryBtn) {

    nextMemoryBtn.addEventListener("click", () => {

      if (currentMemory < memorySlides.length - 1) {

        currentMemory++;

        showMemory(currentMemory);

        if (
          currentMemory ===
          memorySlides.length - 1
        ) {

          nextMemoryBtn.innerHTML =
            "Open One Last Surprise 💌";

        } else {

          nextMemoryBtn.innerHTML =
            "Next Memory → ✨";

        }

        setTimeout(() => {

          memorySlides[currentMemory]
            .scrollIntoView({
              behavior: "smooth",
              block: "center"
            });

        }, 100);

      } else {

        showScreen(screens.letterEnvelope);

      }

    });

  }


  /* =========================================
     BIG ENVELOPE
     ========================================= */

  const bigEnvelope =
    document.getElementById("bigEnvelope");

  const openBigLetterBtn =
    document.getElementById("openBigLetterBtn");


  if (openBigLetterBtn && bigEnvelope) {

    openBigLetterBtn.addEventListener("click", () => {

      bigEnvelope.classList.add("open");

      openBigLetterBtn.style.display = "none";

      setTimeout(() => {

        showScreen(screens.letter);

      }, 1300);

    });

  }


  /* =========================================
     LETTER → FINAL
     ========================================= */

  const finishLetterBtn =
    document.getElementById("finishLetterBtn");

  if (finishLetterBtn) {

    finishLetterBtn.addEventListener("click", () => {

      showScreen(screens.final);

      setTimeout(() => {

        launchFinalConfetti();
        createFloatingHearts();

      }, 500);

    });

  }


  /* =========================================
     CONFETTI
     ========================================= */

  function launchConfetti() {

    const emojis = [
      "🎉",
      "🎊",
      "✨",
      "💖",
      "💕",
      "🥳"
    ];

    for (let i = 0; i < 70; i++) {

      const piece =
        document.createElement("span");

      piece.innerHTML =
        emojis[
          Math.floor(
            Math.random() * emojis.length
          )
        ];

      piece.style.position = "fixed";
      piece.style.left =
        Math.random() * 100 + "vw";
      piece.style.top = "-30px";
      piece.style.fontSize =
        15 + Math.random() * 20 + "px";

      piece.style.zIndex = "99999";
      piece.style.pointerEvents = "none";

      document.body.appendChild(piece);

      const duration =
        1800 + Math.random() * 1800;

      piece.animate(
        [
          {
            transform:
              "translateY(0) rotate(0deg)",
            opacity: 1
          },
          {
            transform:
              `translateY(${window.innerHeight + 100}px)
               rotate(${Math.random() * 720}deg)`,
            opacity: 0
          }
        ],
        {
          duration: duration,
          easing: "ease-out"
        }
      );

      setTimeout(() => {
        piece.remove();
      }, duration);

    }

  }


  /* =========================================
     CAKE BALLOONS
     ========================================= */

  function createBirthdayBalloons() {

    for (let i = 0; i < 7; i++) {

      const balloon =
        document.createElement("div");

      balloon.innerHTML = "🎈";

      balloon.style.position = "fixed";
      balloon.style.left =
        (5 + i * 14) + "vw";
      balloon.style.bottom = "-80px";
      balloon.style.fontSize =
        45 + Math.random() * 25 + "px";

      balloon.style.zIndex = "99999";
      balloon.style.pointerEvents = "none";

      document.body.appendChild(balloon);

      const duration =
        3000 + Math.random() * 1800;

      balloon.animate(
        [
          {
            transform:
              "translateY(0) scale(.7)",
            opacity: 0
          },
          {
            transform:
              "translateY(-50vh) scale(1)",
            opacity: 1
          },
          {
            transform:
              `translateY(-${window.innerHeight + 150}px)
               rotate(15deg)`,
            opacity: 0
          }
        ],
        {
          duration: duration,
          easing: "ease-out"
        }
      );

      setTimeout(() => {
        balloon.remove();
      }, duration);

    }

  }


  /* =========================================
     CAKE CONFETTI
     ========================================= */

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

    for (let i = 0; i < 60; i++) {

      const piece =
        document.createElement("span");

      piece.innerHTML =
        emojis[
          Math.floor(
            Math.random() * emojis.length
          )
        ];

      piece.style.position = "fixed";
      piece.style.left = "50vw";
      piece.style.top = "45vh";
      piece.style.fontSize =
        12 + Math.random() * 18 + "px";

      piece.style.zIndex = "99999";
      piece.style.pointerEvents = "none";

      document.body.appendChild(piece);

      const angle =
        Math.random() * Math.PI * 2;

      const distance =
        150 + Math.random() * 300;

      const x =
        Math.cos(angle) * distance;

      const y =
        Math.sin(angle) * distance;

      const duration =
        1000 + Math.random() * 1000;

      piece.animate(
        [
          {
            transform:
              "translate(0,0) scale(0)",
            opacity: 1
          },
          {
            transform:
              `translate(${x}px,${y}px) scale(1.2)`,
            opacity: 0
          }
        ],
        {
          duration: duration,
          easing: "ease-out"
        }
      );

      setTimeout(() => {
        piece.remove();
      }, duration);

    }

  }


  /* =========================================
     FINAL CONFETTI
     ========================================= */

  function launchFinalConfetti() {

    launchConfetti();
    launchConfetti();

  }


  /* =========================================
     FLOATING HEARTS
     ========================================= */

  function createFloatingHearts() {

    const hearts = [
      "❤️",
      "💖",
      "💕",
      "💗",
      "✨"
    ];

    for (let i = 0; i < 30; i++) {

      const heart =
        document.createElement("span");

      heart.innerHTML =
        hearts[
          Math.floor(
            Math.random() * hearts.length
          )
        ];

      heart.style.position = "fixed";
      heart.style.left =
        Math.random() * 100 + "vw";
      heart.style.bottom = "-50px";
      heart.style.fontSize =
        18 + Math.random() * 20 + "px";

      heart.style.zIndex = "99999";
      heart.style.pointerEvents = "none";

      document.body.appendChild(heart);

      const duration =
        2500 + Math.random() * 2500;

      heart.animate(
        [
          {
            transform:
              "translateY(0) scale(.8)",
            opacity: 0
          },
          {
            transform:
              "translateY(-50vh) scale(1.1)",
            opacity: 1,
            offset: 0.3
          },
          {
            transform:
              `translateY(-${window.innerHeight + 100}px)
               scale(1.3)`,
            opacity: 0
          }
        ],
        {
          duration: duration,
          easing: "ease-out"
        }
      );

      setTimeout(() => {
        heart.remove();
      }, duration);

    }

  }

});
