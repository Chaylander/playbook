const user = require("./../models/User");

class UserService {
    static create(id, username, name){
        return new user(id, username, name, "Sin bio");
    }

    static getInfo(user){//retorna un array con los datos del user
        return [user.id, user.username, user.name, "sin bio"];
    }

    static updateUserUsername(user, username){
        user.username = username;
    }

    static getAllUsernames([user1, user2, user3]){
        return [user1.username, user2.username, user3.username]
      
    }
}

module.exports = UserService;