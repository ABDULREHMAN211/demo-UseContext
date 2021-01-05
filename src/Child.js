import logo from './logo.svg';
import React, {useContext} from 'react';
import ValueContext from './ValueContext';
import './App.css';
function Child(props) {
    let value = useContext(ValueContext);
  return (
    <div>
      Child number is {value}
    </div>
  );
}

export default Child;