import animaNumeros from './animaNumeros.js';
export default function fetchAnimais(){
    async function puxarDados(){
        const response = await fetch('../animaisAPI.json');
        const animaisJson = await response.json();
        
        animaisJson.forEach(animal => {
            const divPai = document.querySelector('.numeros-grid');
            divPai.appendChild(criarDiv(animal));
        });
        animaNumeros();
    }
    
    function criarDiv(animal){
        const div = document.createElement('div');
        div.classList.add('numero-animal');
        div.innerHTML = `<h3>${animal.species}</h3> <span data-numero>${animal.number}</span>`;
        return div;
    }
    
    puxarDados();
}