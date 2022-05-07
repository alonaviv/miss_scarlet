// Add no scroll on overlay (which happens on checkbox)
const main = document.getElementById('main');
const overlay = document.getElementById('menu-overlay');

document.querySelector('.hamburger').addEventListener('click', function(e){
        console.log("Hello")
        main.classList.add('notoggle');
        overlay.style.visibility = 'visible';
        overlay.querySelector('.menu-container').style.transform = 'scale(1)';

});