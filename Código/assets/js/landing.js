const slideBtn = document.querySelector('#slide-btn');
const slideshowSection = document.querySelector('#slideshow-section');
slideBtn.addEventListener('click', (event) => {
    slideshowSection.classList.toggle('slide-up');
});