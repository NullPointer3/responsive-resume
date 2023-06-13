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

/*=========== Scroll sections active link ====*/
const sections = document.querySelectorAll('section[id')

function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50
        const sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }
        else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }

    })
}
window.addEventListener('scroll', scrollActive)


/*=================== Show Scroll Top ================*/
function scrollTop() {
    const scrollTop = document.getElementById('scroll-top')
    // when the scroll is higher than 200vh, add the show-scroll class
    if(this.scrollY >= 350) {
        scrollTop.classList.add('show-scroll')
    }
    else {
        scrollTop.classList.remove('show-scroll')
    }
}
window.addEventListener('scroll', scrollTop)