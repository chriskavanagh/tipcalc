import "../styles/Display.css";

export default function Display({ tipTotal, billTotal }) {
  return (
    <div className="wrapper">
      <div className="tip-container">
        <h6 className="tip-amt">Tip Amount</h6>
        <p id="person">/person</p>
        <h6 className="total-text">Total</h6>
        <p className="tip-person">/person</p>
      </div>
      <div className="total-container">
        <h2>${tipTotal.toFixed(2)}</h2>
        <h2 className="total">${billTotal}</h2>
      </div>
    </div>
  );
}
