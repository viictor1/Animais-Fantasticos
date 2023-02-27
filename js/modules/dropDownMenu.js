import outsideClick from "./outsideClick.js";

export default function dropDownMenu(){
    const dropBtn = document.querySelectorAll('[data-dropDown]');
    const dropMenu = document.querySelector('.dropDownMenu');

    dropBtn.forEach((item) => {
        ['touchstart', 'click'].forEach((userEvent) => {
            item.addEventListener(userEvent, handleClick);
        })
    });


    function handleClick(event){
        event.preventDefault(); 
        dropMenu.classList.add('ativo');
        outsideClick(dropMenu,  ['touchstart', 'click'], () => {
            dropMenu.classList.remove('ativo');
        });
    }

}

