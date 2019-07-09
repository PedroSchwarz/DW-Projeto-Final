const slideBtn = document.querySelector('#slide-btn')
const slideshowSection = document.querySelector('#slideshow-section');
const forms = document.querySelectorAll('form');
slideBtn.addEventListener('click', (event) => {
    slideshowSection.classList.toggle('slide-up');
    forms.forEach(el => el.classList.toggle('show-up'));
});