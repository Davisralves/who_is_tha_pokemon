import { Request, Response, NextFunction } from 'express';
import StatusCode from "../../enums/statusCode";
import { IpokemonObject } from '../../interfaces/Pokemons';
import PokemonService from '../../services/Pokemons';

export const searchPokemon = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { name } = req.body as IpokemonObject;
    if(name) {
      const searchedPokemon = await PokemonService.getPokemonByName(name);
      if(searchedPokemon) {
        next();
      } throw 'Pokemon not found';
    } throw 'Name must be true'
  } 
  catch(err) {
    const error = {status: StatusCode.BAD_REQUEST, message: err}
    next(error);
  }
};