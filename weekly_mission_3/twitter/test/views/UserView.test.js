const UserView = require('./../../app/views/UserView');


describe("Requirement 1: Test for userView", () => {
    test("Return an object when try to create a new user with a null payload", () => {
        const payload = null;
        const result  = UserView.createUser(payload);
        expect(result.error).toMatch(/payload no existe/)
    })

    test("Requirement 2: Return an error object when try to create a new user with a payload with invalid properties", () => {
        const payload = {username: null, name: 12, id: "id"}
        const result = UserView.createUser(payload);
        expect(result.error).toMatch(/necesitan tener un valor valido/)

    })

    test("Requirement 3: Return an error object when try to create a new user with a payload with missing propierties", () => {
        const payload = {username: "username"}
        const result = UserView.createUser(payload);
        expect(result.error).toMatch(/necesitan tener un valor valido/)
    })

    test("Requirement 4: Create a user by a given valid payload", () => {
        const payload = {username: "username", id: 1, name: "name"}
        const result = UserView.createUser(payload);
        expect(result.name).toBe("name");
        expect(result.username).toBe("username");
        expect(result.id).toBe(1);
    })


})