// input audio
var audio1 = new Audio(
  // "/home/aria/Dokumen/WEB_Aria/portofolio_v.1/script/s1.mp3"
  // "https://www.fesliyanstudios.com/play-mp3/387"
  "https://www.fesliyanstudios.com/play-mp3/388"
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

// onclick to btn
var btnAudio = document.getElementById("audio1");

btnAudio.addEventListener("click", () => {
  audio1.play();
});

// semuaElemenBtn.forEach((elemenA) => {
//   elemenA.addEventListener("click", () => {
//     audio1.play();
//     console.log("audio");
//   });
// });
