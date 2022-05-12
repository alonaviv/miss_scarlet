const overlay = document.getElementById('overlay');
const menu = document.getElementById('menu')
const menuContainer = document.getElementById('menu-container');
const menuContent = document.getElementById('menu-content')

function flushCss(...elements){
    elements.forEach((elem) => elem.offsetHeight);
}

// GENERAL TODO: Try to use original values from CSS


// Open menu overlay
document.querySelector('.hamburger').addEventListener('click', function(e){
    if (!menuContainer.classList.contains('menu-closed')){
        menuContent.scrollIntoView(true);
        overlay.style.transform = 'translateX(0) translateY(0)';
        menu.style.opacity = 1;
        menu.style.overflow = 'auto';
        menu.style.pointerEvents = 'auto';
        document.body.classList.add('noscroll');
        overlay.style.zIndex = 4;
    }
});

//Close menu overlay (by clicking everywhere but content)
menu.addEventListener('click', (e) => {
    if (e.target.id === 'overlay' || 
    e.target.classList.contains('close-btn') || 
    e.target.id === 'menu-content' ||
    e.target.id === 'menu'){
        menuContainer.style.opacity = 0;
        overlay.style.transform = 'translateX(-250vh) translateY(-250vh)';
        menu.style.overflow = 'hidden';
        menu.style.pointerEvents = 'none';
        document.body.classList.remove('noscroll');
        menuContainer.classList.add('menu-closed');

    }
});

// Cleanup after closing menu
overlay.addEventListener('transitionend', () =>{
    if (menuContainer.classList.contains('menu-closed')){
        // Disable transitions
        menu.style.transition = 'none';
        menuContainer.style.transition = 'none';

        menu.style.opacity = 0;
        menuContainer.style.opacity = 1;
        menuContainer.classList.remove('menu-closed');

        flushCss(menu, menuContainer);
        menu.style.transition = "opacity 0.2s linear 0.4s";
        menuContainer.style.transition = "opacity 0.3s linear";
    }
})

