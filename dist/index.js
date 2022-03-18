"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const requestPokemons_1 = __importDefault(require("./controller/requestPokemons"));
require("dotenv/config");
const cors = require("cors");
const app = (0, express_1.default)();
app.use(cors());
const { PORT } = process.env;
console.log('port', PORT);
app.get("/", requestPokemons_1.default);
app.listen(PORT, () => {
    console.log(`Server is running at ${PORT || 8000}`);
});
