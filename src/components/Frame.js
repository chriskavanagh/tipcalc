import TipButtons from "./TipButtons";
import Display from "./Display";
import { useState, useEffect, useCallback } from "react";
import "../styles/Frame.css";

export default function Frame() {
  const [tip, setTip] = useState("");
  const [bill, setBill] = useState("");
  const [tipTotal, setTipTotal] = useState("");
  const [billTotal, setBillTotal] = useState("");

  function handler(event) {
    setTip(event.target.value);
  }

  function billHandler(event) {
    setBill(event.target.value);
  }

  const tipAmt = useCallback(() => {
    let sub = tip * bill;
    setTipTotal(Math.round(sub * 100) / 100);
  }, [tip, bill]);

  const total = useCallback(() => {
    let sub = +bill + +tipTotal;
    let newSub = sub.toString();
    setBillTotal(newSub);
  }, [bill, tipTotal]);

  useEffect(() => {
    tipAmt();
  }, [tipAmt, tip, bill]);

  useEffect(() => {
    total();
  }, [bill, tipAmt, total]);

  console.log(`TipTotal: ${tipTotal}`);
  console.log(`Bill-Total: ${billTotal}`);
  console.log(typeof billTotal);

  return (
    <main className="frame-wrapper">
      <div className="frame__top">
        <TipButtons
          tip={tip}
          handler={handler}
          bill={bill}
          billHandler={billHandler}
        />
      </div>
      <div className="frame__bottom">
        <Display tipTotal={tipTotal} />
      </div>
    </main>
  );
}
