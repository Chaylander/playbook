const user = require("./../models/User");

class UserView{
    static createUser(payload){
        if (payload === null){
            return {error: "payload no existe"}
        }
    }
    
}   

module.exports = UserView;