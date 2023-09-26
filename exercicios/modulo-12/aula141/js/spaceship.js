class Spaceship {
    static get DECELERATION() {
        return 0.17
    }
    constructor(name, crewQuantity) {
        this.name = name
        this.crewQuantity = crewQuantity
        this.currentVelocity = 0
    }

    speedUp(aceleracao) {
        this.currentVelocity += (aceleracao * (1 - Spaceship.DECELERATION))
    }
}