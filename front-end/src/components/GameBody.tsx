import {IpokemonObject} from '../interfaces/Pokemons';
import { useState } from 'react';

type Props = {
	sortedPokemon: IpokemonObject;
  endGame: Function;
};

enum is {
  correct = 'Correct',
  near = 'Near',
  incorrect = 'Incorrect',
}


export default function GameBody({sortedPokemon, endGame}: Props) {
  const [attempts, setAttempts] = useState(5);
  const [inputValue, setInputValue] = useState('');
  
  const handleSubmit = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    if(inputValue === sortedPokemon.name) {
      
    }
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  }

  const { name, type1, weight, height } = sortedPokemon;
  return (
    <section>
    <div>
      <h5>{`Remaining attempts: ${attempts} `}</h5>
    </div>
    <form>    
      <div>
      <label htmlFor={name}>Name: </label>
      <input onChange={(e) => handleChange(e)} id={name} type={name} />
    </div>
      <button onClick={(event) => handleSubmit(event)}>Submit</button>
    </form>
    </section>
  ) 
}