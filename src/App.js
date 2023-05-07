import Navbar from './components/Navbar';
import Textarea from './components/Textarea';
// import About from './components/About';
import React from 'react'
import './App.css';
import { useState } from 'react';
import Alert from './components/Alert';

function App() {
  const toggleModeFunction = () => {
    if (mode === "light"){
    setMode("dark")
    setModetext("Enable Light Mode")
    document.body.style.color = "white"
    document.body.style.backgroundColor = "black"
    showAlert("Enabling dark mode", "success")
    }
    else{
      setMode("light")
      setModetext("Enable Dark Mode")
      document.body.style.color = "black"
      document.body.style.backgroundColor = "white"
      showAlert("Enabling Light mode", "success")
      
    }
  }
 const showAlert = (message, type) => {
    setAlert({
      msg : message, 
      type : type,
    });
    setTimeout(() => {
      setAlert(null)
  }, 1500)
  }
  const [alert, setAlert] = useState(null)
  const [mode, setMode] = useState("light");
  const [modeText, setModetext] = useState("Enable Dark Mode");   
  return (
    <>
      <Navbar appName="Word Editor" mode={mode} toggleMode={toggleModeFunction} setText={modeText}/>
      <Alert alert={alert}/>
      <Textarea showAlert={showAlert}/>
      {/* <About/> */}
    </>
  );
}

export default App;
