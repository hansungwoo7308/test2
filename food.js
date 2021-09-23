// header ---------------------------------------------------------------
const header = document.querySelector('.header');
const content = document.querySelector('.content');

window.addEventListener('scroll', function(){
    console.log(content.offsetTop);
    console.log(content.getBoundingClientRect().top);
    if(window.scrollY > content.offsetTop - 100 && window.scrollY < content.offsetTop + content.offsetHeight - 100){
        // header.style.color = `black`;
    } else{
        // header.style.color = `white`;
    }
});


// section1 home -----------------------------------------------------------------


// section2 menu ------------------------------------------------------------
const menuBoxText = document.querySelector('.section2 .boxes .box h3');

