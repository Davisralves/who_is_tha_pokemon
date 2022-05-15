import { Link } from "react-router-dom";
import "../css/header.css";
import { IpokemonObjects } from "../interfaces/Pokemons";

type Props = {  
	pokemons: IpokemonObjects;
  isFetched: boolean;
};

export default function Header({ pokemons, isFetched }: Props) {
	return (
		<header>
			<div className="headerDiv">
				{/* <Link className="link" to="/HowToPlay">
					Como Jogar
				</Link> */}
        { isFetched ?  <Link className="link" to="Pokedex" state={{ pokemons }}>
					Pokedex
				</Link> : <a className="link">Loading...</a>}
	
			</div>
		</header>
	);
}
