let menuBtn = document.querySelector('#menu-btn'),
    menu = document.querySelector('#menu'),
    body = document.querySelector('body'),

    toggleMenuOpen = (e) => {
        if(body.classList.contains('menu_open')){
            body.classList.remove('menu_open');
            menuBtn.innerHTML = "Menu";
        } else {
            body.classList.add('menu_open');
            menuBtn.innerHTML = "Close";
        }
    }

menuBtn.addEventListener('click', toggleMenuOpen, false);

