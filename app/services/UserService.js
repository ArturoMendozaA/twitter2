const User = require('./../models/User')

class UserService{
    static create(id, username, name){
        return new User(id, username, name, "Sin bio")
    }
   
    static getInfo (User){
        return [User.id, User.username, User.name]
    }

    static updateUserUserName(user, newUsername){
        return user.username = newUsername;
    }
}
module.exports = UserService