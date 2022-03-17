import { IpokemonObject } from "../interfaces/Pokemons";
import { GameState } from "../helpers/enums";
import '../css/game.css';

type Props = {
	GameState: GameState;
	sortedPokemon: IpokemonObject;
};

const getResultMenssage = (
	gameResult: GameState,
	sortedPokemon: IpokemonObject
) => {
	if (gameResult === GameState.success) {
		return "You Win!";
	}
	if (gameResult === GameState.failed) {
		return `You lost ! The secret Pokémon was ${sortedPokemon.name}`;
	}
};

export default function Result({ GameState, sortedPokemon }: Props) {
	const text = getResultMenssage(GameState, sortedPokemon);
	const result = (
		<div>
			<h5 className="default-yellow-case">{text}</h5>
		</div>
	);
	return <div>{GameState ? result : <span data-testid="empty-span" />}</div>;
}
