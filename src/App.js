import "./App.css";
import logo from "./images/logo.svg";
import { useState } from "react";
import Form from "./components/Form";
import Display from "./components/Display";
import TipButtons from "./components/TipButtons";

function App() {
  /* const [billAmt, setBillAmt] = useState(0);
  const [billError, setbillError] = useState(0);
  const [count, setCount] = useState(0);
  const [isTipSelected, setisTipSelected] = useState(false);
  const [selectedTip, setSelectedTip] = useState(false);
  const [calculatedTotal, setcalculatedTotal] = useState(false); */
  const [tip, setTip] = useState(0);
  const [formattedAmt, setFormattedAmt] = useState("");
  //console.log(formattedAmt);

  const handler = (e) => {
    console.log(typeof e.target.value);
    setTip(e.target.value);
  };
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
