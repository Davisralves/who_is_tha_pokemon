import { useEffect, useState } from "react";
import { IpokemonObjects } from "../interfaces/Pokemons";
import PokemonCard from './PokemonCard';

type Props = {
	pokemons: IpokemonObjects;
	isFetched: boolean;
};

export default function Game({ pokemons, isFetched }: Props) {
	const loading = <h3>Loading...</h3>;


	return (
		<div>
			{isFetched
				? pokemons.map((pokemon) => <PokemonCard pokemon={pokemon} />)
				: loading}
		</div>
	);
}
