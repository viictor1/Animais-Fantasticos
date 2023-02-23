import outsideClick from "./outsideClick.js";

export default function dropDownMenu(){
    const dropMenu = document.querySelectorAll('[data-dropDown]');

    dropMenu.forEach((item) => {
        ['touchstart', 'click'].forEach((userEvent) => {
            item.addEventListener(userEvent, handleClick);
        })
    });


    function handleClick(event){
        event.preventDefault(); 
        this.classList.add('ativo');

        outsideClick(this,  ['touchstart', 'click'], () => {
            this.classList.remove('ativo');
        });
    }

}

