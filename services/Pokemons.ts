import PokemonsModel from "../models/Pokemons";

const PokemonService = {
	requestPokemons: async () => {
		const first151Pokemons = await PokemonsModel.fetchPokemons();
		return first151Pokemons;
	},
  registerFirst151Pokemons: async () => {
    return await PokemonsModel.registerFirst151Pokemons();
  }
};

export default PokemonService;
