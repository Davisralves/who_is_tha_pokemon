import { IpokemonObject } from "../interfaces/Pokemons";
import { useState } from "react";
import { GameState } from "../helpers/enums";

type Props = {
	sortedPokemon: IpokemonObject;
	endGame: Function;
};

export default function GameBody({ sortedPokemon, endGame }: Props) {
	const [attempts, setAttempts] = useState(5);
	const [inputValue, setInputValue] = useState("");
	const [disableButton, setDisableButton] = useState(false);
	const handleSubmit = (
		event: React.MouseEvent<HTMLButtonElement, MouseEvent>
	) => {
		event.preventDefault();
		if (inputValue === sortedPokemon.name) {
			setDisableButton(true);
			return endGame(GameState.success);
		}
		if (attempts > 0) {
			return setAttempts((actualAttempts) => actualAttempts - 1);
		}
		setDisableButton(true);
		return endGame(GameState.failed);
	};

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setInputValue(event.target.value);
	};

	const { name, type1, weight, height } = sortedPokemon;
	return (
		<section>
			<div>
				<h5>{`Remaining attempts: ${attempts} `}</h5>
			</div>
			<form>
				<label htmlFor={name}>Name: </label>
				<input onChange={(e) => handleChange(e)} id={name} type={name} />
				<button
					disabled={disableButton}
					onClick={(event) => handleSubmit(event)}
				>
					Submit
				</button>
			</form>
		</section>
	);
}
