class Pessoa {
    public nome: String;
    public idade: Number;
    public cor: String;
    public altura: Number;
    public genero: String;
    public comFav: String;
    
    constructor(nome, idade,cor, altura, genero, comFav){
        this.nome = nome;
        this.idade = idade;
        this.cor = cor;
        this.altura = altura
        this.genero = genero;
        this.comFav = comFav;
    }

    acordar(){
        console.log("Som de alarme tocando e bocejo")
    }
    comer(){
        console.log("Hora do café da manhã")

    }
    banho(){
        console.log("Um banho bem gelado para acordade de verdade")

    }
    arrumar(){
        console.log("Hora de vestir se arrumar e vestir a farda")

    }
    sair(){
        console.log("Saindo de casa e trancando tudo")

    }
    trabalhar(){
        console.log("Chegou no trabalho, hora de colocar a mão na massa")

    }
}

const pessoa1 = new Pessoa('Natan', 25, 'Branco', 1.80, 'Masculino', 'Cuscuz')

pessoa1.acordar()

