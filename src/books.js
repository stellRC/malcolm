const hamburger = document.querySelector('.hamburger')
const mobileNav = document.querySelector('.header-nav')
const hamburgerSpan = document.querySelector('.hamburger-span')
const hamburgerSpanReverse = document.querySelector('.span-reverse')
const navLink = document.querySelectorAll('.nav-link')
const books = document.querySelectorAll('.book-purchase')
const bookInnerTops = document.querySelectorAll('.book-inner-top')
const navBar = document.querySelector('#main')
const topOfNav = navBar.offsetTop;
const quoteSlider = document.querySelector('.hero-quote')

hamburger.addEventListener('click', () => {
    mobileNav.classList.toggle('show')
    mobileNav.classList.toggle('translate')
    hamburgerSpan.classList.toggle('hamburger-active')
    hamburgerSpanReverse.classList.toggle('hamburger-active-span')
})

navLink.forEach(link => link.addEventListener('click', () => {
    mobileNav.classList.toggle('show')
    mobileNav.classList.toggle('translate')
    hamburgerSpan.classList.toggle('hamburger-active')
    hamburgerSpanReverse.classList.toggle('hamburger-active-span')
}))

// books.forEach(book => book.addEventListener('mouseenter', () => {
//     // book.children[0].classList.toggle('visible')
//     book.children[1].classList.toggle('visible')

// }))

// books.forEach(book => book.addEventListener('mouseleave', () => {
//     // book.children[0].classList.toggle('visible')
//     book.children[1].classList.toggle('visible')

// }))

books.forEach(book => book.addEventListener('mouseenter', () => {
    book.children[0].classList.toggle('visible')


}))

books.forEach(book => book.addEventListener('mouseleave', () => {
    book.children[0].classList.toggle('visible')

}))

function fixNav() {
    if (window.scrollY >=topOfNav) {
        // adds padding so that flow of document resembles before fizxed nav
        document.body.style.paddingTop = navBar.offsetHeight + 'px';
        document.body.classList.add('fixed-nav');
    } else {
        document.body.style.paddingTop = 0;

    }
}

window.addEventListener('scroll', fixNav)
