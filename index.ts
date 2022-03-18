import express from "express";
import requestPokemons from "./controller/requestPokemons";
import 'dotenv/config';

const cors = require("cors");
const app = express();

app.use(cors());

const { PORT } = process.env;
console.log('port', PORT);

app.get("/", requestPokemons);

app.listen(PORT, () => {
	console.log(`Server is running at ${PORT || 8000}`);
});
