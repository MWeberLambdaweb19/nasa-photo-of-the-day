import React from "react";
import "./App.css";
import AsteroidCard from "./components/AsteroidCard.js";
import TestContainer from "./components/TestContainer.js";
function App() {
  console.log(process.env.TEST)
  return (
    <div className="App">
    <h1>{process.env.TEST}</h1>
    {/* <AsteroidCard /> */}
    <TestContainer />
    </div>
  );
}

export default App;
