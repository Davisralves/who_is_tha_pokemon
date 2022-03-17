import { IpokemonObject, IpokemonObjects } from "../interfaces/Pokemons";
import PokedexHeader from "./PokedexHeader";
import PokemonCard from "./PokemonCard";
import { useLocation } from "react-router-dom";
import "../css/pokedex.css";

type pokemonLocation = {
	state: {
		pokemons: IpokemonObjects;
	};
};

export default function Pokedex() {
	const location = useLocation();
	const {
		state: { pokemons },
	} = location as pokemonLocation;
	return (
		<main className="pokedex">
			<h1 className="title">Pokedex</h1>
			<PokedexHeader />
			<section className="pokedex-main-section">
				{pokemons ? (
					pokemons.map((pokemon: IpokemonObject) => (
						<PokemonCard pokemon={pokemon} />
					))
				) : (
					<span>Loading</span>
				)}
			</section>
		</main>
	);
}
