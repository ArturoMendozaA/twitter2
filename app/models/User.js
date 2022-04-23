class User{
    constructor(id, username, name, bio, dateCreated, lastUpdated){
        this.id = id
        this.username = username
        this.name = name 
        this.bio = bio
        this.dateCreated = new Date()
        this.lastUpdated = new Date()
    }
    showInfo(){
        return "El id es: "+ this.id +" de "+ this.username
    }
    get getUsername(){
        return this.username
    }    
    get getBio(){
        return this.bio
    }
    get getDateCreated(){
        return this.dateCreated
    }
    get getLastUpdated(){
        return this.dateCreated
    }
    set setUsername(newUsername){
        this.username = newUsername
    }
}
module.exports = User