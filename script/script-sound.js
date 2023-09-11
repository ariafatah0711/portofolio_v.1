// input audio
const audio1 = new Audio();
audio1.src = "../sound/click-1.mp3";

// onclick to a
const semuaElemenA = document.querySelectorAll("a");

semuaElemenA.forEach((elemenA) => {
  elemenA.addEventListener("click", () => {
    audio1.play();
  });
});
