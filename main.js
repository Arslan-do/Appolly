const burgerButton = document.querySelector('.nav__burger');
const mobileMenu = document.querySelector('#mobileMenu');
const closeButton = document.querySelector('.nav-menu__close');

if (burgerButton && mobileMenu) {
    burgerButton.addEventListener('click', () => {
        mobileMenu.classList.add('nav-menu--open');
    });
}

if (closeButton && mobileMenu) {
    closeButton.addEventListener('click', () => {
        mobileMenu.classList.remove('nav-menu--open');
    });
}
