
// Ejemplo 5: Objeto con método que recibe parámetros
const myPet = {
    name: "Ajolonauta Woopa",
    sayHelloToMyPet: function(yourPet){
      console.log(`${this.name} le dice hola a ${yourPet}`)
    }
  }
  
  console.log("Ejemplo 5: Objeto con método que recibe parámetros")
  myPet.sayHelloToMyPet("Mei")