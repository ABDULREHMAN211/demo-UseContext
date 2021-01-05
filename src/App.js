import React, {useState} from 'react';
import Parent from './Parent';
import logo from './logo.svg';
import './App.css';
import ValueContext from './ValueContext';

function App() {
 let value = useState(47);
// value[0];
// value[1];
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