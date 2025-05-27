//ANIMACAO CADASTRO
function aniprof(){
    document.getElementById('divprof').className = 'animacaoprof';
    document.getElementById('divalun').className = 'tiraalun';
    document.getElementById('efeitoprof').className = 'efx';
    document.getElementById('divcad').className = 'divcad';
}

function anialun(){
    document.getElementById('divalun').className = 'animacaoalun';
    document.getElementById('divprof').className = 'tiraprof';
    document.getElementById('efeitoalun').className = 'efx';
    document.getElementById('divcad').className = 'divcad';
}

//VISUALIZAÇÃO DE SENHA CADASTRO
const button1 = document.getElementById('botao1');
let botao1click = false;
const button2 = document.getElementById('botao2');
let botao2click = false;

button1.addEventListener('click', function() {
    if (botao1click == false){
        botao1click = true;
    }else{
        botao1click = false;
    }
});

button2.addEventListener('click', function() {
    if (botao2click == false){
        botao2click = true;
    }else{
        botao2click = false;
    }
});

function anibotao1(){
    const btn = document.getElementById('botao1');
    const zoi = document.getElementById('olho1');
    const inp = document.getElementById('senha1');
    // Remove a classe anterior
    btn.classList.remove('versenha', 'saisenha');

    if(!botao1click){
    btn.classList.add('versenha');
    zoi.src = 'imagens/vesim.png';
    inp.type = 'text';
    botao1click = true;
    }else{
    btn.classList.add('saisenha');
    zoi.src = 'imagens/venao.png';
    inp.type = 'password';
    botao1click = false;
    }
}

function anibotao2(){
    const btn = document.getElementById('botao2');
    const zoi = document.getElementById('olho2');
    const inp = document.getElementById('senha2');
    // Remove a classe anterior
    btn.classList.remove('versenha', 'saisenha');

    if(!botao2click){
    btn.classList.add('versenha');
    zoi.src = 'imagens/vesim.png';
    inp.type = 'text';
    botao2click = true;
    }else{
    btn.classList.add('saisenha');
    zoi.src = 'imagens/venao.png';
    inp.type = 'password';
    botao2click = false;
    }
}

//CARROSSEL HOMEPAGE
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
