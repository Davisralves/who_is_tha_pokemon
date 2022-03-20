import { Request, Response, NextFunction } from "express";
import { PokemonService } from "../../services/Pokemons";
import StatusCode from "../enums/statusCode";

export const postFirst151Pokemons = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		const { deletedPokemons } = req.body;
		const pokemons = await PokemonService.registerFirst151Pokemons();
		return res.status(201).json({ pokemons, deletedPokemons });
	} catch (err) {
		const error = { status: StatusCode.INTERNAL_SERVER_ERROR, message: err };
		next(error);
	}
};
