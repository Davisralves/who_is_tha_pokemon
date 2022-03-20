import {deletePokemon} from './deletePokemon';
import { postFirst151Pokemons } from './postFirst151Pokemons';
import {requestPokemons} from './requestPokemons';
import { registerNewPokemon } from './registerNewPokemon';
import { editPokemon } from './editPokemon';
import { validateNewPokemon } from './validateNewPokemon';
import { deleteAllPokemons } from './deleteAllPokemons';

export {
  deletePokemon,
  postFirst151Pokemons,
  requestPokemons,
  registerNewPokemon,
  editPokemon,
  validateNewPokemon,
  deleteAllPokemons,
};

export const PokemonController = { // para testes
  deletePokemon,
  postFirst151Pokemons,
  requestPokemons,
  registerNewPokemon,
  editPokemon,
  validateNewPokemon,
  deleteAllPokemons,
}