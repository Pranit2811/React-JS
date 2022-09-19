// import logo from './logo.svg';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { useState } from 'react';
function App() {
  const [mode, setMode] = useState('light')
  const [text, setText] = useState('dark')
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      setText('light ')
      document.body.style.backgroundColor = 'grey'
    }
    else {
      setMode('light')
      setText('dark')
      document.body.style.backgroundColor = 'white'
    }
  }
  return (
    <>
      <Navbar title='Text-Utils' mode={mode} toggleMode={toggleMode} text={text} />
      <div className="container"><TextForm heading="Enter Your Text To Analyse" mode={mode} /></div>
      {/* <About/> */}
    </>
  );

}

export default App;
