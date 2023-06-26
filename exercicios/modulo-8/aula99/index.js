let spaceshipName = prompt("Qual é o nome da espaçonave?")
let spaceshipNewName = ""

maxQuant = spaceshipName.length

for (let i = Number(maxQuant-1); i >= 0; i--) {
    if (spaceshipName[i] != "e") {
        spaceshipNewName += spaceshipName[i] 
    } else {
        alert("[ERR0R] CARACTERE SENSÍVEL: E \nINVERSÃO MÁ SUCEDIDA")
        break
    }
}

alert(`Nome original da nave: ${spaceshipName} \nNome após a inversão: ${spaceshipNewName}`)
console.log(spaceshipNewName)
