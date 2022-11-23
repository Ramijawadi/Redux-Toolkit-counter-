import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import {increment , decrement ,incrementWithAmount} from "./Redux/counter"


function App() {
const count = useSelector((state)=> state.counter.value);
const dispatch = useDispatch();

  return (
    <div className="App">
     <h1> the counter is {count}</h1>
<button onClick={()=> dispatch(increment())} >increment</button>
<button  onClick={()=>dispatch( decrement())} >decrement</button>
<button  onClick={()=>dispatch( incrementWithAmount(5))} >incrementWithAmount</button>



    </div>
  );
}

export default App;
