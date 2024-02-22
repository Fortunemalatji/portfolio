
let currentSlide = 1;

function nextSlide() {
    if (currentSlide < 3) {
        currentSlide++;
        updateSlider();
    }
}

function prevSlide() {
    if (currentSlide > 1) {
        currentSlide--;
        updateSlider();
    }
}

function updateSlider() {
    const slider = document.querySelector('.slider');
    slider.style.height = `${slider.scrollHeight}px`; /* Set height to the actual content height */
    slider.style.transform = `translateX(-${(currentSlide - 1) * 33.33}%)`;
    updateDots();
}

function updateDots() {
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index + 1 === currentSlide);
    });
}
