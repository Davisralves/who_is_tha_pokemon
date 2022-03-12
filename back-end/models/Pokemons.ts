const fetch = require('node-fetch');

const PokemonModel = {
  fetchPokemons: async () => {
    const first151Pokemons = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
    return await first151Pokemons.json();
  }
}

export default PokemonModel;