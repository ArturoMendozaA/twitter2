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
    getUsername(){
        return this.username
    }
    getBio(){
        return this.bio
    }
    getDateCreated(){
        return this.dateCreated
    }
    getLastUpdated(){
        return this.dateCreated
    }
}
module.exports = User