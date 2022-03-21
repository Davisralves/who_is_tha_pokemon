import { Request, Response, NextFunction } from "express";
import { PokemonService } from "../services/Pokemons";
import StatusCode from "../enums/statusCode";
import { IpokemonObject } from "../interfaces/Pokemons";
import { pokemonName } from "./middlewares/searchPokemon";

export const deletePokemon = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		const { name } = req.params as pokemonName;
		await PokemonService.deletePokemon(name.toLowerCase());
		return res.status(StatusCode.OK).json({ name });
	} catch (err) {
		const error = { status: StatusCode.INTERNAL_SERVER_ERROR, message: err };
		next(error);
	}
};
