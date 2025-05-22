let currentIndex = 0;

function moveSlide(step) {
    const slides = document.querySelectorAll('.divcarrossel');
    const totalSlides = slides.length;
    currentIndex = (currentIndex + step + totalSlides) % totalSlides;
    const carrossel = document.querySelector('.divcarrossel');
    carrossel.style.transform = `translateX(-${currentIndex * 100}%)`;
}