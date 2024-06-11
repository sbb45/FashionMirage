function darkmode() {
    const body = document.body;
    const isDarkMode = localStorage.getItem('theme') === 'dark';

    if (isDarkMode) {
        localStorage.setItem('theme', 'light');
        body.classList.remove('dark-theme');
        body.classList.add('light-theme');
    } else {
        localStorage.setItem('theme', 'dark');
        body.classList.remove('light-theme');
        body.classList.add('dark-theme');
    }
}

document.getElementById('toggleTheme').addEventListener('click', darkmode);

window.onload = function() {
    const body = document.body;
    const theme = localStorage.getItem('theme') || 'light';

    body.classList.add(theme === 'dark' ? 'dark-theme' : 'light-theme');
};

let navBtn = document.getElementById('nav-menu');
let navBtnImg = document.querySelector('.nav-menu__img');
let nav = document.querySelector('.nav__list');

navBtn.addEventListener('click', () => {
    nav.classList.toggle('open');
    if(navBtn.classList.toggle('open')){
        navBtnImg.src = './img/icons/menu-close.png';
    } else {
        navBtnImg.src = './img/icons/menu.png';
    }
});


AOS.init();

$(document).ready(function(){
    $(".owl-carousel").owlCarousel();
  });