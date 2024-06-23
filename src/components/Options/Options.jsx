import css from "./Options.module.css";
export default function Options({ onFeedback, onReset, totalFeedback }) {
  return (
    <div className={css.options}>
      <button onClick={() => onFeedback("good")}>Good</button>
      <button onClick={() => onFeedback("neutral")}>Neutral</button>
      <button onClick={() => onFeedback("bad")}>Bad</button>
      {totalFeedback > 0 && <button onClick={onReset}>Reset</button>}
    </div>
  );
}
