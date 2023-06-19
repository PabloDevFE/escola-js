let distancy = prompt("Qual a distância em anos-luz?")
let optionConvert = prompt("Escolha uma opção - Digite apenas o número: \n1) Parsec (pc) \n2) Unidade astronômica (AU) \n3)Quilômetros (km)")
finalConvert = 0
selected = undefined

switch (Number(optionConvert)) {
    case 1: 
        optionConvert = "Parsec"
        finalConvert = (distancy * 0.306601)
        selected = "pc"
        break
    case 2:
        optionConvert = "Unidade Astronomica"
        finalConvert = (distancy * 63241.1)
        selected = "AU"
        break
    case 3: optionConvert
        optionConvert = "Quilômetros"
        finalConvert = (distancy * 9.5 * 10 ** 12)
        selected = "km"
        break
    default:
        alert("Distância em Anos-Luz: " + distancy + "\nUnidade não identificada: Conversão mal sucedida")
}

alert(`Distância em Anos-luz: ${distancy} \nDistância em ${optionConvert}: ${finalConvert}${selected}`)
