const reverseBtn = document.querySelector('.reverse')
// const homeMain = document.querySelector('.home-main')
// const navBarLinks = document.querySelectorAll('.nav-link')

const articleList = document.querySelectorAll('.article-list')
const articleTag = document.querySelectorAll('.tag')
const articles = document.querySelectorAll('.report-article')
const openNav = document.querySelector('.mainop')
const articleNav = document.querySelector('.article-nav')
const articleMainNav = document.querySelector('.article-main-nav')

reverseBtn.addEventListener('click', () => {
    articleList.forEach(list => list.append(...Array.from(list.childNodes).reverse()));
});

articleTag.forEach(tag => tag.addEventListener('click', () => {
    articles.forEach(article => {
        article.classList.remove('dont-show')
        if (tag.innerHTML == 'Afghanistan' && article.children[1].children[0].children[2].innerHTML != 'Afghanistan') {
            article.classList.add('dont-show')
        } else if (tag.innerHTML == 'Honduras' && article.children[1].children[0].children[2].innerHTML != 'Honduras') {
            article.classList.add('dont-show')
        } else if (tag.innerHTML == 'Kosovo' && article.children[1].children[0].children[2].innerHTML != 'Kosovo') {
            article.classList.add('dont-show')
        } else if (tag.innerHTML == 'Haiti' && article.children[1].children[0].children[2].innerHTML != 'Haiti') {
            article.classList.add('dont-show')
        } else if (tag.innerHTML == 'Chad' && article.children[1].children[0].children[2].innerHTML != 'Chad') {
            article.classList.add('dont-show')
        } else if (tag.innerHTML == 'Argentina' && article.children[1].children[0].children[2].innerHTML != 'Argentina') {
            article.classList.add('dont-show')
        } else if (tag.innerHTML == 'Mexico' && article.children[1].children[0].children[2].innerHTML != 'Mexico') {
            article.classList.add('dont-show')
        } else if (tag.innerHTML == 'N. Ireland' && article.children[1].children[0].children[2].innerHTML != 'N. Ireland') {
            article.classList.add('dont-show')
        } else if (tag.innerHTML == 'Pakistan' && article.children[1].children[0].children[2].innerHTML != 'Pakistan') {
            article.classList.add('dont-show')
        } else if (tag.innerHTML == 'Iraq' && article.children[1].children[0].children[2].innerHTML != 'Iraq') {
            article.classList.add('dont-show')
        } else if (tag.innerHTML == 'Egypt' && article.children[1].children[0].children[2].innerHTML != 'Egypt') {
            article.classList.add('dont-show')
        } else if (tag.innerHTML == 'USA' && article.children[1].children[0].children[2].innerHTML != 'USA') {
            article.classList.add('dont-show')
        } else if (tag.innerHTML == 'Syria' && article.children[1].children[0].children[2].innerHTML != 'Syria') {
            article.classList.add('dont-show')
        } else if (tag.innerHTML == 'Turkey' && article.children[1].children[0].children[2].innerHTML != 'Turkey') {
            article.classList.add('dont-show')
        } else if (tag.innerHTML == 'Guatemala' && article.children[1].children[0].children[2].innerHTML != 'Guatemala') {
            article.classList.add('dont-show')
        } else if (tag.innerHTML == 'Vietnam' && article.children[1].children[0].children[2].innerHTML != 'Vietnam') {
            article.classList.add('dont-show')
        } else if (tag.innerHTML == 'All') {
            article.classList.remove('dont-show')
        }

 
    })
   
 
}))

openNav.addEventListener('click', () => {
    articleMainNav.classList.toggle('flex-nav')

})
