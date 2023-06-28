let spaceshipName = prompt("Qual vai ser o nome da nave?");
let velocity = 0;
let choose = 0;

function verifyVelocity() {
  if (velocity < 0) {
    velocity = 0;
  }
  return;
}

function acceleration() {
    while (choose != 4) {
    choose = prompt(
        "1) Acelerar a nave em 5km/s \n2) Desacelerar a nave em 5km/s \n3) Imprimir velocidade de bordo \n4) sair do programa"
    );

    if (choose == "1") {
      velocity += 5;
    } else if (choose == "2") {
      velocity -= 5;
      verifyVelocity();
    } else if (choose == "3") {
      alert(
        `Nome da nave: ${spaceshipName} \nVelocidade atual: ${velocity}km/s`
      );
    } else if (choose == "4") {
        alert("Encerrando programa de bordo")
    } else {
        alert("Por favor, digite uma opção válida!")
    }
  }
  return choose;
}

acceleration();
