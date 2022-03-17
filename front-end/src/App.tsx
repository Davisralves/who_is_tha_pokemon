import React, { useEffect, useState } from "react";
import "./App.css";
import "./css/header.css";
import { IpokemonObjects } from "./interfaces/Pokemons";
import Header from "./components/Header";
import Game from "./components/Game";
import pokemonDefaulObject from "./helpers/Pokemons";

function App() {
	const [pokemons, setPokemons] = useState(pokemonDefaulObject);
	const [gameOn, setGame] = useState(false);
	const [fetched, setFetched] = useState(false);

	useEffect(() => {
		const request = async () => {
			try {
				const response = await fetch(`http://${process.env.REACT_APP_BACK_END_PORT}/`);
				const pokemons = (await response.json()) as IpokemonObjects;
				setPokemons(pokemons);
				setFetched(true);
			} catch (err) {
				console.log(err);
			}
		};
		request();
	}, []);

	const startButton = (
		<button
			onClick={() => setGame(!gameOn)}
			className="button"
			disabled={false} // alterar para !fetched
		>
			Start
		</button>
	);

	return (
		<div className="App">
			<h1 className="title">Who is that Pokemon ?</h1>
			{gameOn ? <span /> : <Header pokemons={pokemons} />}
			{gameOn ? (
				<Game pokemons={pokemons} isFetched={fetched} setGameOn={setGame} />
			) : (
				startButton
			)}
		</div>
	);
}

export default App;
