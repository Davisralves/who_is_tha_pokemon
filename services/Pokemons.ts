import PokemonModel from "../models/Pokemons";

const PokemonService = {
	requestPokemons: async () => {
		const first151Pokemons = await PokemonModel.fetchPokemons();
		return first151Pokemons;
	},
};

export default PokemonService;
