"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PokemonController = exports.deleteAllPokemons = exports.validateNewPokemon = exports.editPokemon = exports.registerNewPokemon = exports.requestPokemons = exports.postFirst151Pokemons = exports.deletePokemon = void 0;
var deletePokemon_1 = require("./deletePokemon");
Object.defineProperty(exports, "deletePokemon", { enumerable: true, get: function () { return deletePokemon_1.deletePokemon; } });
var postFirst151Pokemons_1 = require("./postFirst151Pokemons");
Object.defineProperty(exports, "postFirst151Pokemons", { enumerable: true, get: function () { return postFirst151Pokemons_1.postFirst151Pokemons; } });
var requestPokemons_1 = require("./requestPokemons");
Object.defineProperty(exports, "requestPokemons", { enumerable: true, get: function () { return requestPokemons_1.requestPokemons; } });
var registerNewPokemon_1 = require("./registerNewPokemon");
Object.defineProperty(exports, "registerNewPokemon", { enumerable: true, get: function () { return registerNewPokemon_1.registerNewPokemon; } });
var editPokemon_1 = require("./editPokemon");
Object.defineProperty(exports, "editPokemon", { enumerable: true, get: function () { return editPokemon_1.editPokemon; } });
var validateNewPokemon_1 = require("./validateNewPokemon");
Object.defineProperty(exports, "validateNewPokemon", { enumerable: true, get: function () { return validateNewPokemon_1.validateNewPokemon; } });
var deleteAllPokemons_1 = require("./deleteAllPokemons");
Object.defineProperty(exports, "deleteAllPokemons", { enumerable: true, get: function () { return deleteAllPokemons_1.deleteAllPokemons; } });
exports.PokemonController = {
    deletePokemon: deletePokemon_1.deletePokemon,
    postFirst151Pokemons: postFirst151Pokemons_1.postFirst151Pokemons,
    requestPokemons: requestPokemons_1.requestPokemons,
    registerNewPokemon: registerNewPokemon_1.registerNewPokemon,
    editPokemon: editPokemon_1.editPokemon,
    validateNewPokemon: validateNewPokemon_1.validateNewPokemon,
    deleteAllPokemons: deleteAllPokemons_1.deleteAllPokemons,
};
