const express = require("express")
const axios = require("axios")
const heroes = require("../api/heroes.json")
const heroRouter = express.Router()

function routes(){
    heroRouter.route("/").get((req,res)=>{
       res.status(200)
        res.send(heroes)
    })
    .delete((req, res)=>{
        const {id} = req.query
        let index = heroes.findIndex((hero)=> hero.id === +id );
        heroes.splice(index,1);
        res.send(heroes);
    })
    .post((req, res)=>{
        const {id, name} = req.query
        let newHero = {id, name}
        const isIdTaken = heroes.some((hero)=>{
            return hero.id === +id 
        })
        const isNameTaken = heroes.some((hero)=>{
            return hero.name === name 
        })
        if(isNameTaken && isIdTaken){
                res.send("sorry, the id and name indicated are already taken");
        }else if(isNameTaken){
            res.send("sorry the name indicated is already taken")
        }else if(isIdTaken){
            res.send("sorry the id indicated is already taken")
        }else if(!id || ! name){
            res.send("indicate the id and name to add hero")
        }
        else{
            heroes.push(newHero)
            res.send(heroes)
        }
    })
    .patch((req,res)=>{
        const {id, newName} = req.query
        const index = heroes.findIndex((hero)=> hero.id === +id)
        heroes[index].name = newName
        res.send(heroes)
    })
    heroRouter.route("/:heroId").get((req,res)=>{
        console.log(req);
        const{heroId} = req.params
        const index = heroes.findIndex((hero)=> hero.id === +heroId)
        console.log(index);
        const heroDetail = heroes[index]
        res.send(heroDetail)

     })

     
    return heroRouter
}

module.exports = routes