const slideBtn = document.querySelector('#slide-btn') // Selecionar Botão de Slide
const slideshowSection = document.querySelector('#slideshow-section'); // Selecionar a Seção contendo o Slideshow
const forms = document.querySelectorAll('form'); // Selecionar Todos os Formulários
slideBtn.addEventListener('click', (event) => {
    // Atribuir Classe para Animação de Rolagem Vertical Negativa
    slideshowSection.classList.toggle('slide-up');
    // Para Cada Elemento de Formulário Atribuir Classe para Animação de Rolagem Vertical Negativa
    forms.forEach(el => el.classList.toggle('slide-down'));
});