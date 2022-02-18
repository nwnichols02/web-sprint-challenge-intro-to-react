import React, { useState, useEffect } from 'react';
import Character from './components/Character';
import './App.css';
import axios from 'axios';
import styled from 'styled-components';


const MiddleStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 5%;
`;


const App = () => {

  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  const [characters, setCharacters] = useState([]);

  useEffect(() => {
      axios.get('https://swapi.dev/api/people')
        .then(res => {
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
      <MiddleStyle className='Middle'>
      {characters.map((character, index) => {
          return <Character key={index} info={character} ></Character>
        })
      }
      </MiddleStyle>
      
    </div>
  );
  }
  
  export default App;


