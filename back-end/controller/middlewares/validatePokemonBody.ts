import { Request, Response, NextFunction } from "express";
import StatusCode from "../../enums/statusCode";
import { IpokemonObject } from "../../interfaces/Pokemons";
import { AllAreString } from "./helpers";
import { PokemonService } from "../../../services/Pokemons";

export const validatePokemon = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		const { name, type1, weight, height, img } = req.body as IpokemonObject;
		const type2 = req.body.type2;
		if (!AllAreString([name, type1, weight, height, img, type2])) {
			throw "All values should be a string";
		}
		const searchPokemon = await PokemonService.getPokemonByName(name);
		if (searchPokemon.length === 0) {
			return next();
		}
		throw "Name alredy exist";
	} catch (err) {
		const error = { status: StatusCode.BAD_REQUEST, message: err };
		next(error);
	}
};
