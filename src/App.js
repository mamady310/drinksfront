import React from 'react';
import './App.css';

function App() {
  return (
   <li>
    <Link to="/"><li>Home</li></Link>
    <Link to="/Gin"> <li>Gin</li></Link>
    <Link to="/Brandy"><li>Brandy</li></Link>
    <Link to="/Rum"><li>Rum</li></Link>
    <Link to="/Tequila"><li>Tequila</li></Link>
    <Link to="/Vodka"> <li>Vodka</li></Link>
    <Link to="/Whiskey"><li>Whiskey</li></Link>
                
   </li>
  );
}

export default App;
