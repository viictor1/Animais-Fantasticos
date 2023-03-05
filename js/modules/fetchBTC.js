export default function fetchBTC(){

}

async function fetchDados(){
    try{
        const json = await (await fetch('https://blockchain.info/ticker')).json();
        setValor(json.BRL.sell);
    }
    catch(erro){
        console.log(Error(erro));
    }
    
}

function setValor(valor){
    const span = document.querySelector('.btc-preco');
    span.innerText = (100 / valor).toFixed(4);
}

fetchDados();