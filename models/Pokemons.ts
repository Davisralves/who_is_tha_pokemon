import {connection} from "./connection";
import PokemonApi from "./PokemonsAPi";
import { ResultSetHeader, RowDataPacket } from "mysql2";
import { resolvePromises } from "./PokemonsAPi";

export const PokemonsModel = {
	registerFirst151Pokemons: async () => {
		const query = `INSERT INTO pokemons 
    (pokemon_name, type1, type2, pokemon_height, pokemon_weight, imagem_url)
    VALUES (?, ?, ?, ?, ?, ?)`;
		const pokemons = await PokemonApi.fetchPokemons();
		const promises = pokemons.map(async (pokemon) => {
			const { name, type1, height, weight, img } = pokemon;
			const type2 = pokemon.type2 || "none";
			return await connection.execute<ResultSetHeader>(query, [
				name,
				type1,
				type2,
				height,
				weight,
				img,
			]);
		});
		const resolvedPromises = await resolvePromises(promises);
		return resolvedPromises;
	},

	getAll: async () => {
		const query = `SELECT * FROM pokemons`;
		const [pokemons] = (await connection.execute(query)) as RowDataPacket[];
		return pokemons;
	},

	getByName: async (name: string) => {
    const query = `SELECT * FROM pokemons WHERE pokemon_name = ?`;
    const [result] = await connection.execute(query, name) as RowDataPacket[]
    return result;
  },

	registerNewPokemon: async (
		name: string,
		type1: string,
		type2: string,
		weight: string,
		height: string,
		img: string
	) => {
		const query = `INSERT INTO pokemons (name, type1, type2, weight, height, img)
    VALUES (?, ?, ?, ?, ?, ?)`;
		const [result] = await connection.execute<ResultSetHeader>(query, [
			name,
			type1,
			type2,
			weight,
			height,
			img,
		]);
    return result.insertId;
	},
};
