import { IpokemonObject } from "../interfaces/Pokemons";
import PokemonsModel from "../models/Pokemons";

const PokemonService = {
	requestPokemons: async () => {
		const allPokemons = await PokemonsModel.getAll();
		return allPokemons;
	},
  registerFirst151Pokemons: async () => {
    return await PokemonsModel.registerFirst151Pokemons();
  },

  registerNewPokemon: async (pokemon: IpokemonObject) => {
    const { name, type1, weight, height, img } = pokemon as IpokemonObject;
    const type2 = pokemon.type2 || 'none';
    return await PokemonsModel.registerNewPokemon(name, type1, type2, weight, height, img);
  },

  getPokemonByName: async (name: string) => {
    return await PokemonsModel.getByName(name);
  },
};

export default PokemonService;
