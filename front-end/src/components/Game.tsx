import { useState } from "react";
import { IpokemonObjects } from "../interfaces/Pokemons";
import GameBody from './GameBody'
import Result from './Result';

type Props = {
	pokemons: IpokemonObjects;
	isFetched: boolean;
};

export enum GameState {
    inProgress = 0, // false
    failed = 1,     // true
    success = 2,    // true
  }



const sortNumberFrom0To = (length: number): number => {
  const max = length;
  return Math.round(Math.random() * max);
}


export default function Game({ pokemons, isFetched }: Props) {

  const [gameResult, setGameResult ] = useState(GameState.inProgress);

  const endGame = (gameResponse: GameState) => {
    if(gameResponse === GameState.success) {
      setGameResult(GameState.success);
    } setGameResult(GameState.failed);
  }

  const restartGame = (gameResponse: GameState) => {
    setGameResult(GameState.inProgress);
  }

	const loading = <h3>Loading...</h3>;
  const sortedNumber = sortNumberFrom0To(pokemons.length);
  const sortedPokemon = pokemons[sortedNumber];
  console.log(sortedPokemon);
	return (
		<div>
			{isFetched ? <GameBody sortedPokemon={sortedPokemon} endGame={endGame} /> : loading}
      <Result GameState={gameResult} sortedPokemon={sortedPokemon} />
		</div>
    
	);
}
