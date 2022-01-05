
/* Mobile Menu Variables */

const mobileBtnOpen = document.getElementById("mobile-menu-icon");
const mobileBtnClose = document.getElementById("hidden");


/* */

function mobileBtnToggle () {
    mobileBtn.classList("open");
    mobileBtnClose.classList("hidden");
}



mobileBtnOpen.addEventListener('click', mobileBtnToggle)

