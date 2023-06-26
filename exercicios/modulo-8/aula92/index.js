let spaceshipName = prompt("Qual o nome da nave?")
let question = prompt("Deseja entrar em dobra espacial? \n1- Sim \n2- Não")
let warpCount = 0

while (question == 1) {
    warpCount ++
    question = prompt("Deseja entrar em dobra espacial novamente? \n1- Sim \n2- Não")
}

alert(`Nome da nave: ${spaceshipName} \nNúmero de dobras: ${warpCount}`)
