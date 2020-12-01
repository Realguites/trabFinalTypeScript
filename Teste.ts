import prompt from "prompt-sync";
let tec = prompt();

class Arma{
    constructor(
        public nome: string,
        public municao: number,
        public letalidade: number

    ){}
}
class Jogador{
    constructor(
        public nome: string,
        public idade: number,
        public vida: number
    ){}
}

class Mapa{
    constructor(
        public nome: string,
        public tipo: string
    ){}
}


class Partida{
    constructor(
        public arma: Arma,
        public jogador: Jogador,
        public mapa: Mapa

    ){}
}

let opcao = -1;

    let nJog = tec('Informe o nome do jogador ');
    let iJog = parseInt(tec('Informe a idade do jogador '));
    let horasJogadas = parseInt(tec('Informe a vida do jogador '));
    let jogador = new Jogador(nJog, iJog, horasJogadas);

    let nArm = tec('Qual arma? ');
    let mun = parseInt(tec('Quantidade de munição: '));
    let letal = parseInt(tec('Letalidade '));
    let arma = new Arma(nArm, mun,letal);

    let nMap = tec('Qual mapa? ');
    let tipo = tec('tipo do mapa: ');
    let mapa = new Mapa(nMap, tipo);

    let partida = new Partida(arma, jogador, mapa);

    console.log("\nJOGO INICIADO!\n");

while(opcao != 0){
    console.log('-----JOGO SEM NOME DE RPG-----');
    console.log('1 - Dar um tiro');
    console.log('2 - Tomar um tiro');
    console.log('0 - Sair\n');

    opcao = parseInt(tec('Informe uma opção: '));

    switch(opcao){
        case 1: darTiro();
            break;
        case 2: tomarTiro();
            break;
    }
    

}

function tomarTiro(){
    partida.jogador.vida -= partida.arma.letalidade;
    if(partida.jogador.vida <= 0){
        console.log("BAH, EU MORRI!!!");
    }else{
       console.log("BAH, TOMEI UM TIRO E FIQUEI COM " + partida.jogador.vida + " de vida :("); 
    }
    
}

function darTiro(){
    partida.arma.municao --;
    if(partida.arma.municao > 0){
        console.log("MINHA MUNIÇÃO ESTÁ EM " + partida.arma.municao);
    }else{
        console.log("ACABOU MINHA MUNIÇÃO...");
    }   
    
}


