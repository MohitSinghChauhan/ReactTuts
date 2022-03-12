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

//* While passing object or array we also need to pass keys
//* Keys help React identify which items have changed, are added, or are removed. Keys should be given to the elements inside the array to give the elements a stable identity.
//* if not then we get warning : Warning: Each child in a list should have a unique "key" prop.

const gadgetLists = ["iPad","Macbook","ROG","iPhone"]

//! Pass array as a prop to a component & destructure it
// function GadgetLists(props){
function GadgetLists({gadget}){

  return(
    <h1>
   <ul>
     {/* {props.gadget.map( */}
     {gadget.map(
       gadgets => <li>{gadgets}</li>
     )}
   </ul>
   </h1>
  )
}

const gadgetObj = [
  {id:1, prodName:"Macbook", company:"Apple"},
  {id:2, prodName:"Lamp", company:"Wipro"},
  {id:3, prodName:"Speaker", company:"JBL"},
  {id:4, prodName:"Android Mobile", company:"IN"},
]

//! Pass array as a prop to a component & destructure it
function DisplayGadgetObject({gadget}){

  return(
    <div>
     {gadget.map(
       gadget => {
       return(
       <div>
         <h1>{gadget.prodName}</h1>
         <p>By {gadget.company}.</p>
       </div>
       )}
      )}
    </div>
  )
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
      {/* for passing Number we use curly braces {} */}
      <IdCard name='Mohit Singh Chauhan' age={21} />
      <IdCard name='Munna Bhaiya' age={26} />
      <IdCard name='Jojo Rabbit' age={16} />
      <IdCard name='Hana Grace Lancaster' age={23} />

      {/* components for explaning using props with array   */}
      {/* for passing Arrays we use curly braces {} */}
      <GadgetLists gadget={gadgetLists} />
        
      <hr></hr>

      {/* components for explaning using props with objects   */}
      {/* for passing Objects we use curly braces {} */}
      <DisplayGadgetObject gadget={gadgetObj} />

    </div>
  );
}

export default App;
