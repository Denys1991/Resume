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



const menuLinks = document.querySelectorAll('a[data-goto]');
menuLinks.forEach(menuLink=>{
    menuLink.addEventListener('click', menuLinkClick);
})

function menuLinkClick(param) {
    console.log(param)
    const menulink = param.target;
    console.log(menulink)
    if(menulink.dataset.goto && document.querySelector(menulink.dataset.goto)){
        const gotoBlock = document.querySelector(menulink.dataset.goto);
        const gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY - document.querySelector('header').offsetHeight;
        if(menuSidebar.classList.contains('_active')){
            menuSidebar.classList.remove('_active')
            body.classList.remove('lock')
            overlay.classList.remove('activate')
        };
        window.scrollTo({
            top:gotoBlockValue,
            behavior: "smooth"
        });
        param.preventDefault();
    }
}

let switchMode = document.getElementById('light_night');
switchMode.onclick = function(){
    let theme = document.getElementById('theme');
    if (theme.getAttribute('href') == 'assets/css/style.min.css'){
        theme.href = 'assets/css/dark_theme.min.css'
    } else {
        theme.href = 'assets/css/style.min.css'
    }
}