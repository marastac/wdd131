document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('#image-slider .slide');
    let currentSlide = 0;

    function changeSlide() {
        // Remove active class from current slide
        slides[currentSlide].classList.remove('active');

        // Move to next slide, loop back to start if at end
        currentSlide = (currentSlide + 1) % slides.length;

        // Add active class to next slide
        slides[currentSlide].classList.add('active');
    }

    // Change slide every 5 seconds
    setInterval(changeSlide, 5000);
});