import express from "express";
import errorHandler from "./controller/middlewares/errorHandler";
import "dotenv/config";
import { validatePokemon } from "./controller/middlewares/validatePokemonBody";
import { searchPokemon } from "./controller/middlewares/searchPokemon";
import {
	deletePokemon,
	registerNewPokemon,
	requestPokemons,
	validateNewPokemon,
	editPokemon,
	deleteAllPokemons,
	postFirst151Pokemons,
} from "./controller/index";
const cors = require("cors");
const app = express();
const bodyParse = require("body-parser");

app.use(cors());

const { PORT } = process.env;

app.use(bodyParse.json());

app.get("/", requestPokemons);

app.post("/pokemon", validatePokemon, registerNewPokemon);

app.delete("/pokemon/:name", searchPokemon, deletePokemon);

app.put("/pokemon", validateNewPokemon, editPokemon);

app.put("/restardb", deleteAllPokemons, postFirst151Pokemons);

app.use(errorHandler);

app.listen(PORT, () => {
	console.log(`Server is running at ${PORT || 8000}`);
});
