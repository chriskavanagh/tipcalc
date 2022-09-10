import { useState } from "react";
import "../styles/TipButtons.css";
//import { FaDollarSign } from "react-icons/fa";
import { currencyMask } from "../utils/currencyMask";

export default function TipButtons({
  tip,
  handler,
  bill,
  people,
  billHandler,
  handlePeople,
}) {
  //const [isActive, setIsActive] = useState(false);

  return (
    <>
      <div className="tip-wrapper">
        <input
          type="text"
          className="bill_amt"
          onChange={(e) => billHandler(currencyMask(e))}
          value={"$" + bill}
        />
        <p>Select Tip %</p>
        <div className="btn-group">
          <button value={0.05} onClick={handler}>
            5%
          </button>
          <button value={0.1} onClick={handler}>
            10%
          </button>
          <button value={0.15} onClick={handler}>
            15%
          </button>
          <button value={0.25} onClick={handler}>
            25%
          </button>
          <button value={0.5} onClick={handler}>
            50%
          </button>
          <div className="input-wrapper">
            <input
              type="text"
              placeholder="0.00"
              className="custom"
              value={"$ " + tip}
              onChange={(e) => handler(currencyMask(e))}
            />
          </div>
        </div>
        <div className="people">
          <input
            type="number"
            className="people"
            value={people}
            onChange={(e) => handlePeople(e)}
          />
        </div>
      </div>
    </>
  );
}
