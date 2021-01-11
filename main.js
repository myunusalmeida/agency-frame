// MENU TOGGLE
function toggleMenu() {
    var menu = document.querySelector('.navbar-menu')
    menu.classList.toggle('active')
}

// HIDE MENU ON CLICK LINK
function linkMenu() {
    var menu = document.querySelector('.navbar-menu')
    menu.classList.remove('active')
}