const hamburger = document.querySelector('.hamburger')
const mobileNav = document.querySelector('.header-nav')
const hamburgerSpan = document.querySelector('.hamburger-span')
const hamburgerSpanReverse = document.querySelector('.span-reverse')
const navLink = document.querySelectorAll('.nav-link')
const books = document.querySelectorAll('.book-purchase')
const bookInnerTops = document.querySelectorAll('.book-inner-top')
const navBar = document.querySelector('#main')
const mainSections = document.querySelectorAll('main section')
const main = document.querySelector('main')
const topOfNav = navBar.offsetTop;

const navBarHeight = navBar.offsetHeight;
document.documentElement.style.setProperty('--scroll-padding', navBarHeight - 1 + 'px');

hamburger.addEventListener('click', () => {
    mobileNav.classList.toggle('show')
    navBar.classList.toggle('expand')

    mobileNav.classList.toggle('translate')
    hamburgerSpan.classList.toggle('hamburger-active')
    hamburgerSpanReverse.classList.toggle('hamburger-active-span')

    navLink.forEach(link => link.classList.toggle('nav-link-color'))
})

navLink.forEach(link => link.addEventListener('click', () => {
    mobileNav.classList.toggle('show')
    mobileNav.classList.toggle('translate')
    hamburgerSpan.classList.toggle('hamburger-active')
    hamburgerSpanReverse.classList.toggle('hamburger-active-span')

    if (navBar.classList.contains('expand')) {
        navBar.classList.toggle('expand')
    }



    // if (link.classList.contains('underline-active')) {
    //     link.classList.toggle('underline-active')
    // } else {
    //     link.classList.toggle('underline-active')
    // }


}))

// books.forEach(book => book.addEventListener('mouseenter', () => {
//     // book.children[0].classList.toggle('visible')
//     book.children[1].classList.toggle('visible')
// }))

// books.forEach(book => book.addEventListener('mouseleave', () => {
//     // book.children[0].classList.toggle('visible')
//     book.children[1].classList.toggle('visible')

// }))

// books.forEach(book => book.addEventListener('mouseenter', () => {
//     book.children[0].classList.toggle('visible')


// }))

// books.forEach(book => book.addEventListener('mouseleave', () => {
//     book.children[0].classList.toggle('visible')

// }))

// function fixNav() {
//     if (window.scrollY >=topOfNav) {
//         // adds padding so that flow of document resembles before fizxed nav
//         document.body.style.paddingTop = navBar.offsetHeight + 'px';
//         document.body.classList.add('fixed-nav');
//     } else {
//         document.body.style.paddingTop = 0;
//         document.body.classList.remove('fixed-nav');

//     }
// }

// window.addEventListener('scroll', fixNav)


function resizeNav() {
    if (navBar.classList.contains('expand') && window.innerWidth > 1000) {
        navBar.classList.toggle('expand')
    }
}


window.onresize = resizeNav;
