// #######################################################################################################
// anchor tag reset
if (window.location.hash) {
  history.replaceState(null, null, window.location.href.split("#")[0]);
  window.location.href = "#section-1";
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
  // location.reload()
}

function blankProject() {
  alert(
    "sedang dalam tahap pembuatan </>. \nharap menunggu beberapa minggu kemudian.."
  );
}
