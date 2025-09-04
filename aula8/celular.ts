class Celular {
    public fabricante: String
    public modelo: String
    public sisOp: String
    public bateria: Number
    public apps: String
    public armazenamento: Number
    

    constructor(fabricante, modelo, sisOp, bateria, apps, armazenamento){
        this.fabricante = fabricante;
        this.modelo = modelo;
        this.sisOp = sisOp;
        this.bateria = bateria;
        this.apps = apps;
        this.armazenamento = armazenamento;
    }

    ligar(){
        console.log("Bem-vindo de volta!")

    }
    desligar(){
        console.log("Até logo!")

    }
    carregar (){
        console.log("Seu celular está carregando, aguarde...")

    }
    desbloquear(){
        console.log("Senha inserida com sucesso!")

    }
    contatos(){
        console.log("Escolha um dos contatos e a ação que fará")

    }
    chamada(){
        console.log("Realizando chamada ao número escolhido")

    }


}
const celular1 = new Celular('Samsung', 'M54', 'Android', '100%', 'PlayStore', '256gb')