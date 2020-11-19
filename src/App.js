import React from "react";
import "./App.css";
import Header from './Components/Header';
import Picture from './Components/Picture';
import PicInfo from './Components/PicInfo';

function App() {
  return (
    <div className="App"> 
      <Header /> 
      <Picture/>
      <PicInfo/>
    </div>
  );
}

export default App;
