// Slider 1
let currentSlide1 = 0;
const slides1 = document.querySelectorAll(".slide");
const dots1 = document.querySelectorAll('.dot');

const initSlider1 = (n) => {
  slides1.forEach((slide) => {
    slide.style.display = "none";
  });
  dots1.forEach((dot) => {
    dot.classList.remove("active");
  });
  
  slides1[n].style.display = "block";
  dots1[n].classList.add("active");
};

document.addEventListener("DOMContentLoaded", () => initSlider1(currentSlide1));

const nextSlider1 = () => {
  currentSlide1 >= slides1.length - 1 ? currentSlide1 = 0 : currentSlide1++;
  initSlider1(currentSlide1);
};

const prevSlider1 = () => {
  currentSlide1 <= 0 ? currentSlide1 = slides1.length - 1 : currentSlide1--;
  initSlider1(currentSlide1);
};

document.querySelector(".next").addEventListener('click', nextSlider1);
document.querySelector(".prev").addEventListener('click', prevSlider1);

setInterval(() => {
  nextSlider1();
}, 5000);

dots1.forEach((dot, i) => {
  dot.addEventListener("click", () => {
    initSlider1(i);
    currentSlide1 = i;
  });
});

// Slider 2
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dots");
  if (n > slides.length + 1) { slideIndex = 1; }    
  if (n < 1) { slideIndex = slides.length + 1; }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";  
  dots[slideIndex - 1].className += " active";
}