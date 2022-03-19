import PokemonsModel from "../models/Pokemons";

const PokemonService = {
	requestPokemons: async () => {
		const allPokemons = await PokemonsModel.getAll();
		return allPokemons;
	},
  registerFirst151Pokemons: async () => {
    return await PokemonsModel.registerFirst151Pokemons();
  }
};

export default PokemonService;
