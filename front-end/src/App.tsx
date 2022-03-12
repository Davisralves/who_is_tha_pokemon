import React, { useEffect, useState } from 'react';
import './App.css';
function App() {



  const [message, setMessage] =  useState(100)

  useEffect( () => {
    const request = async () => {
      const response = await fetch("http://localhost:8000");
      console.log(response);
      setMessage(response.status);
    }; request()}
    , [])
  return (
    <div className="App">
      <h1>{message}</h1>
    </div>
  );
}

export default App;
