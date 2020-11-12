
const express = require("express")
const cors = require("cors")
const bodyParser = require ("body-parser")

const app = express()
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = process.env.PORT || 1200


const pokeRoutes = require("./routes/tohRoutes")()

app.use("/heroes", pokeRoutes)

app.listen(port, (req, res)=>{
    console.log(`server running in ${port}`);
})