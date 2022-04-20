//Aqui se pueden llamar clases, objetos, funciones, etc.
//pruebas de unidad

const Ajolonauta = require("./../app/ajolonauta");

/* 
describe("Esto es una suite de pruebas", () => {
    test('Caso de prueba 1', () => {
      const result = 1 + 2 
      expect(result).toBe(10);
    });
  })
*/

describe("Pruebas de unidad de Ajolonauta", () => {
    test("Caso de prueba 1: creacion de objeto ajolonauta", () => {
        //Aqui se pone el codigo que se pondra en la aplicacion
        const woopa = new Ajolonauta("woopa");
        //validar el resultado esperado
        expect(woopa.name).toBe("woopa");
    });
});

