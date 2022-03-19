import { Request, Response, NextFunction } from "express";
import PokemonService from "../services/Pokemons";
import StatusCode from "../enums/statusCode";
import { IpokemonObject } from "../interfaces/Pokemons";

export const editPokemon = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
    const [currentPokemon, EditedPokemon ] = req.body as IpokemonObject[];
    const id = await PokemonService.editPokemon(currentPokemon, EditedPokemon);
    if(id) {
      res.status(StatusCode.ACCEPTED).json({EditedPokemon});
    } throw 'could not edit this pokemon'
	} catch (err) {
    const error = {status: StatusCode.INTERNAL_SERVER_ERROR, message: err}
    next(error);
	}
};

