import Navbar from './components/Navbar';
import Textarea from './components/Textarea';
// import About from './components/About';
import React from 'react'
import './App.css';
import { useState } from 'react';

function App() {
  const toggleModeFunction = () => {
    if (mode === "light"){
    setMode("dark")
    setModetext("Enable Light Mode")
    document.body.style.color = "white"
    document.body.style.backgroundColor = "black"
    }
    else{
      setMode("light")
      setModetext("Enable Dark Mode")
      document.body.style.color = "black"
      document.body.style.backgroundColor = "white"
      
    }
  }
  const [mode, setMode] = useState("light");
  const [modeText, setModetext] = useState("Enable Dark Mode");   
  return (
    <>
      <Navbar appName="Word Editor" mode={mode} toggleMode={toggleModeFunction} setText={modeText}/>
      <Textarea/>
      {/* <About/> */}
    </>
  );
}

export default App;
