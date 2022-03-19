import { Request, Response, NextFunction } from "express";
import PokemonService from "../services/Pokemons";

const requestPokemons = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		const allPokemons = await PokemonService.requestPokemons();
		return res.status(200).json(allPokemons);
	} catch (err) {
		console.log(err);
    next(err);
	}
};

export default requestPokemons;
