let spaceship = {
  velocity: 0,
  speedUp: function (acceleration) {
    this.velocity += acceleration;
  },
};

function registerSpaceship() {
  spaceship.name = prompt("Qual vai ser o nome da nave?");
  spaceship.type = prompt("Qual vai ser o tipo da nave?");
  spaceship.maxVelocity = Number(prompt("Qual vai ser sua velocidade máxima?"));
}

function accelerate() {
  let acceleration = Number(prompt("Quanto você quer acelerar? (km/s)"));
  spaceship.speedUp(acceleration);
  if (spaceship.velocity > spaceship.maxVelocity) {
    alert(
      `VELOCIDADE MAXIMA ULTRAPASSADA, NAVE EM CHAMAS \nVELOCIDADE DA NAVE: ${spaceship.velocity}km/s \nVELOCIDADE MÁXIMA: ${spaceship.maxVelocity}km/s`
    );
  }
}

function stop() {
  alert(`NOME: ${spaceship.name}
    \nTIPO: ${spaceship.type}
    \nVELOCIDADE DA NAVE: ${spaceship.velocity}
    \nVELOCIDADE MÁXIMA: ${spaceship.maxVelocity}
    `);

  spaceship.velocity = 0;
}

function showMenu() {
  let chosenOption;
  do {
    chosenOption = prompt("Você deseja acelerar (1) ou parar (2)?");
    switch (chosenOption) {
      case "1":
        accelerate();
        break;
      case "2":
        stop();
        break;
      default:
        alert("Escolha umaopção válida");
    }
  } while (chosenOption != "2");
}

registerSpaceship();
showMenu();
console.log(spaceship);
