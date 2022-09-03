import React, { useState } from "react";
import "../styles/TipButtons.css";
//import { FaDollarSign } from "react-icons/fa";

export default function TipButtons({ tip, setTip, handler }) {
  function customHandler(event) {
    let value = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
    }).format(event.target.value.replace(/\D+/g, ""));
    setTip(value === "0" ? "" : value);
  }

  /* const toCurrency = (num) => {
    let num1 = Number(num);
    const formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    });

    return formatter.format(num1);
  }; */

  /* const toggleEditing = () => {
    setIsediting((prev) => !prev);
  }; */

  //console.log(isEditing);
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
        <div className="input-wrapper">
          <input
            type="text"
            // placeholder="0.00"
            className="custom"
            value={tip}
            onChange={customHandler}
          />
        </div>
      </div>
    </div>
  );
}
