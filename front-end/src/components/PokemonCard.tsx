import { IpokemonObject } from '../interfaces/Pokemons';

type Props = {
  pokemon: IpokemonObject;
};

export default function PokemonCard({pokemon}: Props) {
  const {name, type1, height, weight} = pokemon;
  return (
    <div>
      <h6>{name}</h6>
      <span>Height: {height}</span>
      <span>weight: {weight}</span>
      <span>{type1}</span>
      <span>{pokemon.type2 ? pokemon.type2 : ''}</span>
    </div>
  );
}
