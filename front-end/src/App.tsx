import React, { useEffect, useState } from 'react';
import './App.css';
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
    <div className="App">
      <h2>Who is that Pokemon ?</h2>
      <Header/>
      <span>Start</span>
      <span>Pokemons</span>
      { /* <Game /> */} 
    </div>);
}

export default App;
