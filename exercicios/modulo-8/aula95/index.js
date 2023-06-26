let nameSpaceship = prompt("Qual o nome da espaçonave?")
let newNameSpaceship = ""
let subst = prompt("Qual caractere você deseja substituir?")
let newSubst = prompt("E qual vai ser a nova letra?")

for (c = 0; c < nameSpaceship.length; c++) {
    if (nameSpaceship[c] == subst) {
        newNameSpaceship += newSubst
    } else {
        newNameSpaceship += nameSpaceship[c]
    }
}
alert(`O novo nome é ${newNameSpaceship}`)