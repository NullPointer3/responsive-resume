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

/*============= Dark/Light Theme =========*/
const themeBtn = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bx-sun'

//previously selected topic 
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// we obtain the current theme that the interface has by validatin the dark theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeBtn.classList.contains(iconTheme) ? 'bx-moon' : 'bx-sun'

// We validate if the user previously chose a theme
if(selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeBtn.classList[selectedIcon === 'bx-moon' ? 'add' : 'remove'](iconTheme)

}

// activate or deactivate the theme manually with the button
themeBtn.addEventListener('click', () => {
    // add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeBtn.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})