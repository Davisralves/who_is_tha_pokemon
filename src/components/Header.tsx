import { Link } from "react-router-dom";
import "../css/header.css";
import { IpokemonObjects } from "../interfaces/Pokemons";

type Props = {
	pokemons: IpokemonObjects;
};

export default function Header({ pokemons }: Props) {
	return (
		<header>
			<div className="headerDiv">
				<Link className="link" to="/HowToPlay">
					Como Jogar
				</Link>
				<Link className="link" to="Pokedex" state={{ pokemons }}>
					Pokedex
				</Link>
			</div>
		</header>
	);
}
