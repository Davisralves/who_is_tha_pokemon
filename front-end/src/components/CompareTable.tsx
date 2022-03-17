import { IpokemonObject } from "../interfaces/Pokemons";
import "../css/pokemonCard.css";

type Props = {
	sortedPokemon: IpokemonObject;
	tryedPokemon: IpokemonObject;
};

const checkIfIsEqual = (value1: string | number, value2: string | number) =>
	value1 === value2;

const printTheDiferenceOfValues = (value1: number, value2: number): string => {
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

export default function CompareTable({ sortedPokemon, tryedPokemon }: Props) {
	const { height, weight, type1 } = sortedPokemon;
	const type2 = sortedPokemon.type2 || "None";

	return (
		<main className="card-main">
			<section className="card-status">
				<div>| Characteristic | Result |</div>
				<div>
					| Type 1 |{" "}
					{checkIfIsEqual(type1, tryedPokemon.type1) ? "Right" : "Wrong"} |
				</div>
				<div>
					| Type 2 |{" "}
					{checkIfIsEqual(type2, tryedPokemon.type2 || "None")
						? "Right"
						: "Wrong"}{" "}
					|
				</div>
				<div>
					| Height |{" "}
					{printTheDiferenceOfValues(
						parseInt(height),
						parseInt(tryedPokemon.height)
					)}{" "}
					|
				</div>
				<div>
					| Weight |{" "}
					{printTheDiferenceOfValues(
						parseInt(weight),
						parseInt(tryedPokemon.weight)
					)}{" "}
					|
				</div>
				{/* <div className="cardImg">&#63;</div> */}
			</section>
		</main>
	);
}
