import { IpokemonObject, IpokemonObjects } from "../../interfaces/Pokemons";
import { useState } from "react";
import React from "react";
import { GameState } from "../../helpers/enums";
import PokemonCard from "../PokemonCard";
import CompareTable from "../CompareTable";
import "./gamebody.css";

type Props = {
	pokemons: IpokemonObjects;
	sortedPokemon: IpokemonObject;
	endGame: Function;
};

export default function GameBody({ pokemons, sortedPokemon, endGame }: Props) {
	const [attempts, setAttempts] = useState(5);
	const [inputValue, setInputValue] = useState("");
	const [disableButton, setDisableButton] = useState(false);
	const [tryedPokemon, setTryedPokemon] = useState(pokemons[0]);

	const handleSubmit = (
		event: React.MouseEvent<HTMLButtonElement, MouseEvent>
	) => {
		event.preventDefault();
		setTryedPokemon(
			pokemons.find(
				({ name }) => name === inputValue.toLocaleLowerCase()
			) as IpokemonObject
		);
		if (inputValue === sortedPokemon.name) {
			setDisableButton(true);
			setAttempts((actualAttempts) => actualAttempts - 1);
			return endGame(GameState.success);
		}
		if (attempts > 1) {
			return setAttempts((actualAttempts) => actualAttempts - 1);
		}
		setAttempts(0);
		setDisableButton(true);
		return endGame(GameState.failed);
	};

	const checkTypedPokemon = () => {
		if (!pokemons.some(({ name }) => name === inputValue.toLocaleLowerCase())) {
			return true;
		}
		return false;
	};
	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setInputValue(event.target.value);
		checkTypedPokemon();
	};
	const pokemonTable = (
		<div className="pokemon-table">
			{
				<CompareTable
					tryedPokemon={tryedPokemon}
					sortedPokemon={sortedPokemon}
				/>
			}
			<div className="table"></div>
			{tryedPokemon ? <PokemonCard pokemon={tryedPokemon} /> : <span />}
		</div>
	);
	return (
		<section>
			<div>
				<h5 className="default-yellow-case">{`Remaining attempts: ${attempts} `}</h5>
			</div>
			<form>
				<label className="default-yellow-case" htmlFor="pokemonInput">
					Name:{" "}
				</label>
				<input
					className="submit-input"
					onChange={(e) => handleChange(e)}
					id="pokemonInput"
					type="text"
				/>
				<button
					className="submitButton"
					disabled={checkTypedPokemon() || disableButton}
					onClick={(event) => handleSubmit(event)}
				>
					Submit
				</button>
			</form>
			{attempts < 5 ? pokemonTable : <span />}
		</section>
	);
}
