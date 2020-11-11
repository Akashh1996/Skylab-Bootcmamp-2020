const express = require("express")

const routerTest = express.Router()

function routes(){
     //ESTE raiz no sera mismo raiz(/) de index porque lo de index router es si esto es /akash en router /pepe significa /akash/pepe
     routerTest.route("/").get((req, res)=>{
         console.log("recieving get request");
         const sum = 2+2
         console.log(sum);
         res.send(`this is get ${sum}`)
     })
     .post((req,res)=>{
         res.send("this is post")
     })
     
     routerTest.route("/pepe")
     .get((req,res)=>{
         res.send("hola si q funciona")
     })
     .post((req,res)=>{
         res.send("soy el post")
     })


     return routerTest
}

module.exports = routes