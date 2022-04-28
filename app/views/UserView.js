const UserService = require('./../../app/services/UserService')
class UserView{
    static createUser(payload){
        if (payload === null) {
            return {error : 'El "payload no existe" o si?'}
        } 
        else if(typeof payload.username !== 'string' || typeof payload.name !== 'string' || typeof payload.id !== 'number'){
            return{
                error: "necesitan tener un valor válido"
            }
        }
        else if(payload.username === null || payload.name === null || payload.id === null){
            return{
                error: "necesitan tener un valor válido"
            }
            
        }
        else{
             
              
                return UserService.create(payload.id, payload.username, payload.name)
                //UserService.create(1, "username", "name")
            
                //(id: 1, username: "username", name: "name")

                //UserService.create(payload.name)
                //UserService.getInfo(payload)
            
              //UserService.getInfo(payload) 
        }
        
    }
}


module.exports = UserView