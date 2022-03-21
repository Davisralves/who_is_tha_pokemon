import { IpokemonObject, IpokemonObjects } from "../interfaces/Pokemons";
import PokedexHeader from "./PokedexHeader";
import PokemonCard from "./PokemonCard";
import { useLocation } from "react-router-dom";
import "../css/pokedex.css";
import { useState } from "react";
import { deletePokemon } from "../services/index";
import CreatePokemon from "./CreatePokemon";

type pokemonLocation = {
	state: {
		pokemons: IpokemonObjects;
	};
};

const removeArrayItemByName = (name: string, array: IpokemonObjects) => {
	const index = array.findIndex((pokemon) => pokemon.name === name);
	array.splice(index, 1);
};

export default function Pokedex() {
	const [loading, setLoading] = useState(true);
	const [editTable, setEditTable] = useState(false);
	const [ownDataBase, setOwnDataBase] = useState(true);
	const [input, setInput] = useState("");
	const [message, setMessage] = useState("");
	const [selectedPokemon, selectPokemon] = useState("");

	const getPokemonByName = (): IpokemonObject => {
		return pokemons.find((pokemon) =>
			pokemon.name.includes(selectedPokemon)
		) as IpokemonObject;
	};

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setInput(event.target.value);
	};

	const handleSelect = () => {
		const filteredPokemons = pokemons.filter((pokemons) =>
			pokemons.name.includes(input)
		);
		if (filteredPokemons.length === 1) {
			setMessage("Selected !");
			return selectPokemon(filteredPokemons[0].name);
		}
		return setMessage(
			"Have more than one pokemon in list. Please type the complete name"
		);
	};

	const handleDelete = async () => {
		if (selectedPokemon === "") {
			return setMessage("A pokemon must be Selected first");
		} else {
			setMessage("Deleting...");
			const deletedPokemon = (await deletePokemon(
				selectedPokemon
			)) as IpokemonObject;
			if (deletedPokemon) {
				setMessage(`Pokemon ${deletedPokemon.name} was deleted`);
				removeArrayItemByName(deletedPokemon.name, pokemons);
				return selectPokemon("");
			}
			return setMessage("Cannot delete pokemon.");
		}
	};

	const handleEdit = () => {
		if (selectedPokemon === "") {
			return setMessage("A pokemon must be Selected first");
		}
		setEditTable(true);
	};

	const location = useLocation();
	const {
		state: { pokemons },
	} = location as pokemonLocation;
	if (pokemons.length > 2 && loading) {
		setLoading(false);
	}

	const myPokemons = pokemons.map((pokemon: IpokemonObject, index: number) =>
		pokemon.name.includes(input) ? (
			<PokemonCard
				pokemon={pokemon}
				key={index}
				selected={pokemon.name === selectedPokemon}
			/>
		) : (
			""
		)
	);

	return (
		<main className="pokedex">
			<h1 className="title">Pokedex</h1>
			<PokedexHeader />
			<br />
			<label className="default-yellow-case" htmlFor="pokemonInput">
				Search:
			</label>
			<input
				className="submit-input"
				type="text"
				onChange={(e) => handleChange(e)}
			/>
			<button className="submitButton" onClick={handleSelect}> Select</button>
			<button className="submitButton" onClick={handleDelete}> Delete</button>
			<button className="submitButton" onClick={handleEdit}> Edit</button>
			{/* <button onClick={handleEdit}> Save</button> */}
			{/* <select onChange={(e) => setOwnDataBase(e.target.value === "true")}>
				<option value={"true"}>My Pokemons</option>
				<option value={"false"}>Search New</option>
			</select> */}
			<h5>{message}</h5>
			<section className="pokedex-main-section">
				{editTable ? (
					<CreatePokemon
						pokemon={getPokemonByName()}
						setEditTable={setEditTable}
						pokemons={pokemons}
					/>
				) : (
					myPokemons
				)}
			</section>
		</main>
	);
}
