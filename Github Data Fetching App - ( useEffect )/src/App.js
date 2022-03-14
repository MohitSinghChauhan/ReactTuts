import { useState, useEffect } from "react";
import "./App.css";



let userInput = window.prompt("Enter Username: ");
const GithubUser = ({ username }) => {
  const [data, setData] = useState(null);


  //! We can also use the useEffect hook in order to fetch some data
  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then((res) => res.json())
      .then(setData)
      .catch((err) => console.err);
  }, [username]);

  if (data) {
    return (
      <>
        <br></br>
        <img src={data.avatar_url} width='100px' alt=''></img>
        <h1>Name: {data.login}</h1>
        <p>{data.bio}</p>
        <h2>
          Twitter Username:{" "}
          {data.twitter_username ? data.twitter_username : "NA"}
        </h2>
        <h1>Followers: {data.followers}</h1>
        <h1>Following: {data.following}</h1>
      </>
    );
  } else return null;
};

function App() {
  return (
    <div className='App'>
      <GithubUser username={userInput} />
    </div>
  );
}

export default App;
