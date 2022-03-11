import "./App.css";
import { useState } from "react";

//! Use of Props
//* function IdCard(props) {
//*   console.log(props);
//*   console.log(Object.keys(props));
//*   console.log(Object.values(props));
//*   return (
//*     <>
//*       <h1>Name: {props.name}</h1>
//*       <h1>Age: {props.age}</h1>
//*       <hr></hr>
//*     </>
//*   );
//* }

//! Another way of using props little bit cleaner
function IdCard({name,age}) {

  return (
    <>
      <h1>Name: {name}</h1>
      <h1>Age: {age}</h1>
      <hr></hr>
    </>
  );
}

function App() {
  const [counter, setCounter] = useState(0);

  return (
    //* Counter App
    <div className='App'>
      {/* <button onClick={()=>{setCounter(-8)}}>+</button>  */}

      <button onClick={() => {
          setCounter((prevCount) => prevCount - 1);
        }}
      >-</button>

      <h1>{counter}</h1>

      <button onClick={() => {
          setCounter((prevCount) => prevCount + 1);
        }}
      >+</button>
      <hr></hr>

      {/* components for explaning props   */}
      {/* for Number we use curly braces {} */}
      <IdCard name='Mohit Singh Chauhan' age={21} />
      <IdCard name='Munna Bhaiya' age={26} />
      <IdCard name='Jojo Rabbit' age={16} />
      <IdCard name='Hana Grace Lancaster' age={23} />
    </div>
  );
}

export default App;
