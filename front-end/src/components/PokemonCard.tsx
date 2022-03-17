import { IpokemonObject } from "../interfaces/Pokemons";
import "../css/pokemonCard.css";
import {capitalizeFirstLetter} from '../helpers/Pokemons';

type Props = {
	pokemon: IpokemonObject;
  key?:number
};


export default function PokemonCard({ pokemon }: Props) {
	const { name, type1, height, weight, img } = pokemon;
	const capitalizedName = capitalizeFirstLetter(name);
	return (
		<div className="card-main">
			<div className="card-status">
				<div>Name: {capitalizedName}</div>
				<div>Height: {height}</div>
				<div>Weight: {weight}</div>
				<div className="card-types">
					<span className="type">{type1}</span>
					{pokemon.type2 ? (
						<span className="type">{pokemon.type2}</span>
					) : (
						<span />
					)}
				</div>
			</div>
			<img className="cardImg " alt="Pokemon" src={img} />
		</div>
	);
}
