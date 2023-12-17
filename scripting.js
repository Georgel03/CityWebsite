let navbar = document.querySelector('.header .navbar');
document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    navbar.classList.remove('active');
}

document.querySelectorAll('.contact .row .faq .box h3').forEach(faqBox => {
    faqBox.onclick = () => {
        faqBox.parentElement.classList.toggle('active');
    }
})

document.addEventListener("DOMContentLoaded", function () {
    var swiper = new Swiper(".home-slider", {
        loop: true,
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
});

document.addEventListener("DOMContentLoaded", function () {
    var swiper = new Swiper(".gallery-slider", {
        loop: true,
        effect: "coverflow",
        slidesPerView: "auto",
        grabCursor: true,
        centeredSlides: true,
        coverflowEffect: {
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2,
            slideShadows: true,
        },
        pagination: {
            el: ".swiper-pagination",
        },
    });
});


document.addEventListener("DOMContentLoaded", function () {
    var swiper = new Swiper(".reviews-slider", {
        loop: true,
        slidesPerView: "auto",
        grabCursor: true,
        spaceBetween: 30,
        pagination: {
            el: ".swiper-pagination",
        },
        breakpoints: {
            768: {
              slidesPerView: 1,
    
            },
            991: {
              slidesPerView: 2,
             
            },
        },
    });
});

document.addEventListener("DOMContentLoaded", function () {
    var form = document.querySelector('.contact form');

    form.onsubmit = function () {
        return validateForm();
    };

    function validateForm() {
        
        document.getElementById("nameError").textContent = "";
        document.getElementById("emailError").textContent = "";
        document.getElementById("numberError").textContent = "";
        document.getElementById("msgError").textContent = "";

      
        var name = form.querySelector('input[name="name"]').value;
        var email = form.querySelector('input[name="email"]').value;
        var number = form.querySelector('input[name="number"]').value;
        var msg = form.querySelector('textarea[name="msg"]').value;

        if (name === "") {
            document.getElementById("nameError").textContent = "Name is required";
            return false;
        }

        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            document.getElementById("emailError").textContent = "Invalid email address";
            return false;
        }

      
        if (number === "" || isNaN(number) || number < 0 || number > 99999999999) {
            document.getElementById("numberError").textContent = "Enter a valid number between 0 and 99999999999";
            return false;
        }

       
        if (msg === "") {
            document.getElementById("msgError").textContent = "Message is required";
            return false;
        }

       
        return true;
    }
});


