// import logo from './logo.svg';
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import { useState } from "react";
import Alert from "./components/Alert";
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
  
} from "react-router-dom";
function App() {
  const [mode, setMode] = useState("light");
  const [text, setText] = useState("dark");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    console.log(message, type);
    setAlert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      setText("light ");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark Mode has been enabled", "success");
    } else {
      setMode("light");
      setText("dark");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been enabled", "success");
    }
  };
  return (
    <>
      <Router>
        <Navbar
          title="Text-Utils"
          mode={mode}
          toggleMode={toggleMode}
          text={text}
        />

        <Alert alert={alert} />
        <div className="container">
          <Switch>
            <Route path="/about" element={<About />}>
              
            </Route>
            <Route path="/home" element={ <TextForm
                heading="Enter Your Text To Analyse"
                showAlert={showAlert}
                mode={mode}
              />}>
             
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
