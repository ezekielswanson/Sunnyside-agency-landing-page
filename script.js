
/*GLOBAL VARIABLES */

const menuBtn = document.getElementById('nav-toggle');

function openMobileMenu () {
    menuBtn.classList.toggle('hidden');
}

menuBtn.addEventListener('click', openMobileMenu)