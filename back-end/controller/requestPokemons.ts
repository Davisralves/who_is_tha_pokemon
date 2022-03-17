import { Request, Response, NextFunction } from "express";
import PokemonService from "../services/Pokemons";

const requestPokemons = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		const pokemons = await PokemonService.requestPokemons();
		return res.status(200).json(pokemons);
	} catch (err) {
		next(err);
	}
};

export default requestPokemons;
