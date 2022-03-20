import { Request, Response, NextFunction } from "express";
import { PokemonService } from "../../services/Pokemons";
import StatusCode from "../enums/statusCode";
import { IpokemonObject } from "../interfaces/Pokemons";

export const registerNewPokemon = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		const pokemon = req.body as IpokemonObject;
		await PokemonService.registerNewPokemon(pokemon);
		res.status(StatusCode.CREATED).json(pokemon);
	} catch (err) {
		const error = { status: StatusCode.INTERNAL_SERVER_ERROR, message: err };
		next(error);
	}
};
