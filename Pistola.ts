import Arma from "./Arma";

export default class Pistola extends Arma{

    private _calibre: number;

    constructor(nome: string, municao: number, letalidade:number, calibre:number){
        super(nome, municao, letalidade);

        this._calibre = calibre;
        
    }


}