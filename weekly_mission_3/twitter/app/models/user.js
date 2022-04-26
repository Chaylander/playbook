class User {
    constructor(id, username, name, bio, dateCreated, lastUpdated){
        this.id = id;
        this.username = username;
        this.name = name;
        this.bio = bio;
        this.dateCreated = new Date();
        this.lastUpdated = new Date();
    }

    getUsername(){
        return this.username;
    }

    getBio(){
        return this.bio;
    }

    getName(){
        return this.name;
    }

    getLastUpdated(){
        return this.lastUpdated;
    }

    getDateCreated(){
        return this.dateCreated;
    }

    setUsername(newUsername){
        this.username = newUsername;
    }


}

module.exports = User;