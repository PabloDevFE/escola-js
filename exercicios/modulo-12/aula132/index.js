//uma estação espacial que tem uma lista de naves engatada
//cada nave possui nome, quantidade de tripulantes, se está ou não engatada, se a porta de entrada está aberta ou não

//um menu deve ser exibido com as opções:
//1 - realizar engate = deve ser possivel cadastrar uma nave com nome e número de tripulantes. Após o cadastro a nave pode ser engatada. quando for engatada, suas portas também são abertas
//2 - imprimir naves = a lista de naves deve ser impressa
//3 - sair do programa

let spacialStation = [];
let menuChoosen;
let newSpaceship;

class Spaceship {
  constructor(name, crewQuantity, isEngaged) {
    this.name = name;
    this.crewQuantity = crewQuantity;
    this.isEngaged = isEngaged;
    this.isOpen = isEngaged;
  }
}

let showPrompt = function () {
  menuChoosen = prompt(
    "Selecione uma opção: \n1 - Realizer engate \n2 - Imprimir naves \n3 - Sair do programa"
  );
  return menuChoosen;
};

function menuExibition() {
  showPrompt();

  while (menuChoosen == 1) {
    getInformations();
    showPrompt();
  }

  if (menuChoosen == 2) {
    let spaceshipList = [];
    for (z = 0; z < spacialStation.length; z++) {
      spaceshipList.push(spacialStation[z]);
      alert(
        `Nome da nave: ${spaceshipList[z].name}\nTripulação máxima: ${spaceshipList[z].crewQuantity}\nEstá engatada: ${spaceshipList[z].isEngaged}\nEstá com a porta aberta: ${spaceshipList[z].isEngaged}`
      );
    }
    showPrompt();
  }

  while (menuChoosen != 1 && menuChoosen != 2 && menuChoosen != 3) {
    alert("Digite um valor válido!");
    showPrompt();
  }
}

function getInformations() {
  let name = prompt("Qual o nome da nave?");
  let crewQuantity = prompt("Qual a capacidade máxima da tripulação?");
  let isEngaged = confirm(
    "Está engatada? \nOk = Engatada \nCancelar = Não Engatada"
  );
  newSpaceship = new Spaceship(name, crewQuantity, isEngaged);
  spacialStation.push(newSpaceship);
}

menuExibition();
