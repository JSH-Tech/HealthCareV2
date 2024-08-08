document.addEventListener("DOMContentLoaded",()=>{
let slideIndex = 0;
let autoSlideInterval;

function showSlides(n) {
const slides = document.querySelectorAll('.slide');
if (n >= slides.length) slideIndex = 0;
if (n < 0) slideIndex = slides.length - 1;

slides.forEach(slide => {
    slide.style.display = 'none';
    slide.classList.remove('active');
});

slides[slideIndex].style.display = 'block';
slides[slideIndex].classList.add('active');
}

function moveSlide(n) {
slideIndex += n;
showSlides(slideIndex);
}

function startAutoSlide() {
autoSlideInterval = setInterval(() => {
    moveSlide(1);
}, 3000); // Change slide every 3 seconds
}

function stopAutoSlide() {
clearInterval(autoSlideInterval);
}

// Initial display
showSlides(slideIndex);
startAutoSlide();

// Event Listeners for manual control
document.getElementById('prevBtn').addEventListener('click', function() {
moveSlide(-1);
stopAutoSlide(); // Optionally stop auto slide on manual interaction
});

document.getElementById('nextBtn').addEventListener('click', function() {
moveSlide(1);
stopAutoSlide(); // Optionally stop auto slide on manual interaction
});
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const menuNav = document.getElementById('menuNav');

    hamburgerBtn.addEventListener('click', () => {
        menuNav.classList.toggle('active');
    });
})

