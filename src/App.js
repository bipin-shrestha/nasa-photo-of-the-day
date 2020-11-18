import React from "react";
import "./App.css";
import Header from './Components/Header';
import PictureCard from "./Components/Picture";
import Picture from './Components/Picture';
import RandomPic from './Components/RandomPic';

function App() {
  return (
    <div className="App"> 
      <Header/>
      <Picture/>
      <p>
        <span role="img" aria-label='go!'>🚀</span>!
      </p>
    </div>
  );
}

export default App;
