import "../styles/Button.css";

export default function Button({ reset }) {
  return (
    <>
      <button className="btn" disabled={false} onClick={reset}>
        Reset
      </button>
    </>
  );
}
