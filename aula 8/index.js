let nome = prompt('me diga seu nome')
let sobrenome = prompt('me diga seu sobrenome')
let idade = prompt('quantos anos tem?')
let peso = prompt('quanto você pesa?')
let altura = prompt('qual é sua altura')

let imc = (peso / (altura * altura))
anoDeNascimento = 2024 - idade

var info = nome + " " + sobrenome + " tem " + idade + " anos, pesa " + peso + " kg, tem " + altura + " de altura, seu IMC é de " + imc.toFixed(2) + " e nasceu em " + anoDeNascimento + ".";

console.log(info)
document.getElementById('info').innerHTML = info