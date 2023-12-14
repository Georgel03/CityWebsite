let menu = document.querySelector('.fa-bars');
let navbar = document.querySelector('.navbar');
let slides = document.querySelectorAll('.slide-container');
let index = 0;


window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

menu.addEventListener('click', () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});

function next() {
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
}

function previous() {
    slides[index].classList.remove('active');
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active');
}




