import { Request, Response, NextFunction } from "express";
import PokemonService from "../services/Pokemons";
import StatusCode from "../enums/statusCode";

export const deleteAllPokemons = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		const response = await PokemonService.deleteAllPokemons();
    req.body.deletedPokemons = response;
		return next();
	} catch (err) {
    const error = {status: StatusCode.INTERNAL_SERVER_ERROR, message: err}
    next(error);
	}
};

