export default function modal(){

    const botaoAbrir = document.querySelector("[data-modal='abrir']");
    const botaoFechar = document.querySelector("[data-modal='fechar']");
    const modalContainer = document.querySelector("[data-modal='container']");
    
    if(botaoAbrir && botaoFechar && modalContainer){
        function toggleModal(event){
            event.preventDefault();
            modalContainer.classList.toggle('ativo');
        }
        
        function cliqueForaModal(event){
            if(event.target === modalContainer){
                toggleModal(event);
            }
        }
        
        botaoAbrir.addEventListener('click', toggleModal);
        botaoFechar.addEventListener('click', toggleModal);
        modalContainer.addEventListener('click', cliqueForaModal);
    }
    
}