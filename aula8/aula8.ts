class Carro {
    public marca : String
    public cor : String
    public placa :  String 
    public modelo : String
    public ano : Number

constructor (marca, cor, placa, modelo, ano){
    this.cor = cor;
    this.marca = marca;
    this.placa= placa;
    this.modelo = modelo;
    this.ano = ano;

}


    ligar() {

    }
    desligar(){

    }

}
const carro1 = new Carro('fit', 'rosa', 'pig123', 'porquinho', 2025)
const carro2 = new Carro('bat', 'azul', 'pil123', 'batmove', 1865)



