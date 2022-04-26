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
    static getAllUsernames([user1, user2, user3]){
        return [user1.username, user2.username, user3.username]
        
        // [user1 = UserService.username,
        // user2 = UserService.username,
        // user3 = UserService.username
        // ]
    }
}
module.exports = UserService