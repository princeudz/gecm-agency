// AOS animations
AOS.init();

// Slider logic
const slider = document.getElementById('slider');
let currentSlide = 0;
const totalSlides = slider.children.length;

function showSlide(index) {
  slider.style.transform = `translateX(-${index * 100}vw)`;
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % totalSlides;
  showSlide(currentSlide);
}

setInterval(nextSlide, 4000);

// Contact form alert
document.getElementById('contactForm')?.addEventListener('submit', function (e) {
  e.preventDefault();
  alert('Message sent! We’ll contact you soon.');
});
