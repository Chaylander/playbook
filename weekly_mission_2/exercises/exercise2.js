const explorers = [
    {
      name: "Explorer 1",
      exercises_completed: 10,
      rate: 99,
      city: "CDMX",
      stack: [
        "js",
        "c#"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: true,
          exercisesFinished: true
        }
      }
    },
    {
      name: "Explorer 2",
      exercises_completed: 9,
      city: "Veracruz",
      rate: 50,
      stack: [
        "js"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: false
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    },
    {
      name: "Explorer 3",
      exercises_completed: 3,
      city: "Sonora",
      rate: 100,
      stack: [
        "elixir"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    }
]

//1. Imprime el nombre (propiedad name) de cada explorer en la lista, usa FOR EACH
console.log("ejercicio2.1")
explorers.forEach((explorer) => {
    console.log(explorer.name)
})

//2. Imprime el stack de cada explorer, usa FOR EACH
console.log("ejercicio2.2")
explorers.forEach((explorer) => {
    console.log(explorer.stack)
})

//3. Crea una nueva lista con las listas de stacks de cada explorer, usa MAP
console.log("ejercicio2.3")
explorersStacks = explorers.map((explorer) => {
    return explorer.stack
})
console.log("Explorers Stacks: " + explorersStacks)

//4. Obtén la lista de explorers que tengan en su stack "js", usa FILTER 
//(para validar un elemento en un lista se usa el método includes)
console.log("ejercicio2.4")
const explorersWithJs = explorers.filter((my_explorer_in_list) => my_explorer_in_list.stack.includes("js"))
console.log(explorersWithJs)

//5. Busca el primer explorer que sea de la CDMX, usa FIND
console.log("ejercicio2.5")
const explorerFromCdmx = explorers.find((my_explorer_in_list) => my_explorer_in_list.city == ("CDMX"))
console.log(explorerFromCdmx)

//6. Obtén la suma de todos los exercises_completed, usa REDUCE
console.log("ejercicio2.6")
const all_exercises_completed = explorers.reduce((acc, my_explorer_in_list) => acc + my_explorer_in_list.exercises_completed, 0)
console.log(all_exercises_completed)

//7. Obtén la validación si al menos uno de los explorers tiene la propiedad 
//exercisesFinished en frontend como true, usa SOME
console.log("ejercicio2.7")
const exercisesFinishedFronted = explorers.some((item) => item.missions.frontend == true)
console.log(exercisesFinishedFronted)

//8. Obtén la validación si todos los explorers tienen la propiedad isFinished 
//del onboarding como true. Usa EVERY.
console.log("ejercicio2.8")
const everythingFinished = explorers.every((item) => item.missions.onboarding.isFinished == true)
console.log(everythingFinished)