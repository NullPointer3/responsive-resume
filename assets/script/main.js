/*============Show Menu ==============*/

showMenu('nav-toggle', 'nav-menu')
function showMenu(toggleId, navId) {
    const nav = document.getElementById(navId)
    const toggle = document.getElementById(toggleId)

    if(nav && toggle) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show__menu')
        })
    }
}

/**========== Remove menu Mobile=======*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')

    navMenu.classList.remove('show__menu')
}
navLink.forEach(link =>link.addEventListener('click', linkAction))