const UserService = require('./../../app/services/UserService');

describe("Test para userservice", () => {
    test("Requerimiento 1: Creacion de user usando userService", () => {

        const user = UserService.create(1, "Chaylander", "Roberto Jauregui")
        expect(user.id).toBe(1);
        expect(user.username).toBe("Chaylander");
        expect(user.name).toBe("Roberto Jauregui");
        expect(user.bio).not.toBeUndefined();
    })

})