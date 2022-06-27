import { useEffect, useState } from "react";
import { IpokemonObjects } from "../../interfaces/Pokemons";
import GameBody from "../GameBody";
import Result from "../Result";
import { GameState } from "../../helpers/enums";
import pokemonDefaultObject from "../../helpers/Pokemons";

type Props = {
	pokemons: IpokemonObjects;
	isFetched: boolean;
	setGameOn: Function;
};

export const sortNumberFrom0To = (length: number): number => {
	const max = length - 1;
	return Math.round(Math.random() * max);
};

export default function Game({ pokemons, isFetched, setGameOn }: Props) {
	const [gameResult, setGameResult] = useState(GameState.inProgress);
	const [sortedPokemon, setSortedPokemon] = useState(pokemonDefaultObject[0]);

	const endGame = (gameResponse: GameState) => {
		if (gameResponse === GameState.success) {
			return setGameResult(GameState.success);
		}
		return setGameResult(GameState.failed);
	};

	useEffect(() => {
		const sortedNumber = sortNumberFrom0To(pokemons.length);
		const sortedPokemon = pokemons[sortedNumber];
		setSortedPokemon(sortedPokemon);
	}, []);

	const loading = <h3>Loading...</h3>;

	return (
		<div>
			{isFetched ? (
				<GameBody
					pokemons={pokemons}
					sortedPokemon={sortedPokemon}
					endGame={endGame}
				/>
			) : (
				loading
			)}

			<Result GameState={gameResult} sortedPokemon={sortedPokemon} />

			{gameResult === GameState.inProgress ? (
				<span data-testid="Game-in-progress" />
			) : (
				<button className="submitButton" onClick={() => setGameOn(false)}>
					Home
				</button>
			)}
		</div>
	);
}
