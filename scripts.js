let slideIndex = 0;
showSlides();

function showSlides() {
    const slides = document.querySelectorAll('.slides');
    const dots = document.querySelectorAll('.dot');
    slides.forEach((slide) => {
        slide.style.display = 'none';
    });
    dots.forEach((dot) => {
        dot.classList.remove('active-dot');
    });
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].classList.add('active-dot');
    setTimeout(showSlides, 5000); // Cambia cada 5 segons
}

function currentSlide(n) {
    slideIndex = n - 1;
    showSlides();
}
function toggleMenu() {
    var x = document.getElementsByClassName("navbar")[0];
    if (x.className === "navbar") {
        x.className += " responsive";
    } else {
        x.className = "navbar";
    }
}
