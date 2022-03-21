import { IpokemonObjects } from "../interfaces/Pokemons"
const pokemonDefaulObject: IpokemonObjects = [
  {
    name: "pikachu",
    type1: "eletric",
    height: "0,5m",
    weight: "6kg",
    img: "null"
  },
  {
    name: "bulbasaur",
    type1: "grass",
    height: "0,7m",
    weight: "6,9kg",
    img: "null"
  }
];

export const capitalizeFirstLetter = (value: string) => {
	return value.charAt(0).toUpperCase() + value.slice(1);
};

export default pokemonDefaulObject;