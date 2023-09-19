// #######################################################################################################
// anchor tag reset #section$ => #
// if (window.location.hash) {
//   history.replaceState(null, null, window.location.href.split("#")[0]);
// }

// refresh stay anchor
window.addEventListener("beforeunload", function () {
  window.scrollTo(0, 0);
});

// // refresh halaman
// function refresh() {
//   location.reload(); // Akan merefresh halaman
//   // location.reload()
// }

// project
let blankProject = () =>
  alert(
    "sedang dalam tahap pembuatan </>. \nharap menunggu beberapa minggu kemudian.."
  );
