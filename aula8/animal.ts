class Cachorro {
    public peso: String
    public raca: String
    public nome: String
    public idade: Number
    public brinqFav: String
    public altura: Number
    constructor(peso, raca, nome, idade, brinqFav, altura){
        this.peso = peso;
        this.raca = raca;
        this.nome = nome;
        this.idade = idade;
        this.brinqFav = brinqFav;
        this.altura = altura; 
    }
    dormir(){
        console.log("O cachorro está dormindo")

    }
    comer(){
        console.log("O cachorro está comendo ração")

    }
    brincar(){
        console.log("O cachorro está brincando")
       
    }
    passear(){ 
        console.log("O cachorro está sendo levado para passear")
       
    }
    agua(){
        console.log("O cachorro está bebendo água")
        
    }
}

const cachoror1 = new Cachorro('50kg', 'Pr. Alemão', 'Hulk', '2 anos', 'Osso de pelúcia', '1,60m')