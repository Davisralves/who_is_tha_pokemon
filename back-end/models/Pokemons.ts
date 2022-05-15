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
    const [result] = await connection.execute(query, [name]) as RowDataPacket[]
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
		const query = `INSERT INTO pokemons (pokemon_name, type1, type2, pokemon_weight, pokemon_height, imagem_url)
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

  deletePokemon: async (name: string) => {
    const query = `DELETE FROM pokemons WHERE pokemon_name = ?`
    const [result] = await connection.execute<ResultSetHeader>(query, [name]);
    return result.insertId;
  },

  editPokemon: async (currentName: string, newName: string, newType1: string, newType2: string, newHeight: string, newWeight: string) => {
    const query = `UPDATE pokemons SET pokemon_name = ?, type1 = ?, type2 = ?, pokemon_height = ?, pokemon_weight = ? WHERE pokemon_name = ?`;
    const [result] = await connection.execute<ResultSetHeader>(query, [newName, newType1, newType2, newHeight, newWeight, currentName]);
    return result.insertId;
  },  

  deleteAllPokemons: async () => {
    const query = `DELETE FROM pokemons`;
    const [result] = await connection.execute<ResultSetHeader>(query);
    return result;
  }
};
