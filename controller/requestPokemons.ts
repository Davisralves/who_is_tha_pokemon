import { Request, Response, NextFunction } from "express";
import PokemonService from "../services/Pokemons";
import StatusCode from "../enums/statusCode";

export const requestPokemons = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		const allPokemons = await PokemonService.requestPokemons();
		return res.status(200).json(allPokemons);
	} catch (err) {
    const error = {status: StatusCode.INTERNAL_SERVER_ERROR, message: err}
    next(error);
	}
};
