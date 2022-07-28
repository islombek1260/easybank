var navBtn = document.querySelector(".info__hamberger-btn");
var navBg = document.querySelector(".info__hamburger-menu");
var navClose = document.querySelector(".info__hamburger-remove");

navBtn.addEventListener('click',function(){
    navBg.classList.add('menu-active');
    navBtn.classList.add('info__btn-remove');
});
navClose.addEventListener('click',function(){
    navBg.classList.remove('menu-active');
    navBtn.classList.remove('info__btn-remove'); 
});