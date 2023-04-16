const detilAkun = document.getElementById("prfl-1");
const kataSandi = document.getElementById("prfl-2");
const histori = document.getElementById("prfl-3");

const menuDetilAkun = document.querySelector(".first");
const menuKataSandi = document.querySelector(".second");
const menuHistori = document.querySelector(".third");

const pesananAktif = document.getElementById("pesanan");
const daftarPesanan = document.querySelectorAll(".booking.inactive");

detilAkun.addEventListener("click", function () {
  detilAkun.classList.add("active");
  kataSandi.classList.remove("active");
  histori.classList.remove("active");

  menuDetilAkun.classList.remove("hidden");
  menuKataSandi.classList.add("hidden");
  menuHistori.classList.add("hidden");
});
kataSandi.addEventListener("click", function () {
  detilAkun.classList.remove("active");
  kataSandi.classList.add("active");
  histori.classList.remove("active");

  menuDetilAkun.classList.add("hidden");
  menuKataSandi.classList.remove("hidden");
  menuHistori.classList.add("hidden");
});
histori.addEventListener("click", function () {
  detilAkun.classList.remove("active");
  kataSandi.classList.remove("active");
  histori.classList.add("active");

  menuDetilAkun.classList.add("hidden");
  menuKataSandi.classList.add("hidden");
  menuHistori.classList.remove("hidden");
});

pesananAktif.addEventListener("click", function () {
  for (let i = 0; i < daftarPesanan.length; i++) {
    daftarPesanan[i].classList.add("notshow");
  }
  pesananAktif.classList.add("active");
});
