import { IpokemonObject, IpokemonObjects } from "../interfaces/Pokemons";
import PokedexHeader from "./PokedexHeader";
import PokemonCard from "./PokemonCard";
import { useLocation } from "react-router-dom";
import "../css/pokedex.css";
import { useState } from "react";

type pokemonLocation = {
	state: {
		pokemons: IpokemonObjects;
	};
};


export default function Pokedex() {
  const [loading, setLoading] = useState(true);

	const location = useLocation();
	const {
		state: { pokemons },
	} = location as pokemonLocation;
  if(pokemons.length > 2 && loading) {
    setLoading(false);
  }

	return (
		<main className="pokedex">
			<h1 className="title">Pokedex</h1>
			<PokedexHeader />
			<section className="pokedex-main-section">
				{!loading ? (
					pokemons.map((pokemon: IpokemonObject, index: number) => (
						<PokemonCard pokemon={pokemon} key={index} />
					))
				) : (
					<h3>Loading...</h3>
				)}
			</section>
		</main>
	);
}
