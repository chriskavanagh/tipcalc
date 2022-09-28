//import { useState } from "react";
import "../styles/TipButtons.css";
import { FaUserEdit, FaCcVisa } from "react-icons/fa";
import { currencyMask } from "../utils/currencyMask";

export default function TipButtons({
  tip,
  bill,
  people,
  disable,
  handler,
  billHandler,
  handlePeople,
}) {
  return (
    <>
      <div className="tip-wrapper">
        <div className="bill__wrapper">
          <label htmlFor="bill">Bill</label>
          <div className="icon__bill">
            <FaCcVisa style={{ fontSize: "1.4em", color: "#000080" }} />
          </div>
          <input
            name="bill"
            id="bill"
            type="text"
            className="bill_amt"
            onChange={(e) => billHandler(currencyMask(e))}
            onBlur={(e) => (e.target.style.background = "pink")}
            value={"$" + bill}
          />
        </div>
        <p>Select Tip %</p>
        <div className="btn-group">
          <button value={0.05} onClick={handler} disabled={disable}>
            5%
          </button>
          <button value={0.1} onClick={handler} disabled={disable}>
            10%
          </button>
          <button value={0.15} onClick={handler} disabled={disable}>
            15%
          </button>
          <button value={0.25} onClick={handler} disabled={disable}>
            25%
          </button>
          <button value={0.5} onClick={handler} disabled={disable}>
            50%
          </button>
          <div className="input-wrapper">
            <input
              type="text"
              placeholder="Custom"
              className="custom"
              value={"$ " + tip}
              onChange={(e) => handler(currencyMask(e))}
            />
          </div>
        </div>
        <div className="people__wrapper">
          <label htmlFor="people">Number Of People</label>
          <div className="icon">
            <FaUserEdit style={{ fontSize: ".9em" }} />
          </div>
          <input
            type="text"
            id="people"
            name="people"
            className="people__input"
            value={people}
            onChange={(e) => handlePeople(e)}
          />
        </div>
      </div>
    </>
  );
}
