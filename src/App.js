import React, { useState } from "react";

function App() {
  const [expression, setExpression] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (value) => {
    if (value === "C") {
      setExpression("");
      setResult("");
      return;
    }

    if (value === "=") {
      if (expression === "") {
        setResult("Error");
        return;
      }

      try {
        const answer = eval(expression);

        if (Number.isNaN(answer)) {
          setResult("NaN");
        } else if (!Number.isFinite(answer)) {
          setResult("Infinity");
        } else {
          setResult(answer);
        }
      } catch (error) {
        setResult("Error");
      }

      return;
    }

    setExpression((prev) => prev + value);
  };

  const buttons = [
    "7",
    "8",
    "9",
    "+",
    "4",
    "5",
    "6",
    "-",
    "1",
    "2",
    "3",
    "*",
    "C",
    "0",
    "=",
    "/",
  ];

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "30px",
      }}
    >
      <h1>React Calculator</h1>

      <input
        type="text"
        value={expression}
        readOnly
      />

      <div>{result}</div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 70px)",
          gap: "10px",
          marginTop: "20px",
        }}
      >
        {buttons.map((btn) => (
          <button
            key={btn}
            onClick={() => handleClick(btn)}
            style={{
              width: "70px",
              height: "70px",
              fontSize: "24px",
            }}
          >
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;