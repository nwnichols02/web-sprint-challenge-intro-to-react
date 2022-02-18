import React, { useState, useEffect } from 'react';
import Character from './components/Character';
import './App.css';
import axios from 'axios';


const App = () => {

  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  const [characters, setCharacters] = useState([]);

  useEffect(() => {
      axios.get('https://swapi.dev/api/people')
        .then(res => {
          console.log(res.data)
          setCharacters(res.data);
        })
        .catch(err => {
          console.error(err);
        })
  }, []);

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      {characters.map((character, index) => {
          return <Character key={index} info={character} ></Character>
        })
      }
    </div>
  );
  }
  
  export default App;

//[GET] https://swapi.dev/api/people use to obtain characters

//set list of characters to state useState(...)

//name
//birth_year
//

