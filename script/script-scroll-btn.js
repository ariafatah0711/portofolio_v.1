// // scroll-btn
var scrollBtn = document.getElementById("scroll-btn");

function showScrollBtn() {
  scrollBtn.style.display = "block";

  setTimeout(() => {
    scrollBtn.style.display = "none";
  }, 5000);
  // scrollBtn.style.bottom = "25px";
}

// window.addEventListener("mousemove", showScrollBtn);
// window.addEventListener("scroll", showScrollBtn);
// window.addEventListener("touchmove", showScrollBtn);
// window.addEventListener("touch", showScrollBtn);
