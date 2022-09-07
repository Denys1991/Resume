//------------------------------------------------------------------------------------------------------------------burger
const iconMenuSide = document.querySelector('.menu_icon-main');
const iconMenu = document.querySelector('.menu_icon-sidebar');
const menuSidebar = document.querySelector('.sidebar');
const body = document.querySelector('body');
const overlay = document.querySelector('.overlay')
iconMenuSide.addEventListener('click', function () {
    menuSidebar.classList.add('_active');
    body.classList.add('lock');
    overlay.classList.add('activate')
})
iconMenu.addEventListener('click', function () {
    menuSidebar.classList.remove('_active')
    body.classList.remove('lock')
    overlay.classList.remove('activate')
})
overlay.addEventListener('click', function(){
    menuSidebar.classList.remove('_active')
    body.classList.remove('lock')
    overlay.classList.remove('activate')
})