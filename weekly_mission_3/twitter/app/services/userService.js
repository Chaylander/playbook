const user = require("./../models/User");

class UserService {
    static create(id, username, name){
        return new user(id, username, name, "Sin bio");
    }
}

module.exports = UserService;