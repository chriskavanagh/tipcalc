import { useState } from "react";
import "../styles/TipButtons.css";
import { FaUserEdit, FaCcVisa } from "react-icons/fa";
import { currencyMask } from "../utils/currencyMask";

export default function TipButtons({
  tip,
  handler,
  bill,
  people,
  billHandler,
  handlePeople,
}) {
  //const [isActive, setIsActive] = useState(false)

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
            value={"$" + bill}
          />
        </div>
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
