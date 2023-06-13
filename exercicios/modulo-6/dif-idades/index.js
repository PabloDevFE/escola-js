let nameOld = prompt("Qual o nome da pessoa mais velha?")
let ageOld = prompt("Qual a idade da pessoa mais velha?")

let nameNew = prompt("Qual o nome da pessoa mais nova?")
let ageNew = prompt("Qual a idade da pessoa mais nova?")

let subtraction = Number(ageOld) - Number(ageNew)
alert(
`Pessoa mais velha: \nNome: ${nameOld} Idade: ${ageOld}\n
Pessoa mais nova: \nNome: ${nameNew} Idade: ${ageNew}\n
A diferença entre suas idades é: ${subtraction}`
)