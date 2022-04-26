const User = require('./../../app/models/User');

describe("Test para user", () => {
    test("Requerimiento 1: Creacion de user", () => {
        const user = new User(1, "chaylander", "Roberto Jauregui", "Bio");
        expect(user.id).toBe(1);
        expect(user.username).toBe("chaylander");
        expect(user.name).toBe("Roberto Jauregui");
        expect(user.bio).toBe("Bio");
       
    })
    
    test("Requerimiento 2: Fechas en atributos de User", () => {
        const user = new User (1, "chaylander", "Roberto Jauregui", "Bio");
        expect(user.dateCreated).not.toBeUndefined();//No debe ser indefinido
        expect(user.lastUpdated).not.toBeUndefined();//No debe ser indefinido

    })

    test("Requerimiento 3: Agregando los getters", () => {
        const user = new User (1, "chaylander", "Roberto Jauregui", "Bio");        
        expect(user.getUsername()).toBe("chaylander");
        expect(user.getBio()).toBe("Bio");
        expect(user.getName()).toBe("Roberto Jauregui");
        expect(user.getDateCreated()).not.toBeUndefined();
        expect(user.getLastUpdated()).not.toBeUndefined();
    })

})