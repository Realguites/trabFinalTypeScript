export default class Arma{

    protected _nome: string;
    protected _municao: number;
    protected _letalidade: number;

    constructor(nome: string, municao: number, letalidade:number){
        this._nome = nome;
        this._municao = municao;
        this._letalidade = letalidade;

    }

    public get letalidade(): number{
        return this._letalidade;
    }

    public get municao(): number{
        return this._municao;
    }
    public decrementaMunicao(municao: number): void{
        this._municao -= municao;
    }
    
}