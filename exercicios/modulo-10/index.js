const hitchedSpaceships = [
    ["Fenix", 8, true],
    ["Golias", 10, true],
    ["Helmet", 5, false],
    ["Elemental", 3, true],
    ["Darwin", 15, false]
]

let crewGreaterThan9 = hitchedSpaceships.filter(spaceship => {
    return spaceship[1] > 9
}).map(spaceship => {
    return spaceship[0]
})

console.log(crewGreaterThan9)

let ongoingHitchPlataform = hitchedSpaceships.findIndex(spaceship => {
    return spaceship[2] == false
})

console.log(ongoingHitchPlataform)

let highlightedSpaceships = hitchedSpaceships.map(spaceship => {
    return spaceship[0].toUpperCase()
})

let message = `Espaçonaves com mais de 9 tripulantes ${crewGreaterThan9.join(", ")} \nPlataforma com processo de engate: ${ongoingHitchPlataform + 1} \nEspaçonaves destacadas: ${highlightedSpaceships.join(", ")}`

alert(message)