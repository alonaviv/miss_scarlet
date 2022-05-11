const main = document.getElementById('main');
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
        // main.classList.add('noscroll');
        overlay.style.zIndex = 4;
    }
        

        // Get the actual height of menuContent, in order
        // for menuContainer to match it and allow scrolling until
        // the bottom of the content
        // const menuContentStyle = window.getComputedStyle(menu);
        // const menuTopMargin = parseFloat(menuContentStyle['marginTop']);
        // const menuTopPadding = parseFloat(menuContentStyle['paddingTop']);
        // const totalHeight = menu.offsetHeight + menuTopMargin + menuTopPadding;
        // menuContainer.style.height = `${totalHeight}px`;

        
});

//Close menu overlay (by clicking everywhere but content)
menu.addEventListener('click', (e) => {
    if (e.target.id === 'overlay' || 
    e.target.classList.contains('close-btn') || 
    e.target.id === 'menu-content' ||
    e.target.id === 'menu'){
        // menuContainer.style.height = '100vh';
        menuContainer.style.opacity = 0;
        overlay.style.transform = 'translateX(-250vh) translateY(-250vh)';
        menu.style.overflow = 'hidden';
        menu.style.pointerEvents = 'none';
        main.classList.remove('noscroll');

        menuContainer.classList.add('menu-closed');


    //     setTimeout(()=>{
    //         menu.style.opacity = 0;
    //         menuContainer.style.opacity = 1;
    //         console.log("Running timeout");}, 1000);
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

