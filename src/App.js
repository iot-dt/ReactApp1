import Navbar from './components/Navbar';
// import Textarea from './components/Textarea';
import About from './components/About';
import './App.css';

function App() {
  return (
    <>
      <Navbar appName="Word Editor"/>
      {/* <Textarea/> */}
      <About/>
    </>
  );
}

export default App;
