const slideImage = document.getElementById("first");

const Images = [];
Images[0] = "../img/slider-beranda-1-rev.png";
Images[1] = "../img/slider-beranda-2.png";
Images[2] = "../img/slider-beranda-3.png";
Images[3] = "../img/slider-beranda-4.png";

let time = 3000;
let i = 0;

function changeImage() {
  checkDot();
  slideImage.src = Images[i];

  if (i < Images.length - 1) {
    i++;
  } else {
    i = 0;
  }
  setTimeout("changeImage()", time);
}

function clickedImage(x) {
  slideImage.src = Images[x];
  i = x;
  checkDot();
}

const dot_1 = document.getElementById("0");
const dot_2 = document.getElementById("1");
const dot_3 = document.getElementById("2");
const dot_4 = document.getElementById("3");

dot_1.addEventListener("click", function () {
  clickedImage(0);
});

dot_2.addEventListener("click", function () {
  clickedImage(1);
});

dot_3.addEventListener("click", function () {
  clickedImage(2);
});
dot_4.addEventListener("click", function () {
  clickedImage(3);
});

const prev = document.getElementById("prev");
const next = document.getElementById("next");

prev.addEventListener("click", function () {
  let temp = i - 1;
  if (temp < 0) {
    clickedImage(3);
  } else {
    clickedImage(temp);
  }
});

next.addEventListener("click", function () {
  let temp = i + 1;
  if (temp > 3) {
    clickedImage(0);
  } else {
    clickedImage(temp);
  }
});

function checkDot() {
  if (i == 0) {
    dot_1.classList.add("active");
    dot_2.classList.remove("active");
    dot_3.classList.remove("active");
    dot_4.classList.remove("active");
  } else if (i == 1) {
    dot_1.classList.remove("active");
    dot_2.classList.add("active");
    dot_3.classList.remove("active");
    dot_4.classList.remove("active");
  } else if (i == 2) {
    dot_1.classList.remove("active");
    dot_2.classList.remove("active");
    dot_3.classList.add("active");
    dot_4.classList.remove("active");
  } else if (i == 3) {
    dot_1.classList.remove("active");
    dot_2.classList.remove("active");
    dot_3.classList.remove("active");
    dot_4.classList.add("active");
  }
}

window.onload = changeImage;
