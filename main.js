const botoes = document.querySelectorAll('.botao');
const textos = document.querySelectorAll('.aba-conteudo');
for (let i = 0; i < botoes.length; i++){
    botoes[i].onclick = function(){
        for (let j = 0; j < botoes.length; j++){
            botoes[j].classList.remove('ativo');
            textos[j].classList.remove('ativo');
        }
        botoes[i].classList.add('ativo');
        textos[i].classList.add('ativo');
    }
}
const contadores = document.querySelectorAll(".contador");
const prazoViagem1 = new Date("2024-10-05T00:00:00");
const prazoViagem2 = new Date("2024-12-05T00:00:00");
const prazoViagem3 = new Date("2024-09-05T00:00:00");
const prazoViagem4 = new Date("2024-08-05T00:00:00");

const prazos = [prazoViagem1, prazoViagem2, prazoViagem3, prazoViagem4];

function calculaTempo(prazoViagem) {
    let tempoAtual = new Date();
    let tempoFinal = prazoViagem - tempoAtual;
    let segundos = Math.floor(tempoFinal / 1000);
    let minutos = Math.floor(segundos / 60);
    let horas = Math.floor(minutos / 60);
    let dias = Math.floor(horas / 24);
    segundos %= 60;
    minutos %= 60;
    horas %= 24; 

    if (tempoFinal > 0){
        return dias + " dias " + horas + " horas " + minutos + " minutos " + segundos + " segundos";      
    }else{
        return "PROMOÇÃO PERDIDA" ;
    }
}

function atualizaContagem(){
    for (let i = 0; i < contadores.length; i++){
        contadores[i].textContent = calculaTempo(prazos[i]);

    }
}

function iniciaContagem(){
    //atualizaContagem();  "como a função será chamada como parâmetro de SetInterval, não há necessidade de chamá-la antes."
    setInterval(atualizaContagem, 1000);
}
iniciaContagem();
