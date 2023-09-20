// const section = document.querySelector(".section-s");
// const firstImg = section.querySelectorAll("img")[0];
// const arrowIcons = document.querySelectorAll(".section-s i");

// arrowIcons.forEach((icon) => {
//   icon.addEventListener("click", () => {
//     let firstImgWidth = firstImg.clientWidth;
//     section.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
//   });
// });

//

const section = document.querySelector(".section-s");
const firstImg = section.querySelectorAll("img")[0];
const lastImg =
  section.querySelectorAll("img")[section.querySelectorAll("img").length - 1];
const arrowIcons = document.querySelectorAll(".section-s i");
let scrolling = false;

arrowIcons.forEach((icon) => {
  icon.addEventListener("click", () => {
    if (scrolling) return;
    let firstImgWidth = firstImg.clientWidth;
    let lastImgWidth = lastImg.clientWidth;
    let scrollAmount = icon.id == "left" ? -firstImgWidth : firstImgWidth;

    if (
      icon.id == "right" &&
      section.scrollLeft + section.clientWidth + scrollAmount >
        section.scrollWidth
    ) {
      scrolling = true;
      section.scrollLeft = 0;
      setTimeout(() => {
        scrolling = false;
      }, 800);
    } else {
      section.scrollLeft += scrollAmount;
    }
  });
});
