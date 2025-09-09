import { Pessoa } from "./aula10";

export class pessoaFisica extends Pessoa{
    public cpf : Number;
    
    constructor (nome, idade, cpf){
        super(nome, idade)
        this.cpf = cpf
    }
}