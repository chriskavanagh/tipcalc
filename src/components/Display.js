export default function Display() {
  return (
    <div>
      <div className="display-row">
        <div className="display-label">
          <p className="header">Tip Amount</p>
          <p className="unit">/ person</p>
        </div>
        <div className="display-amt">
          <p className="value">$0.00</p>
        </div>
        <div className="display-label">
          <p className="header">Tip Amount</p>
          <p className="unit">/ person</p>
        </div>
        <div className="display-amt">
          <p className="value">$0.00</p>
        </div>
        <button className="btn">Reset</button>
      </div>
    </div>
  );
}
