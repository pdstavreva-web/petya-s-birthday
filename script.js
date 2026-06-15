window.nextPage = function(page){
  document
    .querySelectorAll(".page")
    .forEach((section) => section.classList.remove("active"));

  const target = document.getElementById("page" + page);

  if(!target){
    return;
  }

  target.classList.add("active");
  window.scrollTo({ top: 0, behavior: "smooth" });

  if(page === 12){
    if(typeof confetti === "function"){
      confetti({
        particleCount: 220,
        spread: 130,
        origin: { y: 0.62 },
      });

      setTimeout(() => {
        confetti({
          particleCount: 120,
          spread: 90,
          origin: { x: 0.18, y: 0.75 },
        });

        confetti({
          particleCount: 120,
          spread: 90,
          origin: { x: 0.82, y: 0.75 },
        });
      }, 450);
    }

    const music = document.getElementById("birthdayMusic");

    if(music){
      music.volume = 0.72;
      music.play().catch(() => {
        const existingButton = document.getElementById("musicStartButton");

        if(existingButton){
          return;
        }

        const button = document.createElement("button");
        button.id = "musicStartButton";
        button.type = "button";
        button.textContent = "🎵 Пусни музиката";
        button.addEventListener("click", () => music.play());
        target.appendChild(button);
      });
    }
  }
};

const noBtn = document.getElementById("noBtn");

if(noBtn){
  const teaseNoButton = (event) => {
    if(event){
      event.preventDefault();
    }

    noBtn.textContent = "Не е толкова лесно 😇";

    const x = Math.random() * Math.max(0, window.innerWidth - 260);
    const y = Math.random() * Math.max(0, window.innerHeight - 90);

    noBtn.style.position = "fixed";
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
    noBtn.style.zIndex = "20";
  };

  noBtn.addEventListener("pointerdown", teaseNoButton);
  noBtn.addEventListener("mouseenter", teaseNoButton);
  noBtn.addEventListener("click", teaseNoButton);
}
