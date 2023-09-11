// input audio
var audio1 = new Audio("click-1.mp3");
// audio1.src =;

// onclick to a
var semuaElemenA = document.querySelectorAll("a");

semuaElemenA.forEach((elemenA) => {
  elemenA.addEventListener("click", () => {
    audio1.play();
    console.log("audio");
  });
});
