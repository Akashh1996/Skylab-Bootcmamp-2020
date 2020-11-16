const express = require('express');

const pokeRouter = express.Router();

function routes() {
	
	pokeRouter.route('./').get((req,res)=>{
		const endpoint=`https://pokeapi.co/api/v2/pokemon?limit=${}&offset=${}`
	})
	return pokeRouter;
}

module.exports = routes;
