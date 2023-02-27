export default function dateFuncionamento(){
    const funcionamento = document.querySelector('[data-semana]')
    const diasSemana = funcionamento.dataset.semana.split(',').map((dia) => +dia);
    const horario = funcionamento.dataset.horario.split(',').map(Number);
    
    const agora = new Date();
    const diaAgora = agora.getDay();
    const horarioAgora = agora.getHours();
    
    const diaAberto = diasSemana.indexOf(diaAgora) !== -1;
    const horarioAberto = horarioAgora >= horario[0] && horarioAgora < horario[1];
    
    if(diaAberto){
        if(horarioAberto){
            funcionamento.classList.add('aberto');
        }
        else{
            funcionamento.classList.add('fechado')
        }
    }
    
    
}