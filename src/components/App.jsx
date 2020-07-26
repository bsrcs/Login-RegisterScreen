import React from "react";
import Login from "./Login";

var userIsLogged = true;

const currentTime = new Date().getHours();

console.log(currentTime);

function App() {
  return (
    <div className="container">
      {/*{currentTime > 11  && <h1>Why are you still working?</h1>}*/}
      {userIsLogged ? <h1>Hello</h1>  : <Login />}
    </div>
  );
}

export default App;
