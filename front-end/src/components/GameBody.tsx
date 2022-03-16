import { IpokemonObject, IpokemonObjects } from "../interfaces/Pokemons";
import { useState } from "react";
import { GameState } from "../helpers/enums";

type Props = {
	pokemons: IpokemonObjects;
	sortedPokemon: IpokemonObject;
	endGame: Function;
};

export default function GameBody({
	pokemons,
	sortedPokemon,
	endGame,
}: Props) {
	const [attempts, setAttempts] = useState(5);
	const [inputValue, setInputValue] = useState("");
	const [disableButton, setDisableButton] = useState(false);
	const [tryedPokemon, setTryedPokemon] = useState(pokemons[0]);

	console.log(pokemons);
	const handleSubmit = (
		event: React.MouseEvent<HTMLButtonElement, MouseEvent>
	) => {
		event.preventDefault();
		setTryedPokemon(
			pokemons.find(({ name }) => name === inputValue) as IpokemonObject
		);
		if (inputValue === sortedPokemon.name) {
			setDisableButton(true);
			return endGame(GameState.success);
		}
		if (attempts > 1) {
			return setAttempts((actualAttempts) => actualAttempts - 1);
		}
		setAttempts(0);
		setDisableButton(true);
		return endGame(GameState.failed);
	};

  const checkTypedPokemon = () =>  {
    if(!pokemons.some(({ name }) => name === inputValue)) {
      return true;
    } return false;
  }
	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setInputValue(event.target.value);
    checkTypedPokemon();
	};

	const checkIfIsEqual = (value1: string | number, value2: string | number) =>
		value1 === value2;

	const printTheDiferenceOfValues = (
		value1: number,
		value2: number
	): string => {
		switch (true) {
			case value1 > value2:
				return "Higher";
			case value1 === value2:
				return "Right";
			case value1 < value2:
				return "Lower";
			default:
				return "";
		}
	};

	const { name, type1, weight, height } = sortedPokemon;
	const type2 = sortedPokemon.type2 || "None";
	const pokemonTable = (
		<span>
			<p>| Characteristic | Result |</p>
			<p>
				| Type 1 |{" "}
				{checkIfIsEqual(type1, tryedPokemon.type1) ? "Right" : "Wrong"} |
			</p>
			<p>
				| Type 2 |{" "}
				{checkIfIsEqual(type2, tryedPokemon.type2 || "None")
					? "Right"
					: "Wrong"}{" "}
				|
			</p>
			<p>
				| Height |{" "}
				{printTheDiferenceOfValues(
					parseInt(height),
					parseInt(tryedPokemon.height)
				)}{" "}
				|
			</p>
			<p>
				| Weight |{" "}
				{printTheDiferenceOfValues(
					parseInt(weight),
					parseInt(tryedPokemon.weight)
				)}{" "}
				|
			</p>
		</span>
	);
	return (
		<section>
			<div>
				<h5>{`Remaining attempts: ${attempts} `}</h5>
			</div>
			<form>
				<label htmlFor={name}>Name: </label>
				<input onChange={(e) => handleChange(e)} id={name} type="text" />
				<button
					disabled={ checkTypedPokemon() || disableButton }
					onClick={(event) => handleSubmit(event)}
				>
					Submit
				</button>
			</form>
			{attempts < 5 ? pokemonTable : <span />}
		</section>
	);
}
