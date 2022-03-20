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
	const [input, setInput] = useState("");
  const [message, setMessage] = useState('');
  const [selectedPokemon, selectPokemon] = useState('');

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setInput(event.target.value);
	};

  const handleSelect = () => {
    const filteredPokemons = pokemons.filter((pokemons) => pokemons.name.includes(input))
    if(filteredPokemons.length === 1) {
      setMessage('Selected !')
      return selectPokemon(filteredPokemons[0].name)
    } return setMessage('Have more than one pokemon in list. Please type the complete name')
  }

  const handleDelete = () => {
    if(selectedPokemon === '') {
      return setMessage('A pokemon must be Selected first')
    } else {
      setMessage('Deleting...');
      
    } 

  }

	const location = useLocation();
	const {
		state: { pokemons },
	} = location as pokemonLocation;
	if (pokemons.length > 2 && loading) {
		setLoading(false);
	}

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
			<button
				onClick={handleSelect}
			>
				{" "}
				Select
			</button>
			<button
				onClick={handleDelete}
			>
				{" "}
				Delete
			</button>
			<button
				// onClick={(event) => handleSubmit(event)}
			>
				{" "}
				Edit
			</button>
      <h5>{message}</h5>
			<section className="pokedex-main-section">
				{!loading ? (
					pokemons.map((pokemon: IpokemonObject, index: number) => (
            pokemon.name.includes(input) ?
						<PokemonCard pokemon={pokemon} key={index} selected={pokemon.name === selectedPokemon}/>
            : ''
					))
				) : (
					<h3>Loading...</h3>
				)}
			</section>
		</main>
	);
}
