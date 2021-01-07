import React, {useContext,useReducer } from 'react';
import numberReducer from './numberReducer';
function Child2() {
  let [state, dispatch] = useReducer(numberReducer,52);
  // console.log("Value",value)
  // let updatevalue = value[1]
return (
  <div>
    Child2 is {state}
    <button onClick={()=> {dispatch({type:'INCREMENT', val:67});  }}>INCREMENT</button>
    <button onClick={()=> { dispatch({type:'DECREMENT', val:45});  }}>DECREMENT</button>

  </div>
  );
}

export default Child2;