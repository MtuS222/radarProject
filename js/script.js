function login() {
    window.location.href = "home-page.html";
}

const btnMobile = document.getElementById('hamburguer-menu');
const mobileMenu = document.getElementById('mobile-menu');
const closeMobileMenu = document.getElementById('close-mobile-menu');

function toggleMobileMenu(){
    mobileMenu.classList.toggle('active');
    // closeMobileMenu.classList.toggle('active');
}

btnMobile.addEventListener('click', toggleMobileMenu);
// closeMobileMenu.addEventListener('click', toggleMobileMenu);