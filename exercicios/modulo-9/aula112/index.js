function slowDown(velocity, printer) {
    let deceleration = 20
    while (velocity > 0) {
        printer(velocity)
        velocity -= deceleration
    }
    alert("Nave parada. As comportas podem ser abertas.")
}

let spaceshipVelocity = 5500000
slowDown(spaceshipVelocity, function(velocity){
    console.log("Velocidade atua: " + velocity)
})