import { Request, Response, NextFunction } from "express";
import StatusCode from "../enums/statusCode";
import { IpokemonObject } from "../interfaces/Pokemons";
import { AllAreString, AllAreNumbers } from "./middlewares/helpers";
import { PokemonService } from "../services/Pokemons";

export const validateNewPokemon = async (
	req: Request,
	_res: Response,
	next: NextFunction
) => {
	try {
		const [currentPokemon, EditedPokemon] = req.body;
		const { name, type1, weight, height, img } =
			EditedPokemon as IpokemonObject;
		const type2 = req.body.type2 || 'none';
		if (!AllAreString([name, type1, img, type2]) && !AllAreNumbers([weight, height])) {
			throw "All values should be valid";
		}
		const searchPokemon = await PokemonService.getPokemonByName(name);
		if (searchPokemon.length === 0 && currentPokemon.name !== name ) {
			return next();
		} throw "Name alredy exist";
	} catch (err) {
		const error = { status: StatusCode.BAD_REQUEST, message: err };
		next(error);
	}
};
