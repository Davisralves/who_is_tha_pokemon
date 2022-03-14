import { useState } from "react";
import { IpokemonObjects } from "../interfaces/Pokemons";
import PokemonCard from './PokemonCard';

type Props = {
	pokemons: IpokemonObjects;
	isFetched: boolean;
};

const sortNumberFrom0To = (length: number): number => {
  const max = length;
  return Math.round(Math.random() * max);
}


export default function Game({ pokemons, isFetched }: Props) {
	const loading = <h3>Loading...</h3>;
  const sortedNumber = sortNumberFrom0To(pokemons.length);
  const sortedPokemon = pokemons[sortedNumber]; 
  const {name, type1, weight,} = sortedPokemon;
	return (
		<div>
			{isFetched
				? <Questions pokemon={sortedPokemon}/>
				: loading}
		</div>
	);
}
