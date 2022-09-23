import { useState, useEffect, useCallback } from "react";
import TipButtons from "./TipButtons";
import Display from "./Display";
import "../styles/Frame.css";

export default function Frame() {
  const [tip, setTip] = useState("");
  const [bill, setBill] = useState("");
  const [people, setPeople] = useState("1");
  const [tipTotal, setTipTotal] = useState("0");
  const [billTotal, setBillTotal] = useState("0");
  const [disable, setDisable] = useState(false);

  function reset() {
    setTip("");
    setBill("");
    setPeople("1");
    setTipTotal("0.00");
    setBillTotal("0.00");
  }

  function handler(event) {
    //event.currentTarget.disabled = true;
    // setDisable((prev) => !prev);
    setTip(event.target.value);
  }

  function billHandler(event) {
    setBill(event.target.value);
  }

  function handlePeople(event) {
    setPeople(event.target.value);
  }

  const tipAmt = useCallback(() => {
    let sub = tip * bill;
    let newSub = Math.round(sub * 100) / 100;
    setTipTotal(newSub.toFixed(2));
  }, [tip, bill]);

  const total = useCallback(() => {
    let sub = +bill + +tipTotal;
    let subFloat = sub.toFixed(2);
    //let newSub = subFloat.toString();
    setBillTotal(subFloat);
  }, [bill, tipTotal]);

  useEffect(() => {
    tipAmt();
  }, [tipAmt, tip, bill]);

  useEffect(() => {
    total();
  }, [bill, tipAmt, total]);

  return (
    <main className="frame-wrapper">
      <div className="frame__top">
        <TipButtons
          tip={tip}
          handler={handler}
          bill={bill}
          billHandler={billHandler}
          disable={disable}
          people={people}
          handlePeople={handlePeople}
        />
      </div>
      <div className="frame__bottom">
        <Display tipTotal={tipTotal} billTotal={billTotal} reset={reset} />
      </div>
    </main>
  );
}
