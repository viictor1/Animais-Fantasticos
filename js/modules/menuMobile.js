import outsideClick from "./outsideClick.js";

export default function menuMobile(){
    const buttonMenu = document.querySelector('[data-menu="button"]');
    const listMenu = document.querySelector('[data-menu="list"]');
    const eventos = ['click', 'touchstart'];

    function openMenu(event){
        event.preventDefault();
        buttonMenu.classList.add('ativo');
        listMenu.classList.add('ativo');

        outsideClick(listMenu, eventos, () => {
            buttonMenu.classList.remove('ativo');
            listMenu.classList.remove('ativo');
        })
    }
    
    eventos.forEach(userEvent => {
        buttonMenu.addEventListener(userEvent, openMenu);
    })
    
}