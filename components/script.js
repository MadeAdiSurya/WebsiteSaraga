// const slider = document.querySelectorAll(".home-slider");

// const dot = document.querySelectorAll(".dot");

// let counter = 1;
// slideshow(counter);

// let timer = setInterval(autoslide, 4000);

// function autoslide() {
//   counter += 1;
//   slideshow(counter);
// }

// function slideshow(x) {
//   let n;
//   for (n = 0; n < slider.length; n++) {
//     slider[n].style.display = "none";
//   }

//   for (n = 0; n < dot.length + 1; n++) {
//     dot[n].classList.remove("active");
//   }

//   if (x > slider.length) {
//     counter = 1;
//   }

//   if (x < slider.length) {
//     counter = slider.length;
//   }

//   slider[counter - 1].style.display= ;
//   dot[counter - 1].classList.add("active");
// }

// function resetTimer() {
//   clearInterval(timer);
//   timer = setInterval(autoslide, 4000);
// }

// function currentSlide(i) {
//   counter = i;
//   slideshow(counter);
//   resetTimer();
// }

// function plusSlide(i) {
//   counter += i;
//   slideshow(counter);
//   resetTimer();
// }
