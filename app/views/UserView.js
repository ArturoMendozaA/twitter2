const UserService = require('./../../app/services/UserService')
class UserView{
    static createUser(payload){
        if (payload == null) {
            return {error : 'El "payload no existe" o si?'}
        } 
        else if(typeof payload.username != String || payload.name != String || payload.id != Number){
            return{
                error: "necesitan tener un valor válido"
            }
        }
        else if(payload.username == null || payload.name == null || payload.id == null){
            return{
                error: "necesitan tener un valor válido"
            }
            
        }
        else{
             
              UserService.create(payload.id, payload.name, payload.username)
              return UserService(username, id)

        }
    }
}
module.exports = UserView