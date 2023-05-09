import Navbar from './components/Navbar';
import Textarea from './components/Textarea';
// import About from './components/About';
import React from 'react'
import './App.css';
import { useState } from 'react';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   // Link
// } from "react-router-dom";

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
      <div className='container'>
      <Textarea showAlert={showAlert}/>
    {/* <Router>
      <Switch>
          <Route exact path="/about">
          <About/>
          </Route>
          <Route exact path="/">
            
          </Route> 
        </Switch>
    </Router> */}
     </div>
    </>
  );
}

export default App;
