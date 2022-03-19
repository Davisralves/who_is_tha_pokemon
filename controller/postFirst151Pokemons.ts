import { Request, Response, NextFunction } from "express";
import PokemonService from "../services/Pokemons";
import StatusCode from "../enums/statusCode";
const postFirst151Pokemons = async (
	_req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		const pokemons = await PokemonService.registerFirst151Pokemons();
		return res.status(201).json(pokemons);
	} catch (err) {
    const error = {status: StatusCode.INTERNAL_SERVER_ERROR, message: err}
    next(error);
	}
};

export default postFirst151Pokemons;
