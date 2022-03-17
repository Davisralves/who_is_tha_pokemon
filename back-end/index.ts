import express from "express";
import requestPokemons from "./controller/requestPokemons";
import 'dotenv/config';

const cors = require("cors");
const app = express();

app.use(cors());

const { PORT } = process.env;

app.get("/", requestPokemons);

app.listen(PORT, () => {
	console.log(`Server is running at ${process.env.HOST}${PORT || 3000}`);
});
