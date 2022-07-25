const hamburger = document.querySelector('.hamburger');
const mobileNav = document.querySelector('.header-nav');
const hamburgerSpan = document.querySelector('.hamburger-span');
const hamburgerSpanReverse = document.querySelector('.span-reverse');
const navLink = document.querySelectorAll('.nav-link');
const books = document.querySelectorAll('.books-img');
const bookInnerTops = document.querySelectorAll('.book-inner-top');
const navBar = document.querySelector('#main');
const mainSections = document.querySelectorAll('main section');
const main = document.querySelector('main');
const topOfNav = navBar.offsetTop;
const dropdownNavLink = document.querySelectorAll('.dropdown-link');
const underline = document.querySelectorAll('.underline');

const navBarHeight = navBar.offsetHeight;
document.documentElement.style.setProperty('--scroll-padding', navBarHeight - 1 + 'px');

hamburger.addEventListener('click', () => {
    mobileNav.classList.toggle('show');
    navBar.classList.toggle('expand');

    mobileNav.classList.toggle('translate');
    hamburgerSpan.classList.toggle('hamburger-active');
    hamburgerSpanReverse.classList.toggle('hamburger-active-span');

    navLink.forEach(link => link.classList.toggle('nav-link-color'));
    dropdownNavLink.forEach(dropdown => dropdown.classList.toggle('nav-link-color'));

})

navLink.forEach(link => link.addEventListener('click', () => {
    mobileNav.classList.toggle('show');
    mobileNav.classList.toggle('translate');
    hamburgerSpan.classList.toggle('hamburger-active');
    hamburgerSpanReverse.classList.toggle('hamburger-active-span');

    if (navBar.classList.contains('expand')) {
        navBar.classList.toggle('expand');
    }


}))

books.forEach(book => book.addEventListener('mouseenter', () => {
    book.children[1].classList.add('book-nav');
}))

books.forEach(book => book.addEventListener('mouseleave', () => {
    book.children[1].classList.toggle('book-nav');

}))



function resizeNav() {
    if (navBar.classList.contains('expand') && window.innerWidth > 1000) {
        navBar.classList.toggle('expand');
    }
}


window.onresize = resizeNav;