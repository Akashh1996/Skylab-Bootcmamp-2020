/* const express = require("express")

const app = express()

const port = process.env.PORT || 1240

app.get("/", (req,res)=>{
    res.end("skylab mola !! y santi també")
}) 

app.post("/post", (req,res)=>{
     res.send("post test")
}) 

app.put("/put", (req,res)=>{
     res.send("put test")
}) 

app.get("/delete", (req,res)=>{
     res.send("delete test")
}) 



app.listen(port, (req, res)=>{
    console.log(`server running in ${port}`);
}) */

const express = require("express")
const cors = require("cors")
const bodyParser = require ("body-parser")

const app = express()
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = process.env.PORT || 1240

const testRoute = require("./routes/routes")()
app.use("/", testRoute)

const pokeRoutes = require("./routes/pokeRoutes")()
app.use("/pokemons", pokeRoutes)

app.listen(port, (req, res)=>{
    console.log(`server running in ${port}`);
})