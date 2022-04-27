const user = require("./../models/User");

class UserService {
    static create(id, username, name){
        return new user(id, username, name, "Sin bio");
    }
    static getInfo(user){//retorna un array con los datos del user
        return [user.id, user.username, user.name, "sin bio"];
    }
}

module.exports = UserService;