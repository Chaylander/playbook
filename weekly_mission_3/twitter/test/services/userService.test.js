const UserService = require('./../../app/services/UserService');

describe("Test para userservice", () => {
    test("Requerimiento 1: Creacion de user usando userService", () => {

        const user = UserService.create(1, "Chaylander", "Roberto Jauregui")
        expect(user.id).toBe(1);
        expect(user.username).toBe("Chaylander");
        expect(user.name).toBe("Roberto Jauregui");
        expect(user.bio).not.toBeUndefined();
    })

    test("Requerimiento 2: Get all user data in a list" ,() => {
        
        const user = UserService.create(1, "Chaylander", "Roberto Jauregui")
        const userInfoInList = UserService.getInfo(user)
        expect(userInfoInList[0]).toBe(1);
        expect(userInfoInList[1]).toBe("Chaylander");
        expect(userInfoInList[2]).toBe("Roberto Jauregui");
        expect(userInfoInList[3]).not.toBeUndefined();
    })

})