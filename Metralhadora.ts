import  Arma from "./Arma";

export default class Metralhadora extends Arma{

    private _tirosSegundo: number;
    private _carregamentoAutomatico: boolean;
    private _possuiEscopo: boolean;

    constructor(nome: string, municao: number, letalidade:number, tirosSegundo: number, carregamentoAutomatico: boolean, possuiEscopo: boolean){
        super(nome, municao, letalidade);

        this._tirosSegundo = tirosSegundo;
        this._carregamentoAutomatico = carregamentoAutomatico;
        this._possuiEscopo = possuiEscopo;
    }

    public get tirosSegundo() : number{
        return this._tirosSegundo;
    }

    public get nome() : String{
        return this._nome;
    }

}