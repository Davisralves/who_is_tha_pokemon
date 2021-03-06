const fetch = require("node-fetch");
import {
	Ipokemon,
	IpokemonObject,
	IpokemonDefaultObject,
	Ifirst151Pokemons,
} from "../interfaces/Pokemons";

const fetchFirst151Pokemons = async () => {
	const pokemons = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
	return await pokemons.json();
};

const getPokemonsDetailsPromises = async (
	first151Pokemons: Ifirst151Pokemons
) => {
	return first151Pokemons.results.map(async ({ url }: Ipokemon) => {
		const pokemonsDetails = await fetch(url);
		return await pokemonsDetails.json();
	});
};

const filterPokemonInfo = (
	pokemonsInfo: PromiseFulfilledResult<IpokemonDefaultObject>[]
) =>
	pokemonsInfo.map(
		(pokemonDetail: PromiseFulfilledResult<IpokemonDefaultObject>) => {
			const {
				name,
				types,
				height,
				weight,
				sprites: {
					other: {
						dream_world: { front_default: img },
					},
				},
			} = pokemonDetail.value;
			const pokemonObject: IpokemonObject = {
				name,
				type1: types[0].type.name,
				height,
				weight,
				img,
			};
			if (types[1]) {
				pokemonObject.type2 = types[1].type.name;
			}
			return pokemonObject;
		}
	);

export const resolvePromises = async (promisesArray: Promise<any>[]) => {
	const allPromises = await Promise.allSettled<any[]>(promisesArray);
	const resolvedPromises = allPromises.filter(
		(resolvedPromise) => resolvedPromise.status === "fulfilled"
	);
	return resolvedPromises;
};

const PokemonApi = {
	fetchPokemons: async () => {
		const first151Pokemons = await fetchFirst151Pokemons();
		const pokemonDetailsPromises = await getPokemonsDetailsPromises(
			first151Pokemons
		);
		const resolvedPromises = (await resolvePromises(
			pokemonDetailsPromises
		)) as PromiseFulfilledResult<IpokemonDefaultObject>[];
		const pokemonsWithDetails = filterPokemonInfo(resolvedPromises);
		return pokemonsWithDetails;
	},
};

export default PokemonApi;
