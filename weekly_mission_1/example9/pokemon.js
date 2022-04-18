class Pokemon {
    constructor(name) {
        this.name = name // Estás variables se le conocen como atributos
    }

    sayHello() {
        console.log(`Mi pokémon ${this.name} te saluda`)
    }

    sayMessage(message) {
        console.log(`Mi pokémon ${this.name} dice: ${message}`)
        console.log("Mi pokémon " + this.name + " dice: " + message) //Otra manera de usar variables dentro de strings
    }
}

module.exports = Pokemon