const section = document.querySelector(".section-s");
firstImg = section.querySelectorAll("img")[0];
const arrowIcons = document.querySelectorAll(".section-s i");

arrowIcons.forEach((icon) => {
  icon.addEventListener("click", () => {
    let firstImgWidth = firstImg.clientWidth;
    section.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
  });
});
