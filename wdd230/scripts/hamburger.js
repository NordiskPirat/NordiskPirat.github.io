const hamburger = document.querySelector('#menu');
const navi = document.querySelector('.navi');

hamburger.addEventListener('click', () => {
    navi.classList.toggle('open');
    hamburger.classList.toggle('open');
});