"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var requestPokemons_1 = __importDefault(require("./controller/requestPokemons"));
var errorHandler_1 = __importDefault(require("./controller/middlewares/errorHandler"));
require("dotenv/config");
var validatePokemonBody_1 = require("./controller/middlewares/validatePokemonBody");
var registerNewPokemon_1 = __importDefault(require("./controller/registerNewPokemon"));
var cors = require("cors");
var app = (0, express_1.default)();
app.use(cors());
var PORT = process.env.PORT;
app.get("/", requestPokemons_1.default);
app.post("/pokemon", validatePokemonBody_1.validatePokemon, registerNewPokemon_1.default);
app.use(errorHandler_1.default);
app.listen(PORT, function () {
    console.log("Server is running at ".concat(PORT || 8000));
});
