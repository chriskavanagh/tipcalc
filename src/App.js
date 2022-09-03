import "./App.css";
import logo from "./images/logo.svg";
import { useState, useCallback } from "react";
import Form from "./components/Form";
import Display from "./components/Display";
import TipButtons from "./components/TipButtons";

function App() {
  const [tip, setTip] = useState("");
  const [formattedAmt, setFormattedAmt] = useState("");
  //console.log(formattedAmt);

  function handler(event) {
    setTip(event.target.value);
  }
  return (
    <div className="App">
      <img src={logo} alt="logo" className="page-logo" />
      <div className="container">
        <TipButtons
          tip={tip}
          setTip={setTip}
          handler={handler}
          formattedAmt={formattedAmt}
          setFormattedAmt={setFormattedAmt}
        />
        {/* <Form /> */}
        {/* <Display /> */}
      </div>
    </div>
  );
}

export default App;
