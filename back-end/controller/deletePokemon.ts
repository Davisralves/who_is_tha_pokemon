import { Request, Response, NextFunction } from "express";
import { PokemonService } from "../../services/Pokemons";
import StatusCode from "../enums/statusCode";
import { IpokemonObject } from "../interfaces/Pokemons";

export const deletePokemon = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		const { name } = req.body as IpokemonObject;
		const id = await PokemonService.deletePokemon(name);
		if (id) {
			res.status(StatusCode.OK).json({ name });
		}
		throw "could not delete this pokemon";
	} catch (err) {
		const error = { status: StatusCode.INTERNAL_SERVER_ERROR, message: err };
		next(error);
	}
};
