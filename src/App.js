import "./App.css";
import Frame from "./components/Frame";
import logo from "./images/logo.svg";
//import { useState } from "react";
//import Display from "./components/Display";
//import TipButtons from "./components/TipButtons";

function App() {
  //const [tip, setTip] = useState("");
  //const [formattedAmt, setFormattedAmt] = useState("formatted amount");
  //console.log(formattedAmt);

  /* function handler(event) {
    setTip(event.target.value);
  } */
  return (
    <div className="App">
      <img src={logo} alt="logo" className="page-logo" />
      <main className="main-container">
        <Frame />
      </main>
    </div>
  );
}

export default App;
