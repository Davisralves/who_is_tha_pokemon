import express from "express";
import requestPokemons from "./controller/requestPokemons";
import errorHandler from "./controller/middlewares/errorHandler";
import "dotenv/config";
import { validatePokemon } from "./controller/middlewares/validatePokemonBody";
import registerNewPokemon from "./controller/registerNewPokemon";

const cors = require("cors");
const app = express();

app.use(cors());

const { PORT } = process.env;

app.get("/", requestPokemons);

app.post("/pokemon", validatePokemon, registerNewPokemon);

app.use(errorHandler);

app.listen(PORT, () => {
	console.log(`Server is running at ${PORT || 8000}`);
});
