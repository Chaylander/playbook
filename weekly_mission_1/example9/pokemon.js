class Pokemon {
    constructor(name) {
        // this es una variable para referenciar el valor del contexto local de esta clase
        this.name = name // Estás variables se le conocen como atributos
    }

    sayHello() {
        console.log(`Mi pokémon ${this.name} te saluda`)
    }

    sayMessage(message) {
        console.log(`Mi pokémon ${this.name} dice: ${message}`)
    }
}

module.exports = Pokemon