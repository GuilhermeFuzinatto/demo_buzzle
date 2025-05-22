let currentIndex = 0;

function moveSlide(step) {
    const slides = document.querySelectorAll('.divcarrossel');
    const totalSlides = slides.length;
    
    // Verifica se o carrossel não ultrapassou o limite
    if (currentIndex + step >= totalSlides || currentIndex + step < 0) {
        return;  // Não faz nada se o limite for atingido
    }
    
    // Se o índice for válido, atualiza a posição
    currentIndex = currentIndex + step;

    // Atualiza o transform do carrossel para mostrar o slide correspondente
    const carrossel = document.querySelector('.seccarrossel');
    carrossel.style.transform = `translateX(-${currentIndex * 33.33}%)`;
}