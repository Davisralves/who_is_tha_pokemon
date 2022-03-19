import express from "express";
import requestPokemons from "./controller/requestPokemons";
import errorHandler from "./controller/middlewares/errorHandler";
import 'dotenv/config';

const cors = require("cors");
const app = express();

app.use(cors());

const { PORT } = process.env;

app.get("/", requestPokemons);

app.use(errorHandler);

app.listen(8000, () => {
	console.log(`Server is running at ${PORT || 8000}`);
});
