const User = require('./../../app/models/User');

describe("Test para user", () => {
    test("Creación de user", () => {
        const user = new User(1, "chaylander", "Roberto Jauregui", "Bio", "dateCreated", "lastUpdated");
        expect(user.id).toBe(1);
        expect(user.username).toBe("chaylander");
        expect(user.name).toBe("Roberto Jauregui");
        expect(user.bio).toBe("Bio");
        expect(user.dateCreated).toBe("dateCreated");
        expect(user.lastUpdated).toBe("lastUpdated");
    })
})