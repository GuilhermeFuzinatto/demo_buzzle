let currentIndex = 0;

function moveSlide(step) {
    const slide = document.querySelector('.divcarrossel');
    const slideWidth = slide.offsetWidth + 32; // 32px = 2rem margin-right
    const totalSlides = document.querySelectorAll('.divcarrossel').length;

    // Número de slides visíveis no viewport
    const visibleWidth = document.querySelector('.carrossel').offsetWidth;
    const visibleCount = Math.floor(visibleWidth / slideWidth);
    const maxIndex = totalSlides - visibleCount;

    if (currentIndex + step < 0 || currentIndex + step > maxIndex) return;

    currentIndex += step;

    const seccarrossel = document.querySelector('.seccarrossel');
    seccarrossel.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}
