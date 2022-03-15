import { useState } from "react";
import { IpokemonObjects } from "../interfaces/Pokemons";
import GameBody from './GameBody'

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
	return (
		<div>
			{isFetched ? <GameBody sortedPokemon={sortedPokemon} /> : loading}
		</div>
	);
}
