import React from "react";
import "./App.css";
import Header from './Components/Header';
import Picture from './Components/Picture';
import PicInfo from './Components/PicInfo';
import styled from 'styled-components';

const StyleContent = styled.div`
      max-width: 100vw;
      height : 10vh;
      padding: 50px;
      border: 3px solid blue;
      border-radius: 5px; 
      background-color: black;
      color: crimson;  
      font-size: 18px;
      font-weight: bold;
      `
 const StyleItem = styled.div`
      max-width: 100vw;
      height : 10vh;     
      border: 3px solid crimson;
      border-radius: 5px; 
      background-color: black;
      color: crimson;  
      font-weight: bold;
      `
 const HoverText = styled.p`
      color: crimson;
      :hover {
        color: white;
        cursor: pointer;
      }
    `

function App() {
  return (
    <div className="App"> 
     <StyleItem><HoverText><Header/></HoverText></StyleItem>  
      <Picture/>
     <StyleContent><HoverText><PicInfo/></HoverText></StyleContent>
      
    </div>
  );
}

export default App;
