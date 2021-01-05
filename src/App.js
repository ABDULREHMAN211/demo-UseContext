import React, {useState} from 'react';
import Parent from './Parent';
import logo from './logo.svg';
import './App.css';
import ValueContext from './ValueContext';

function App() {
 // let [number, setnumber] = useState(47);
 let value=81;
  return (
  <ValueContext.Provider value={value}>
    <div>
      Hello World
      <Parent></Parent>
    </div>
    </ValueContext.Provider>
      );
}

export default App;