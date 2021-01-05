import React, {useState} from 'react';
import Parent from './Parent';
import logo from './logo.svg';
import './App.css';

function App() {
  let [number, setnumber] = useState(47);
  return (
    <div>
      Hello World
      <Parent num={number}></Parent>
      <button onClick={()=>{setnumber(++number)}}>IncNumber</button>
    </div>
  );
}

export default App;
