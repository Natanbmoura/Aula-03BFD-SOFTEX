import { Pessoa } from "./aula10";

export class pessoaJuridica extends Pessoa{
    public cnpj : Number
    constructor (nome, idade, cnpj){
        super(nome, idade)
        this.cnpj = cnpj
    
    }
}