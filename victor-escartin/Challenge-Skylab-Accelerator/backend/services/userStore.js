let users= [
    {
      name: "Victor",
      email: "admin1@example.com",
      password: 1234,
      isAdmin: true,
      bio: "bioxxxxxx",
      github_profile:"githubProfilexxxxxx",
      photo:"https://www.flaticon.es/svg/static/icons/svg/121/121693.svg",
      projects:"projectsxxxxxx",
      collaboring_in:"collaboringxxxxxxx"
    },
    {
      name: "Akash",
      email: "admin2@example.com",
      password: 1234,
      isAdmin: true,
      bio: "bioxxxxxx",
      github_profile:"githubProfilexxxxxx",
      photo:"https://www.flaticon.es/svg/static/icons/svg/121/121693.svg",
      projects:"projectsxxxxxx",
      collaboring_in:"collaboringxxxxxxx"
    },
    {
      name: "Gilberto",
      email: "user1@example.com",
      password: 1234,
      isAdmin: true,
      bio: "bioxxxxxx",
      github_profile:"githubProfilexxxxxx",
      photo:"https://www.flaticon.es/svg/static/icons/svg/121/121693.svg",
      projects:"projectsxxxxxx",
      collaboring_in:"collaboringxxxxxxx"
    },
    {
      name: "Santi",
      email: "user2@example.com",
      password: 1234,
      isAdmin: true,
      bio: "bioxxxxxx",
      github_profile:"githubProfilexxxxxx",
      photo:"https://www.flaticon.es/svg/static/icons/svg/121/121693.svg",
      projects:"projectsxxxxxx",
      collaboring_in:"collaboringxxxxxxx"
    }
  ]

const usersController = require("../controllers/usersControllers");

class FindUser{
    static getUsers(){
        return usersController;
    }

    static getUserById(userId){
        return users.find((user)=>user.id===userId)
    }

    static setUser(newUser){
        users= users.map((user)=>{
            if (user.id===newUser.id){
                return newUser;
            }
            return user;
        })
    }

    static deleteUser(userId){
        users=users.filter((user)=>user.id!==userId)
    }
}

module.exports = FindUser