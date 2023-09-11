// #######################################################################################################
// anchor tag reset
if (window.location.hash) {
  history.replaceState(null, null, window.location.href.split("#")[0]);
}

// unchecked navbar
function uncheckCheckbox() {
  const checkbox = document.getElementById("check");
  checkbox.checked = false;
}

// contact
function goToLink() {
  var nama = document.getElementById("nama").value;
  var pesan = document.getElementById("pesan").value;

  if (nama == "" || pesan == "") {
    var whatsappLink = "https://wa.me/6289509221496";
  } else {
    // enter = %0A
    var formatNama = nama.replace(/\n/g, function (match) {
      return "%0A".repeat(match.length);
    });
    var formatPesan = pesan.replace(/\n/g, function (match) {
      return "%0A".repeat(match.length);
    });

    nama = formatNama;
    pesan = formatPesan;

    // spasi = %20
    formatNama = nama.replace(/ /g, function (match) {
      return "%20".repeat(match.length);
    });
    formatPesan = pesan.replace(/ /g, function (match) {
      return "%20".repeat(match.length);
    });

    nama = formatNama;
    pesan = formatPesan;

    // var whatsappLink = "https://wa.me/6289509221496?text=nama%20saya%20" + nama + "%0A" + pesan;
    var whatsappLink =
      "https://wa.me/6289509221496?text=nama%20saya%20" + nama + "%0A" + pesan;
  }
  // alert(whatsappLink);
  window.location.href = whatsappLink;

  var nama = document.getElementById("nama");
  var pesan = document.getElementById("pesan");
  nama.value = "";
  pesan.value = "";
}

// clear textarea
function clearTextarea() {
  var nama = document.getElementById("nama");
  var pesan = document.getElementById("pesan");
  nama.value = "";
  pesan.value = "";
}

window.onload = clearTextarea;

// refresh halaman
function refresh() {
  location.reload(); // Akan merefresh halaman
}

function blankProject() {
  alert(
    "sedang dalam tahap pembuatan </>. \nharap menunggu beberapa minggu kemudian.."
  );
}

/*
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
*/
