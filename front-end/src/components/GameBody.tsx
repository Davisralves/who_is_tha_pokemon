import {IpokemonObject} from '../interfaces/Pokemons';
import Input from '../helpers/Input';

type Props = {
	sortedPokemon: IpokemonObject;
};

enum is {
  correct = 'Correct',
  near = 'Near',
  incorrect = 'Incorrect',
}

export default function GameBody({sortedPokemon}: Props) {
  const { name, type1, weight, height } = sortedPokemon;
  
  return (
    <form>
      <Input text="Name" type="text" />
      <button>Submit</button>
    </form>
  ) 
}