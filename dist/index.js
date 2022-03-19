"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var errorHandler_1 = __importDefault(require("./controller/middlewares/errorHandler"));
require("dotenv/config");
var validatePokemonBody_1 = require("./controller/middlewares/validatePokemonBody");
var searchPokemon_1 = require("./controller/middlewares/searchPokemon");
var index_1 = require("./controller/index");
var cors = require("cors");
var app = (0, express_1.default)();
app.use(cors());
var PORT = process.env.PORT;
app.get("/", index_1.requestPokemons);
app.post("/pokemon", validatePokemonBody_1.validatePokemon, index_1.registerNewPokemon);
app.delete("/pokemon", searchPokemon_1.searchPokemon, index_1.deletePokemon);
app.put("/pokemon", searchPokemon_1.searchPokemon, index_1.validateNewPokemon, index_1.editPokemon);
app.use(errorHandler_1.default);
app.listen(PORT, function () {
    console.log("Server is running at ".concat(PORT || 8000));
});
