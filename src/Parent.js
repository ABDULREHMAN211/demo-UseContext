import logo from './logo.svg';
import Child from './Child';
import './App.css';

function Parent(props) {
  return (
    <div>
      parent
      <Child num={props.num}></Child>
    </div>
  );
}

export default Parent;