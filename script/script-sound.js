// input audio
var audio1 = new Audio(
  // "/home/aria/Dokumen/WEB_Aria/portofolio_v.1/script/s1.mp3"
  "https://www.fesliyanstudios.com/play-mp3/387"
);
// audio1.src =;

// onclick to a
var semuaElemenA = document.querySelectorAll("a");

semuaElemenA.forEach((elemenA) => {
  elemenA.addEventListener("click", () => {
    audio1.play();
    console.log("audio");
  });
});
