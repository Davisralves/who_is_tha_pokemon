export interface Ipokemon {
	name: string;
	url: string;
}

export default interface IpokemonType {
	type: {
		name: string;
		url: string;
	};
}

export interface IpokemonDefaultObject {
	name: string;
	types: IpokemonType[];
	height: string;
	weight: string;
	sprites: { other: { dream_world: { front_default: string } } };
}

export interface IpokemonObject {
	name: string;
	type1: string;
	type2?: string;
	height: string;
	weight: string;
  img: string,
}

export interface Ifirst151Pokemons {
	results: Ipokemon[];
}

export interface IdataBasePokemonObject {
id: number;
imagem_url: string;
pokemon_height: number,
pokemon_name: string;
pokemon_weight: number;
type1: string;
type2: string;
}
