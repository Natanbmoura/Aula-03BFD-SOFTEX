let readline = require('readline-sync')

let anoAtual = 2025
 let nome = readline.question("Qual é o seu nome?")
console.log(`Olá, ${nome}!`)
let ano = readline.question("Qual o ano do seu nascimento?")
console.log(`Ao finalizar este ano, você terá ${anoAtual - ano} anos!`)
let idade = anoAtual - ano
 if(idade => 18){
    console.log("Você é maior de idade, pode ser preso.")
 }else{
    console.log("Você ainda é menor de idade, não pode ser preso.")
 }

 




