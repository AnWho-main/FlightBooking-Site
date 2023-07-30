// from
// function from(){
// alert(source.value);
// alert(dest.value);
// alert(date.value);
// };

function next(){
  localStorage.setItem('so',source.value);
  localStorage.setItem('de',dest.value);
  localStorage.setItem('da',date.value);
  window.open("flight.html");
  }

// First Slider
const s = document.querySelectorAll(".m-1");
const n = document.querySelector(".next-1");
const p = document.querySelector(".prev-1");
s.forEach(function (slide, index) {
  slide.style.left = `${index * 100}%`;
});
let counter1 = 0;
n.addEventListener("click", function () {
  counter1++;
  carousel1();
});

p.addEventListener("click", function () {
  counter1--;
  carousel1();
});

function carousel1() {

  if (counter1 < s.length - 1) {
    n.style.display = "block";
  } else {
    n.style.display = "none";
  }
  if (counter1 > 0) {
    p.style.display = "block";
  } else {
    p.style.display = "none";
  }
  s.forEach(function (slide) {
    slide.style.transform = `translateX(-${counter1 * 104}%)`;
  });
}

p.style.display = "none";


// Second Slider
const slides = document.querySelectorAll(".m");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");
slides.forEach(function (slide, index) {
  slide.style.left = `${index * 100}%`;
});
let counter = 0;
nextBtn.addEventListener("click", function () {
  counter++;
  carousel();
});

prevBtn.addEventListener("click", function () {
  counter--;
  carousel();
});

function carousel() {

  if (counter < slides.length - 1) {
    nextBtn.style.display = "block";
  } else {
    nextBtn.style.display = "none";
  }
  if (counter > 0) {
    prevBtn.style.display = "block";
  } else {
    prevBtn.style.display = "none";
  }
  slides.forEach(function (slide) {
    slide.style.transform = `translateX(-${counter * 104}%)`;
  });
}

prevBtn.style.display = "none";
