import { useEffect, useState } from "react";
import "./App.css";

//* A hook is a function that allows you to add functionality to a react component.
//* React has no. of built-in hooks to handle common usecases.
//* useState is a hook.
//* What we pass to useState hook(or function) is initial state of Application.
//* useState returns a pair of, a variable with the Current State Value and Setter Function to update it.

function Profile() {
  const [name, setName] = useState("Mohit");
  const [isLiked, setIsLiked] = useState("Not Liked");

  return (
    <>
      <h1>Current WebD Associate Head : {name}</h1>
      <button onClick={() => setName("XYZ")}>After Mohit</button>
      <h1>{isLiked}</h1>
      <button onClick={() => setIsLiked("Liked")}>Like</button>
    </>
  );
}

//! React will re-render the component tree whenever the state changes.

//* useEffect is designed to work in conjunction with other stateful hooks like useState and useReducer.

//* Without Dependency Array in useEffect, When we look at the console, as we type into that first field the useEffects for both field 1 and field 2 are being called.

//* To Prevent this we use DEPENDENCY ARRAY 
//* The second argument that is sent to useEffect is called the DEPENDENCY ARRAY. 

//* In that array we will use(or put) the state variable that we want to listen for changes in.


const UseEffectTut = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  useEffect( () => {
    console.log(`Field 1: ${firstName}`);
  }, [firstName])

  useEffect( () => {
    console.log(`Field 2: ${lastName}`);
  }, [lastName])

  // useEffect( () => {
  //   console.log(`Field 2: ${lastName}`);
  // }, [lastName, firstName])

  return (
    <>
      <b>
        <label>First Name: </label>
      </b>
      <input
        value={firstName}
        type='text'
        onChange={(e) => {
          setFirstName(e.target.value);
        }}
      ></input>
      <b>
        <br></br>
        <label>Last Name: </label>
      </b>
      <input
        value={lastName}
        type='text'
        onChange={(e) => {
          setLastName(e.target.value);
        }}
      ></input>
    </>
  );
};

function Checkbox() {
  const [checked, setChecked] = useState(false);

  //* The Effect Hook, just like the name implies, carries out an effect each time there is a state change.
  //* By default, it runs after the first render and every time the state is updated.
  useEffect(() => console.log("checked"));
  // console.log("Independent Artist")
  return (
    <>
      <input
        type='checkbox'
        value={checked}
        onChange={() => setChecked((checked) => (checked = !checked))}
      ></input>
      <p style={{ display: "inline" }}>{checked ? "Checked" : "Not Checked"}</p>
    </>
  );
}

function App() {
  return (
    <>
      <div className='App'>
        <Profile />
        <hr></hr>
      </div>
      <Checkbox />
      <hr></hr>
      <div className='App'>
        <UseEffectTut />
      </div>
    </>
  );
}

export default App;
