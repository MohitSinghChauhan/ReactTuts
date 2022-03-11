import "./App.css";
import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);

  return (
    <div className='App'>
      {/* <button onClick={()=>{setCounter(-8)}}>+</button>  */}
      <button
        onClick={() => {
          setCounter((prevCount) => prevCount - 1);
        }}
      >
        -
      </button>
      <h1>{counter}</h1>
      <button
        onClick={() => {
          setCounter((prevCount) => prevCount + 1);
        }}
      >
        +
      </button>
    </div>
  );
}

export default App;
