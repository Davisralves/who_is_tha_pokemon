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
} from "./controller/index";
const cors = require("cors");
const app = express();

app.use(cors());

const { PORT } = process.env;

app.get("/", requestPokemons);

app.post("/pokemon", validatePokemon, registerNewPokemon);

app.delete("/pokemon", searchPokemon, deletePokemon);

app.put("/pokemon", searchPokemon, validateNewPokemon, editPokemon);

app.use(errorHandler);

app.listen(PORT, () => {
	console.log(`Server is running at ${PORT || 8000}`);
});
