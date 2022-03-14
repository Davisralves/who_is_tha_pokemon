import { useState } from "react";
import { IpokemonObjects } from "../interfaces/Pokemons"

type Props = {
  pokemons: IpokemonObjects;
  isFetched: boolean;
};

export default function Game({pokemons, isFetched}: Props) {

  const [login, setLogin] = useState(false);
  const loading = <h3>Loading...</h3>;

  setLogin(isFetched);
  return(
    <div>
      {login ? pokemons.map((pokemon) => <PokemonCard />) : loading}
    </div>
  )
}