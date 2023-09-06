let spaceship = {
  name: prompt("Name of the spaceship:"),
  type: prompt("Type of the spaceship:"),
  maxVelocity: prompt("Max velocity this spaceship: \n(in Km/s)"),
  velocity: 0,
  accelerate: function () {
    let acceleration = prompt("How much do you want to accelerate?");
    this.velocity += Number(acceleration);
    if (this.velocity > this.maxVelocity) {
      alert(`ERROR! MAX VELOCITY EXCEEDED
    \nName of the spaceship: ${spaceship.name}
    \nType of the spaceship: ${spaceship.type}
    \nMax Velocity of the spaceship: ${spaceship.maxVelocity}km/s
    \nVecolity: ${spaceship.velocity}km/s`);
    }
  },
};

let escolha = prompt(
  "Stopt the spaceshp or accelerate? \n1- Acellerate \n2- Stop"
);

while (escolha == 1) {
  spaceship.accelerate();
  escolha = prompt(
    "Stopt the spaceshp or accelerate? \n1- Acellerate \n2- Stop"
  );
}

if (escolha == 2) {
  alert(`Name of the spaceship: ${spaceship.name}
\nType of the spaceship: ${spaceship.type}
\nMax Velocity of the spaceship: ${spaceship.maxVelocity}km/s
\nVecolity: ${spaceship.velocity}km/s`);
} else {
  alert("Insira um valor válido");
}
