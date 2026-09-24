document.addEventListener('DOMContentLoaded', function () {
    var slides = document.querySelectorAll('.hero-slideshow .hero-slide');
    if (slides.length < 2) return;

    var current = 0;

    function activate(index) {
        var slide = slides[index];
        slide.classList.toggle('zoom-out', index % 2 === 1);
        // Force a reflow so the animation restarts every time this slide becomes active again.
        void slide.offsetWidth;
        slide.classList.add('active');
    }

    activate(current);

    setInterval(function () {
        slides[current].classList.remove('active');
        current = (current + 1) % slides.length;
        activate(current);
    }, 6000);
});
