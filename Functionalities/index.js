import { closemenu, hamburger, menu } from './naming.js'
hamburger.addEventListener('click', () => {
    menu.style.top = "0%";
})
closemenu.addEventListener('click', () => {
    menu.style.top = "-150%";
})