import prompt from "prompt-sync";
import Pistola from "./Pistola";
import Jogador from "./Jogador";
import Metralhadora from "./Metralhadora";
import Partida from "./Partida";

let tec = prompt();
let opcao = -1;


let nJog = tec('Informe o nome do jogador ');
let vJog = Math.floor(Math.random() * 101) + 1; // Você terá sempre de 1 a 100 de vida.
console.log('Você tem ' + vJog + ' de vida!');
let jogador = new Jogador(nJog, vJog);

let nArm = tec('Qual arma? ');
let mun = Math.floor(Math.random() * 201) + 1; // Você terá sempre de 1 a 200 de munição.
console.log('Você tem ' + mun + ' de Munição!');
let letal = Math.floor(Math.random() * 6) + 1; // Você terá letalidade de 1 a 5.
console.log('A letalidade de ' + nArm + ' é de ' + letal);

let nTip = 0;

do{
    nTip = Number(tec('Escolha seu tipo de arma: 1 - Metralhadora 2 - Pistola  '));

}while(nTip !== 1 && nTip !== 2)

let metralhadora = null;
let pistola = null;

if(nTip === 1){
    let tSec = Math.floor(Math.random() * 11) + 1; 
    console.log('A ' + nArm + ' dispara ' + tSec + ' por segundo.');
    let pCarAut = Number(tec('Possui carregamento automático? 1 - SIM ')) === 1 ? true : false;
    let pEscopo = Number(tec('Possui escopo? 1 - SIM ')) === 1 ? true : false;

    metralhadora = new Metralhadora(nArm, mun, letal, tSec, pCarAut, pEscopo);
    pistola = new Pistola('',0,0,0);
}else{
    let calibre = Number(tec('Qual calibre? '));
    pistola = new Pistola(nArm, mun, letal, calibre);
    metralhadora = new Metralhadora('', 0, 0, 0, false, false);
}

let partida = new Partida(jogador, metralhadora, pistola);



while(opcao != 0){
    console.log('-----JOGO SEM NOME DE RPG-----');
    console.log('1 - Dar um tiro');
    console.log('2 - Tomar um tiro');
    console.log('0 - Sair\n');

    opcao = parseInt(tec('Informe uma opção: '));

    switch(opcao){
        case 1: console.log(partida.darTiro());
            break;
        case 2: console.log(partida.tomarTiro());
            break;
    }
    

}