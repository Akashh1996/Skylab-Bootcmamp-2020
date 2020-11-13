const express = require("express");
const server = express();

// settings
server.set("port", process.env.PORT || 3000); //en caso de puerto definido,lo ejecuta
server.set("json spaces", 2); //da formato a la vista json

// middlewares
server.use(express.json());

// routes
server.use("/api/heroes", require("./routes/heroes")); // ./api/xxx por norma cuando se consulta una fuente externa
server.use("/api/heroes", require("./routes/findHero"));

// starting the server
server.listen(server.get("port"), () => {
  console.log(`Servidor funcionando en el puerto ${server.get("port")}`);
});
