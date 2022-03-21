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


export const saveNewPokemon = async (currentPokemon: IpokemonObject, EditedPokemon: IpokemonObject) => {
  console.log((JSON.stringify([currentPokemon, EditedPokemon])));
  const requestOptions = {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify([currentPokemon, EditedPokemon])
  }
  try {
    return await fetch(`${process.env.REACT_APP_API_URL}/pokemon`, requestOptions)
  } catch(err) {
    console.log(err);
    return false;
  }
}
