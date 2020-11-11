const express = require("express")

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
})