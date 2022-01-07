
/* Mobile Menu Variables */

const mobileIconBtn = document.querySelector('.hamburger-menu-icon');
const mobileMenuDisplay = document.querySelector('.mobile-menu-container');

/* This function opens and close the mobile menu */


function navToggle () {
    if(mobileMenuDisplay.style.display === 'none' ) {
        mobileMenuDisplay.style.display = 'block';
    }

    else {
        mobileMenuDisplay.style.display = 'none';
    }
};



mobileIconBtn.addEventListener('click', navToggle);