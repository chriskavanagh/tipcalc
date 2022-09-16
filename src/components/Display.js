import "../styles/Display.css";
import Button from "./Button";

export default function Display({ tipTotal, billTotal, reset }) {
  return (
    <>
      <div className="wrapper">
        <div className="tip-container">
          <h5 className="tip-amt">Tip Amount</h5>
          <p id="person">/person</p>
          <h5 className="total-text">Total</h5>
          <p className="tip-person">/person</p>
        </div>
        <div className="total-container">
          <h2>${tipTotal}</h2>
          <h2 className="total">${billTotal}</h2>
        </div>
        <div className="btn__wrapper">
          <Button reset={reset} className="btn__display" />
        </div>
      </div>
    </>
  );
}
