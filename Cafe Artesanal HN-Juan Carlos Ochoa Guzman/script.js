//Funcion de desplazamiento cuando se hace scroll (transparencia)
window.addEventListener("scroll", function() {
    var body = document.body;
    if (window.scrollY > 100) { 
        body.classList.add("scrolled");
    } else {
        body.classList.remove("scrolled");
    }
});

//Hamburguesa



document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector("header");
    const hamburger = document.querySelector(".hamburger");

    hamburger.addEventListener("click", function () {
        header.classList.toggle("active");
    });
});


