const name = prompt("Qual é o seu nome, piloto?");
let initialVelocity = 0;
let velocity = prompt(
  `A velocidade atual é ${initialVelocity}, a que velocidade você deseja acelerar a partir de agora?`
);
let confirmationVelocity = confirm(
  `Por favor, confirme se a nova velocidade é realmente ${velocity}`
);

if (confirmationVelocity == false) {
    velocity = initialVelocity
}


if (velocity <= 0) {
  alert("A nave está parada");
} else if (velocity < 40) {
  alert("Você está muito devagar, podemos aumentar mais");
} else if (velocity >= 40 && velocity < 80) {
  alert("Parece uma boa velocidade para manter");
} else if (velocity >= 80 && velocity < 100) {
  alert("Velocidade alta, considere diminuir");
} else if (velocity >= 100) {
  alert("Velocidade perigosa, forçando controle automático");
}

alert(`Nome do piloto: ${name} \nVelocidade atual: ${velocity}`);
