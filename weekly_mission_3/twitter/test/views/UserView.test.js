const UserView = require('./../../app/views/UserView');

describe("Test for userView", () => {
    test("Return an object when try to create a new user with a null payload", () => {
        const payload = null;
        const result  = UserView.createUser(payload);
        expect(result.error).toMatch(/payload no existe/)
    })

})