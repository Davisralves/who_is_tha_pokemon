import express from 'express';
import requestPokemons from './controller/requestPokemons';

const cors = require("cors")
const app = express();

app.use(cors())

const PORT = 8000;

app.get('/', requestPokemons);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});