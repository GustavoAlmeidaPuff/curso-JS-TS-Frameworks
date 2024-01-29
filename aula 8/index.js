let nome = prompt('me diga seu nome')
let sobrenome = prompt('me diga seu sobrenome')
let idade = prompt('quantos anos tem?')
let peso = prompt('quanto você pesa?')
let altura = prompt('qual é sua altura')

let imc = (peso / (altura * altura))
anoDeNascimento = 2024 - idade

console.log (nome, sobrenome, ' tem ', idade, ' pesa ', peso, ' tem ', altura, ' de altura, seu IMC é de ', imc,' e nasceu em ', anoDeNascimento)