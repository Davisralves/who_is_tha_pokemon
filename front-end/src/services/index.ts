// import axios from "axios";

// const api = axios.create({
//   baseURL: process.env.REACT_APP_API_URL,
// });



//   try {
//     const response = await api.delete('/pokemon', data);
//     return response.data;
//   } catch (err) {
//     return console.log(err);
//   }
// }

export const deletePokemon = (pokemonName: string) =>  {
  try{
    return fetch(`${process.env.REACT_APP_API_URL}/pokemon/${pokemonName}`, {
      method: 'DELETE',
    }).then(response => response.json())
  } catch(err) {
    return err;
  }
}

