"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const fetch = require("node-fetch");
const fetchFirst151Pokemons = () => __awaiter(void 0, void 0, void 0, function* () {
    const pokemons = yield fetch("https://pokeapi.co/api/v2/pokemon?limit=20");
    return yield pokemons.json();
});
const getPokemonsDetailsPromises = (first151Pokemons) => __awaiter(void 0, void 0, void 0, function* () {
    return yield first151Pokemons.results.map(({ url }) => __awaiter(void 0, void 0, void 0, function* () {
        const pokemonsDetails = yield fetch(url);
        return yield pokemonsDetails.json();
    }));
});
const filterPokemonInfo = (pokemonsInfo) => pokemonsInfo.map((pokemonDetail) => {
    const { name, types, height, weight, sprites: { other: { dream_world: { front_default: img }, }, }, } = pokemonDetail.value;
    console.log(types[0].type.name);
    const pokemonObject = {
        name,
        type1: types[0].type.name,
        height,
        weight,
        img,
    };
    if (types[1]) {
        pokemonObject.type2 = types[1].type.name;
    }
    return pokemonObject;
});
const PokemonModel = {
    fetchPokemons: () => __awaiter(void 0, void 0, void 0, function* () {
        const first151Pokemons = yield fetchFirst151Pokemons();
        const pokemonDetailsPromises = yield getPokemonsDetailsPromises(first151Pokemons);
        const allPromises = yield Promise.allSettled(pokemonDetailsPromises);
        const resolvedPromises = allPromises.filter((resolvedPromise) => resolvedPromise.status === "fulfilled");
        const pokemonsWithDetails = filterPokemonInfo(resolvedPromises);
        return pokemonsWithDetails;
    }),
};
exports.default = PokemonModel;
