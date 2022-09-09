import TipButtons from "./TipButtons";
import Display from "./Display";
import { useState } from "react";
import "../styles/Frame.css";

export default function Frame() {
  const [tip, setTip] = useState("");

  function handler(event) {
    setTip(event.target.value);
  }

  return (
    <main className="frame-wrapper">
      <div className="frame__top">
        <TipButtons tip={tip} handler={handler} />
      </div>
      <div className="frame__bottom">
        <Display />
      </div>
    </main>
  );
}
