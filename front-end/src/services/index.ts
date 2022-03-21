import { IpokemonObject } from "../interfaces/Pokemons";

export const deletePokemon = (pokemonName: string) =>  {
  try{
    return fetch(`${process.env.REACT_APP_API_URL}/pokemon/${pokemonName}`, {
      method: 'DELETE',
    }).then(response => response.json())
  } catch(err) {
    return err;
  }
}


export const saveNewPokemon = (currentPokemon: IpokemonObject, EditedPokemon: IpokemonObject) => {
  const requestOptions = {
    method: 'PUT',
    body: JSON.stringify([ currentPokemon, EditedPokemon])
  }
  try {
    return fetch(`${process.env.REACT_APP_API_URL}/pokemon`, requestOptions)
  } catch(err) {
    return err
  }
}
