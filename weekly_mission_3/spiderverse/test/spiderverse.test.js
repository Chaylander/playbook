//importamos la clase para el test
const Spiderman = require('./../app/spiderman');

describe("Unit test for spiderman class", () => {
    test('1) Create a spiderman object', () => {
        const AndrewGarfield = new Spiderman("Spiderman sony",31,"Andrew Garfield",2,"Sony");
        //Validamos que el codigo funcione de la forma esperada
        expect(AndrewGarfield.name).toBe("Spiderman sony")
        expect(AndrewGarfield.age).toBe(31)
        expect(AndrewGarfield.actor).toBe("Andrew Garfield")
        expect(AndrewGarfield.movies).toBe(2)
        expect(AndrewGarfield.studio).toBe("Sony")

    });
    test('2) Use the method getinfo()', () => {
        const TomHolland = new Spiderman("Spiderman marvel",25,"Tom Holland",5,"marvel")
        expect(TomHolland.getInfo()).toBe("Hey, I'm Tom Holland from marvel studio")
    });
})