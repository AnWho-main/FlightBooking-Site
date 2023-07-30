const preloader = document.querySelector('.pre-loader');

setTimeout(function() {
    preloader.classList.add('hide-preloader');
}, 2000);
// window.addEventListener('load', function(){
//     preloader.classList.add('hide-preloader');
// })