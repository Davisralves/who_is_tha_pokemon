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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connection_1 = __importDefault(require("./connection"));
const PokemonsAPi_1 = __importDefault(require("./PokemonsAPi"));
const PokemonsAPi_2 = require("./PokemonsAPi");
const PokemonsModel = {
    registerFirst151Pokemons: () => __awaiter(void 0, void 0, void 0, function* () {
        const query = `INSERT INTO pokemons 
    (pokemon_name, type1, type2, pokemon_height, pokemon_weight, imagem_url)
    VALUES (?, ?, ?, ?, ?, ?)`;
        const pokemons = yield PokemonsAPi_1.default.fetchPokemons();
        const promises = pokemons.map((pokemon) => __awaiter(void 0, void 0, void 0, function* () {
            const { name, type1, height, weight, img } = pokemon;
            const type2 = pokemon.type2 || 'none';
            return yield connection_1.default.execute(query, [name, type1, type2, height, weight, img]);
        }));
        const resolvedPromises = yield (0, PokemonsAPi_2.resolvePromises)(promises);
        return resolvedPromises;
    }),
    getAll: () => __awaiter(void 0, void 0, void 0, function* () {
        const query = `SELECT * FROM pokemons`;
        const [pokemons] = yield connection_1.default.execute(query);
        return pokemons;
    })
};
exports.default = PokemonsModel;
