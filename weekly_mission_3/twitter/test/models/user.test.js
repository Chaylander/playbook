const User = require('./../../app/models/User');

describe("Test para user", () => {
    test("Creación de user", () => {
        const user = new User(1, "chaylander", "Roberto Jauregui", "Bio", "dateCreated", "lastUpdated");
        expect(user.id).toBe(1);
    })
})