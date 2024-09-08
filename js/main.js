// Navbar start

// toggle
const navbarNav = document.querySelector('.navbar-nav');
const navbar = document.querySelector('.navbar');

// ketika hamburger-menu di klik
document.querySelector('#hamburger-menu').onclick = () => {
    navbarNav.classList.toggle('active');
}

// klik di luar sidebar
const hamburger = document.querySelector('#hamburger-menu');
document.addEventListener('click', function(e){
    if ( !hamburger.contains(e.target) && !navbar.contains(e.target)){
        navbarNav.classList.remove('active')
    }
})