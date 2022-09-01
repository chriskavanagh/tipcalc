import React, { useState } from "react";
import "../styles/TipButtons.css";
//import { FaDollarSign } from "react-icons/fa";

export default function TipButtons({
  tip,
  setTip,
  formattedAmt,
  setFormattedAmt,
  handler,
}) {
  const [isEditing, setIsediting] = useState(false);

  // button handler

  const toCurrency = (num) => {
    const formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    });

    return formatter.format(num);
  };

  const toggleEditing = () => {
    setIsediting((prev) => !prev);
  };

  console.log(isEditing);
  console.log(tip);

  return (
    <div className="tip-wrapper">
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

        {isEditing ? (
          <div className="input-wrapper">
            <input
              type="number"
              // placeholder="0.00"
              className="custom"
              value={tip}
              onChange={handler}
              onBlur={toggleEditing}
            />
          </div>
        ) : (
          <div className="input-wrapper">
            <input
              type="text"
              // placeholder="0.00"
              className="custom"
              value={toCurrency(tip)}
              onChange={handler}
              onFocus={toggleEditing}
              readOnly
            />
          </div>
        )}
      </div>
    </div>
  );
}
