import React, { useEffect, useState } from 'react';
import './App.css';
import './css/header.css';
import {IpokemonObjects} from './interfaces/Pokemons';
import Header from './components/Header';
import Game from './components/Game';
import pokemonDefaulObject from './helpers/Pokemons';

function App() {


  const [pokemons, setPokemons] =  useState(pokemonDefaulObject);
  const [gameOn, setGame] = useState(false);

  useEffect( () => {
    const request = async () => {
      const response = await fetch("http://localhost:8000/");
      const pokemons = await response.json() as IpokemonObjects;
      setPokemons(pokemons);
    }; request()}
    , []);

  return (
    <div className='App'>
      <h1 className='title'>Quem é esse Pokémon ?</h1>
      <Header/>
      <button onClick={() => setGame(!gameOn)} className='button'>Começar</button>
      {gameOn ? <Game pokemons={ pokemons } isFetched={true} /> : <span />}
    </div>);
}

export default App;
