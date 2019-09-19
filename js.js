const batata = document.querySelector('.batata');
const nav = document.querySelector('.nav-links_menu');
const navLinks = document.querySelectorAll('.nav-links_menu');

const navSlide = () => {

    batata.addEventListener('click', () => {
        nav.classList.toggle('.nav-active');
    });

    navLinks.forEach((link, index) =>{
        console.log(index);
    });
}

navSlide();