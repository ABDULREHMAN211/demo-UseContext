import logo from './logo.svg';
import './App.css';

function Child(props) {
  return (
    <div>
      Child number is {props.num}
    </div>
  );
}

export default Child;