import logo from './logo.svg';
import Child from './Child';
import './App.css';

function Parent(props) {
  return (
    <div>
      parent
      <Child></Child>
    </div>
  );
}

export default Parent;