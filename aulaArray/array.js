//Exercício 1: Criando e Acessando
console.log("\n-----------------------Exercício 1-------------")
let timesDeFutebol = ["Santa Cruz", "Náutico", "Sport", "Retrô"]
console.log("Primeiro time:", timesDeFutebol [0])
console.log("Último time:", timesDeFutebol[timesDeFutebol.length -1])

//Exercício 2: Adicionando Elementos
console.log("\n-----------------------Exercício 2-------------")
let minhaListaDeTarefas = []

minhaListaDeTarefas.push("Comprar pão")
minhaListaDeTarefas.push("Estudar JavaScript")
minhaListaDeTarefas.push("Fazer exercícios")
console.log(`Minha lista de tarefas: ${minhaListaDeTarefas}`)

//Exercício 3: Laço de Repetição (for)
console.log("\n-----------------------Exercício 3-------------")
let animais = ["Cachorro", "Gato", "Macaco", "Girafa", "Papagaio"]
for (let i = 0; i < animais.length; i++) {
    console.log(`O animal na posição ${i} é ${animais[i]}`)
}

//Exercício 4: Laço com Condição (for)
console.log("\n-----------------------Exercício 4-------------")
let numeros = ["10", "23", "13", "74", "55", "16", "71", "87", "94", "14"]
for (let i = 0; i <numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
        console.log(`Número par: ${numeros[i]}`)
    }
}

//Exercício 5: Desafio de Lógia (while)
console.log("\n-----------------------Exercício 5-------------")
let frutas = ["maça", "banana", "uva", "morango", "abacaxi"]
let i = 0 
while (i <frutas.length) {
    console.log(`Fruta: ${frutas[i]} `)
    i++
}
console.log("Fim do Desafio!")

//Exercício 6: Construção de Tabuada
console.log("\n-----------------------Exercício 6-------------")
let tabuada = ["2", "3", "4", "5", "6", "7", "8", "9"]

for (let n = 2; n <= 9; n++){
    let linha = '';
for (let x = 1; x <= 10; x++) {
    linha += `${n} x ${x} = ${n*x} `;
}
console.log(linha)
}

