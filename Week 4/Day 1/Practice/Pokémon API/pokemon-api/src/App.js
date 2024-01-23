import './App.css';
import React, { useEffect, useState } from 'react';
function App() {

  const [pokemon, setPokemon] = useState([])

  useEffect(() => {
  
  fetch("https://pokeapi.co/api/v2/pokemon")
  .then(response => {
    return response.json();
  })
  .then(response => {
    setPokemon(response.results);
  })
  .catch(err=>{
    console.log(err);
  });
  }, []);
  
  return (
    <div className="App">
      <div>
      <button>Fetch Pokemon</button>     
      <ul>
        {
          pokemon.map((pokemonlist, index) => {
            return ( <li key = {index}>{pokemonlist.name}</li>)
          })
        }
      </ul>
      </div>
    </div>
  );
}

export default App;
