import { IpokemonObject, IdataBasePokemonObject } from "../interfaces/Pokemons";
import { PokemonsModel } from "../models/Pokemons";

const convertPokemonsNames = (pokemons: IdataBasePokemonObject[]) =>
	pokemons.map((pokemon: IdataBasePokemonObject) => {
		const { pokemon_name, type1, pokemon_weight, pokemon_height, imagem_url } =
			pokemon;
		return {
			name: pokemon_name,
			type1,
			type2: pokemon.type2,
			weight: pokemon_weight,
			height: pokemon_height,
			img: imagem_url,
		};
	});

export const PokemonService = {
	requestPokemons: async () => {
		const allPokemons = await PokemonsModel.getAll();
		const pokemonsWithCorrectNames = convertPokemonsNames(
			allPokemons as IdataBasePokemonObject[]
		);
		return pokemonsWithCorrectNames;
	},
	registerFirst151Pokemons: async () => {
		return await PokemonsModel.registerFirst151Pokemons();
	},

	registerNewPokemon: async (pokemon: IpokemonObject) => {
		const { name, type1, weight, height, img } = pokemon as IpokemonObject;
		const type2 = pokemon.type2 || "none";
		return await PokemonsModel.registerNewPokemon(
			name,
			type1,
			type2,
			weight,
			height,
			img
		);
	},

	getPokemonByName: async (name: string) => {
		return await PokemonsModel.getByName(name.toLowerCase());
	},

	deletePokemon: async (name: string) => {
		return await PokemonsModel.deletePokemon(name);
	},

	editPokemon: async (
		currentPokemon: IpokemonObject,
		editedPokemon: IpokemonObject
	) => {
		const { name: currentName } = currentPokemon;
		const {
			name: newName,
			type1: newType1,
			weight: newWeight,
			height: newHeight,
		} = editedPokemon;
		const newType2 = currentPokemon.type2 || "none";
		return await PokemonsModel.editPokemon(
			currentName,
			newName,
			newType1,
			newType2,
			newHeight,
			newWeight
		);
	},

	deleteAllPokemons: async () => {
		return await PokemonsModel.deleteAllPokemons();
	},
};
