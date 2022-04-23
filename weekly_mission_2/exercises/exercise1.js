
const repo = {
 name: "LaunchX",
 author: "carlogilmar",
 language: "JavaScript",
 numberOfCommits: 100,
 stars: 199,
 forks: 299,
 issues_open: 10,
 issues_close: 10,
 getTotalIssues: function(){
   return this.issues_open + this.issues_close
 },
 getGeneralInfo: function(){
   return `This repository ${this.name} was created by ${this.author}`
 }
}
/*
console.log("Nombre del repo:" + repo.name)
console.log("Issues totales: " + repo.getTotalIssues())
console.log(repo.getGeneralInfo())
*/

const issue = {
  title: "Error on the login page",
  repositoryNameAssociated: "LaunchX",
  status : "open",
  numberofComments: 3,
  

}

//--------------------------------------------------------------------------------------------------
console.log("Facebook");

const Fbuser = {
  username : "Roberto",
  nickname : "Rob",
  platform : "Facebook",
  friends : 324,
  userpicture : "link",
  details : ["work", "school", "relationship", "country"],
  post : 20,

  getInfo: function(){
    return "" + this.username + " has " +this.friends+ " friends on " + this.platform 
  }
}

console.log(Fbuser.getInfo())

const Fbpost = {
  description : "This is a post.",
  likes : 4,
  comments : 3,
  shares : 2,
  image : "url",
  video : "url",
  getInfo: function(){
    return  this.description + " it has " + this.likes + " likes," + this.comments + 
    " comments and " + this.shares + " shares"
  }
}

console.log(Fbpost.getInfo())

const FbBiography = {
  name : "Roberto",
  lastname : "Jauregui",
  age : 23,
  country: "Mexico",
  city : "Gdl",
  email : "robotrjj@hotmail.com",
  phone : "",
  getBio : function(){
    return "My name is " + this.name + " " + this.lastname + " and I am " + this.age + " years old. I live in " + this.city +
    " and my email is " + this.email 
  }
}
console.log(FbBiography.getBio())

// ----------------------------------------------------------------------------------------------
console.log("Twitter");

