import { Request, Response, NextFunction } from "express";
import PokemonsModel from "../models/Pokemons";

const postFirst151Pokemons = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		const pokemons = await PokemonsModel.registerFirst151Pokemons();
    console.log(pokemons);
		return res.status(201).json(pokemons);
	} catch (err) {
		console.log(err);
    next(err);
	}
};

export default postFirst151Pokemons;
