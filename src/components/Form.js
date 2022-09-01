import dollar from "../images/icon-dollar.svg";
import "../styles/Form.css";

export default function Form() {
  return (
    <div className="form">
      <div className="label-group">
        <label htmlFor="bill">Bill</label>
        <input type="number" id="bill" />
        <img src={dollar} alt="dollar" aria-hidden="true" />
      </div>

      <div className="label-group">
        <label htmlFor="people">Number Of People</label>
        <input type="number" id="people" />
      </div>
    </div>
  );
}
