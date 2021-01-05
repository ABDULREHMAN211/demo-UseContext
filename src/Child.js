import logo from './logo.svg';
import React, {useContext} from 'react';
import ValueContext from './ValueContext';
import './App.css';
function Child() {
    let value = useContext(ValueContext);
    console.log("Value",value)
    let updatevalue = value[1]
  return (
    <div>
      Child number is {value[0]}
      <button onClick={()=>{updatevalue(++value[0]);
      }}>Update value</button>
    </div>
  );
}

export default Child;