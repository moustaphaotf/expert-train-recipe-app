function Instructions({ instructions }) {
  return (
    <div className="instructions-section">
      <h3>Instructions</h3>
      <ol className="instructions-list">
        {instructions.map((step, i) => (
          <li key={i} className="instruction-step">
            {step}
          </li>
        ))}
      </ol>
    </div>
  );
}

export default Instructions;
