import express from "express";
import requestPokemons from "./controller/requestPokemons";
import postFirst151Pokemons from "./controller/postFirst151Pokemons";
import 'dotenv/config';

const cors = require("cors");
const app = express();

app.use(cors());

const { PORT } = process.env;

app.get("/", requestPokemons);

app.post('/first151pokemons', postFirst151Pokemons)

app.listen(8000, () => {
	console.log(`Server is running at ${PORT || 8000}`);
});
