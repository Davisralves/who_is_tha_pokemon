import { Request, Response, NextFunction } from "express";
import PokemonService from "../services/Pokemons";

const postFirst151Pokemons = async (
	_req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		const pokemons = await PokemonService.registerFirst151Pokemons();
		return res.status(201).json(pokemons);
	} catch (err) {
    const error = {status: 500, message: err}
    next(error);
	}
};

export default postFirst151Pokemons;
