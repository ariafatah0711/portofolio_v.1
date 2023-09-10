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

// mengatur tampilan android
let currentZoomLevel = 1; // Inisialisasi level zoom awal
let isAndroid = /Android/.test(navigator.userAgent);

// Fungsi untuk mendeteksi perubahan zoom
function detectZoomChange() {
  let zoomLevel = document.documentElement.clientWidth / window.innerWidth;

  // Cek apakah perangkat Android dan level zoom berubah
  if (isAndroid && zoomLevel !== currentZoomLevel) {
    // Sesuaikan posisi halaman di sini (contohnya, mengatur margin-top)
    document.body.style.marginTop = "20px"; // Sesuaikan dengan nilai yang Anda inginkan

    // Update nilai zoom saat ini
    currentZoomLevel = zoomLevel;
  }

  // Panggil fungsi ini lagi secara berulang
  requestAnimationFrame(detectZoomChange);
}

// Panggil fungsi pertama kali
detectZoomChange();
