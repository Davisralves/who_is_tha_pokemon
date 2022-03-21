import { Request, Response, NextFunction } from "express";
import StatusCode from "../../enums/statusCode";
import { PokemonService } from "../../services/Pokemons";

 export type pokemonName  = {
  name: string,
}

export const searchPokemon = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		const { name } = req.params as pokemonName;
		if (name) {
			const searchedPokemon = await PokemonService.getPokemonByName(name);
			if (searchedPokemon) {
				return next();
			}
			throw "Pokemon not found";
		}
		throw "Name must be true";
	} catch (err) {
		const error = { status: StatusCode.BAD_REQUEST, message: err };
		next(error);
	}
};
