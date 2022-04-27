const UserService = require('./../../app/services/UserService');
const user = require("./../models/User");

class UserView{
    static createUser(payload){
        if (payload === null){
            return {error: "payload no existe"}
        }
        else if (payload.username === null || payload.name === null || payload.id === null){
            return {error: "necesitan tener un valor valido"}
        }
        else if (payload.username === undefined || payload.name === undefined || payload.id === undefined){
            return {error: "necesitan tener un valor valido"}
        }
        else{
            return UserService.create(payload.id, payload.username, payload.name); //si enviamos payload no funciona
        }
        


    }
    
}   

module.exports = UserView;