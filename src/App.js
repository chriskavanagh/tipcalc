import "./App.css";
import logo from "./images/logo.svg";
import { useState } from "react";
import Form from "./components/Form";
import Display from "./components/Display";

function App() {
  const [billAmt, setBillAmt] = useState(0);
  const [billError, setbillError] = useState(0);
  const [count, setCount] = useState(0);
  const [isTipSelected, setisTipSelected] = useState(false);
  const [selectedTip, setSelectedTip] = useState(false);
  const [calculatedTotal, setcalculatedTotal] = useState(false);
  return (
    <div className="App">
      <img src={logo} alt="logo" className="page-logo" />
      <div className="container">
        <Form />
        {/* <Display /> */}
      </div>
    </div>
  );
}

export default App;
