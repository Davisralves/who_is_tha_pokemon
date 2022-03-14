import React, { useEffect, useState } from 'react';
import './App.css';
import './css/header.css';
import {IpokemonObjects} from './interfaces/Pokemons';
import Header from './components/Header';
function App() {



  const [message, setMessage] =  useState('oi')

  useEffect( () => {
    const request = async () => {
      const response = await fetch("http://localhost:8000/");
      const pokemons = await response.json() as IpokemonObjects;
      setMessage(pokemons[0].name);
    }; request()}
    , []);

  return (
    <div className='App'>
      <h1 className='title'>Quem é esse Pokémon ?</h1>
      <Header/>
      <button className='button'>Começar</button>
    </div>);
}

export default App;
