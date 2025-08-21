let readline = require ('readline-sync')

let num1
let num2

let operacao = readline.question("Você quer qual tipo de operação? (adi, sub, mult, div) ")
switch(operacao){
    case "adi":
    num1 = parseFloat(readline.question("Escolha o primeiro numero"))
    num2 = parseFloat(readline.question("Escolha o segundo numero"))
    console.log(`Resultado total: ${num1} + ${num2} = ${num1+num2}`)
    break;
    case "sub":
    num1 = parseFloat(readline.question("Escolha o primeiro numero"))
    num2 = parseFloat(readline.question("Escolha o segundo numero"))
    console.log(`Resultado total: ${num1} - ${num2} = ${num1-num2}`)
    break;
    case "mult":
    num1 = parseFloat(readline.question("Escolha o primeiro numero"))
    num2 = parseFloat(readline.question("Escolha o segundo numero"))
    console.log(`Resultado total: ${num1} x ${num2} = ${num1*num2}`)
    break;
    case "div":
    num1 = parseFloat(readline.question("Escolha o primeiro numero"))
    num2 = parseFloat(readline.question("Escolha o segundo numero"))
    console.log(`Resultado total: ${num1} / ${num2} = ${num1/num2}`)
    break;
    default:
        console.log("Erro! Você não escolheu uma operação válida")
}