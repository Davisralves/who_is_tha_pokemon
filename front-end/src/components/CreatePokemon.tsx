import { IpokemonObject } from "../interfaces/Pokemons";
import PokemonCard from "./PokemonCard";
import { useState } from "react";
import "../css/createPokemon.css";
import { saveNewPokemon } from "../services/index";
type props = {
	pokemon: IpokemonObject;
	setEditTable: Function;
};

export default function CreatePokemon({ pokemon, setEditTable }: props) {
	const [nameInput, setNameInput] = useState(pokemon.name);
	const [height, setHeight] = useState(pokemon.height);
	const [weight, setWeight] = useState(pokemon.weight);
	const [type1, setType1] = useState(pokemon.type1);
	const [type2, setType2] = useState(pokemon.type2 || "None");
	const [message, setMessage] = useState("");

	const savePokemon = async () => {
		if (nameInput && height && weight && type1 && type2) {
			const response = await saveNewPokemon(pokemon, {
				name: nameInput,
				weight,
				height,
				type1,
				type2,
				img: pokemon.img,
			});
			if (response) {
				return setMessage("Pokemon editado com sucesso !");
			}
			return setMessage("Não foi possivel editar o pokemon");
		}
		return setMessage("No Input can be empty");
	};

	const restorePokemon = () => {
		setEditTable(false);
	};

	return (
		<main>
			<h5>{message}</h5>
			<section className="main-create-table">
				<form className="EditTable">
					<label className="default-yellow-case" htmlFor="pokemonInput">
						Name:
					</label>
					<input
						value={nameInput}
						className="submit-input"
						onChange={(e) => setNameInput(e.target.value)}
						type="text"
					/>
					<label className="default-yellow-case" htmlFor="pokemonInput">
						Heigth:
					</label>
					<input
						value={height}
						className="submit-input"
						onChange={(e) => setHeight(e.target.value)}
						type="text"
					/>{" "}
					<label className="default-yellow-case" htmlFor="pokemonInput">
						Weight:
					</label>
					<input
						value={weight}
						className="submit-input"
						onChange={(e) => setWeight(e.target.value)}
						type="text"
					/>{" "}
					<label className="default-yellow-case" htmlFor="pokemonInput">
						Type 1:
					</label>
					<input
						value={type1}
						className="submit-input"
						onChange={(e) => setType1(e.target.value)}
						type="text"
					/>
					<label className="default-yellow-case" htmlFor="pokemonInput">
						Type 2:
					</label>
					<input
						value={type2}
						className="submit-input"
						onChange={(e) => setType2(e.target.value)}
						type="text"
					/>
				</form>
				<PokemonCard
					pokemon={{
						name: nameInput,
						height,
						weight,
						type1,
						type2,
						img: pokemon.img,
					}}
				/>
			</section>
			<div className="create-buttons">
				<button className="submitButton" onClick={savePokemon}>
					Save
				</button>
				<button className="submitButton" onClick={restorePokemon}>
					Restore
				</button>
			</div>
		</main>
	);
}
