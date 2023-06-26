let spaceshipName = prompt("Qual é o nome da espaçonave?")
let spaceshipNewName = ""

maxQuant = spaceshipName.length
console.log(maxQuant)
for (let i = Number(maxQuant); i > spaceshipName; i--) {
    console.log(spaceshipName[i])
}

