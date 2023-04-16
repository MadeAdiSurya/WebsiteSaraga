const indoorList = document.querySelectorAll(".fasilitas-card.indoor");
const outdoorList = document.querySelectorAll(".fasilitas-card");

const fasilitasCards = document.getElementsByClassName(".fasilitas-cards");

const semua = document.getElementById("semua");
const indoor = document.getElementById("indoor");
const outdoor = document.getElementById("outdoor");

indoor.addEventListener("click", function () {
  for (let i = 0; i < outdoorList.length; i++) {
    outdoorList[i].classList.add("hidden");
  }
  for (let i = 0; i < indoorList.length; i++) {
    indoorList[i].classList.remove("hidden");
  }

  semua.classList.remove("active");
  outdoor.classList.remove("active");
  indoor.classList.add("active");
});
semua.addEventListener("click", function () {
  for (let i = 0; i < indoorList.length; i++) {
    indoorList[i].classList.remove("hidden");
  }
  for (let i = 0; i < outdoorList.length; i++) {
    outdoorList[i].classList.remove("hidden");
  }
  indoor.classList.remove("active");
  outdoor.classList.remove("active");
  semua.classList.add("active");
});
outdoor.addEventListener("click", function () {
  for (let i = 0; i < outdoorList.length; i++) {
    outdoorList[i].classList.remove("hidden");
  }
  for (let i = 0; i < indoorList.length; i++) {
    indoorList[i].classList.add("hidden");
  }
  semua.classList.remove("active");
  indoor.classList.remove("active");
  outdoor.classList.add("active");
});
