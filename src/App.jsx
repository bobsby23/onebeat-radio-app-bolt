import React from 'react';
import RadioPlayer from './RadioPlayer';
import './App.css';
import { FaHipHop, FaMicrophone } from 'react-icons/fa';
import { IoMusicalNotesSharp } from 'react-icons/io5';

function App() {
  console.log('App rendered');
  return (
    <div className="App">
      <div className="station-card left">
        <FaMicrophone className="station-icon" />
        <h3>One Beat BG-Rap</h3>
        <a href="#" className="station-link">Listen</a>
      </div>
      <div className="main-player">
        <h1>One Beat Radio</h1>
        <h2><IoMusicalNotesSharp /> One Beat Techno</h2>
        <RadioPlayer />
      </div>
      <div className="station-card right">
        <FaHipHop className="station-icon" />
        <h3>One Beat Hip-Hop</h3>
        <a href="#" className="station-link">Listen</a>
      </div>
    </div>
  );
}

export default App;