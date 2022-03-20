import express from "express";
import errorHandler from "./back-end/controller/middlewares/errorHandler";
import "dotenv/config";
import { validatePokemon } from "./back-end/controller/middlewares/validatePokemonBody";
import { searchPokemon } from "./back-end/controller/middlewares/searchPokemon";
import {
	deletePokemon,
	registerNewPokemon,
	requestPokemons,
	validateNewPokemon,
	editPokemon,
  deleteAllPokemons,
  postFirst151Pokemons,
} from "./back-end/controller/index";
const cors = require("cors");
const app = express();

app.use(cors());

const { PORT } = process.env;

app.get("/", requestPokemons);

app.post("/pokemon", validatePokemon, registerNewPokemon);

app.delete("/pokemon", searchPokemon, deletePokemon);

app.put("/pokemon", searchPokemon, validateNewPokemon, editPokemon);

app.put("/restardb", deleteAllPokemons, postFirst151Pokemons )

app.use(errorHandler);

app.listen(PORT, () => {
	console.log(`Server is running at ${PORT || 8000}`);
});
