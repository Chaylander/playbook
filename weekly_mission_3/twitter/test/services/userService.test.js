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

    test("Requerimiento 3: Update username", () => {
        const user = UserService.create(1, "Chaylander", "Roberto Jauregui")
        UserService.updateUserUsername(user, "chay")
        expect(user.username).toBe("chay");
    })

    test("Requerimiento 4: Given a list of users give me the list of usernames", () => {
        const user1 = UserService.create(1, "Chaylander", "Roberto Jauregui")
        const user2 = UserService.create(2, "Chaylander2", "Roberto Jauregui2")
        const user3 = UserService.create(3, "Chaylander3", "Roberto Jauregui3")
        const usernames = UserService.getAllUsernames([user1, user2, user3])
        expect(usernames).toContain("Chaylander");
        expect(usernames).toContain("Chaylander2");
        expect(usernames).toContain("Chaylander3");
    })

})