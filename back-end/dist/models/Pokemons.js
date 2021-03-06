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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PokemonsModel = void 0;
var connection_1 = require("./connection");
var PokemonsAPi_1 = __importDefault(require("./PokemonsAPi"));
var PokemonsAPi_2 = require("./PokemonsAPi");
exports.PokemonsModel = {
    registerFirst151Pokemons: function () { return __awaiter(void 0, void 0, void 0, function () {
        var query, pokemons, promises, resolvedPromises;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    query = "INSERT INTO pokemons \n    (pokemon_name, type1, type2, pokemon_height, pokemon_weight, imagem_url)\n    VALUES (?, ?, ?, ?, ?, ?)";
                    return [4 /*yield*/, PokemonsAPi_1.default.fetchPokemons()];
                case 1:
                    pokemons = _a.sent();
                    promises = pokemons.map(function (pokemon) { return __awaiter(void 0, void 0, void 0, function () {
                        var name, type1, height, weight, img, type2;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    name = pokemon.name, type1 = pokemon.type1, height = pokemon.height, weight = pokemon.weight, img = pokemon.img;
                                    type2 = pokemon.type2 || "none";
                                    return [4 /*yield*/, connection_1.connection.execute(query, [
                                            name,
                                            type1,
                                            type2,
                                            height,
                                            weight,
                                            img,
                                        ])];
                                case 1: return [2 /*return*/, _a.sent()];
                            }
                        });
                    }); });
                    return [4 /*yield*/, (0, PokemonsAPi_2.resolvePromises)(promises)];
                case 2:
                    resolvedPromises = _a.sent();
                    return [2 /*return*/, resolvedPromises];
            }
        });
    }); },
    getAll: function () { return __awaiter(void 0, void 0, void 0, function () {
        var query, pokemons;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    query = "SELECT * FROM pokemons";
                    return [4 /*yield*/, connection_1.connection.execute(query)];
                case 1:
                    pokemons = (_a.sent())[0];
                    return [2 /*return*/, pokemons];
            }
        });
    }); },
    getByName: function (name) { return __awaiter(void 0, void 0, void 0, function () {
        var query, result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    query = "SELECT * FROM pokemons WHERE pokemon_name = ?";
                    return [4 /*yield*/, connection_1.connection.execute(query, [name])];
                case 1:
                    result = (_a.sent())[0];
                    return [2 /*return*/, result];
            }
        });
    }); },
    registerNewPokemon: function (name, type1, type2, weight, height, img) { return __awaiter(void 0, void 0, void 0, function () {
        var query, result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    query = "INSERT INTO pokemons (pokemon_name, type1, type2, pokemon_weight, pokemon_height, imagem_url)\n    VALUES (?, ?, ?, ?, ?, ?)";
                    return [4 /*yield*/, connection_1.connection.execute(query, [
                            name,
                            type1,
                            type2,
                            weight,
                            height,
                            img,
                        ])];
                case 1:
                    result = (_a.sent())[0];
                    return [2 /*return*/, result.insertId];
            }
        });
    }); },
    deletePokemon: function (name) { return __awaiter(void 0, void 0, void 0, function () {
        var query, result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    query = "DELETE FROM pokemons WHERE pokemon_name = ?";
                    return [4 /*yield*/, connection_1.connection.execute(query, [name])];
                case 1:
                    result = (_a.sent())[0];
                    return [2 /*return*/, result.insertId];
            }
        });
    }); },
    editPokemon: function (currentName, newName, newType1, newType2, newHeight, newWeight) { return __awaiter(void 0, void 0, void 0, function () {
        var query, result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    query = "UPDATE pokemons SET pokemon_name = ?, type1 = ?, type2 = ?, pokemon_height = ?, pokemon_weight = ? WHERE pokemon_name = ?";
                    return [4 /*yield*/, connection_1.connection.execute(query, [newName, newType1, newType2, newHeight, newWeight, currentName])];
                case 1:
                    result = (_a.sent())[0];
                    return [2 /*return*/, result.insertId];
            }
        });
    }); },
    deleteAllPokemons: function () { return __awaiter(void 0, void 0, void 0, function () {
        var query, result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    query = "DELETE FROM pokemons";
                    return [4 /*yield*/, connection_1.connection.execute(query)];
                case 1:
                    result = (_a.sent())[0];
                    return [2 /*return*/, result];
            }
        });
    }); }
};
