import Metralhadora from "./Metralhadora";
import Pistola from "./Pistola";
import Jogador from "./Jogador";

export default class Partida{

    private _jogador: Jogador;
    private _metralhadora: Metralhadora;
    private _pistola: Pistola;

    constructor(jogador: Jogador, metralhadora: Metralhadora, pistola:Pistola){
        this._jogador = jogador;
        this._metralhadora = metralhadora;
        this._pistola = pistola;

    }

    public tomarTiro(): string{
        if(this._metralhadora.nome !== ''){ //serve para saber qual das duas classes possui instancia.
            this._jogador.vida -= this._metralhadora.letalidade * this._metralhadora.tirosSegundo; // a cada tiro ele se danifica de acordo com a letalidade * tiros por segundo
        }else{
            this._jogador.vida -= this._pistola.letalidade;
        }
        
        if(this._jogador.vida <= 0){
            return "BAH, EU MORRI!!!";
        }else{
            return "BAH, TOMEI UM TIRO E FIQUEI COM " + this._jogador.vida + " de vida :(";
        }
    }

    public darTiro(): string{
        if(this._jogador.vida > 0){
            if(this._metralhadora.nome !== ''){
                this._metralhadora.decrementaMunicao(this._metralhadora.tirosSegundo);
                if(this._metralhadora.municao > 0){
                    return "MINHA MUNIÇÃO ESTÁ EM " + this._metralhadora.municao;
                }else{
                    return "ACABOU MINHA MUNIÇÃO...";
                }
            }else{
                this._pistola.decrementaMunicao(1);
                if(this._pistola.municao > 0){
                    return "MINHA MUNIÇÃO ESTÁ EM " + this._pistola.municao;
                }else{
                    return "ACABOU MINHA MUNIÇÃO...";
                }
            }
            

        }else{
            return "JOGADOR MORTO NÃO DÁ TIRO...";
        }
    }

}
