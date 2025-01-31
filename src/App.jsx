import React from "react";
import "./index.css"; // Make sure you have App.css for styling

const ROWS = 21; // 21 rows
const COLS = 11; // 11 columns (to match the image pattern)
const TOTAL_CELLS = ROWS * COLS;

// Define highlight positions based on your pattern
const HIGHLIGHT_RED = [
  11,21,31,41,51,61,71,81,91,101,111,123,135,147,159,171,183,195,207,219,231
];
const HIGHLIGHT_BLUE = [
  1, 13, 25, 37, 49, 61, 73, 85, 97, 109, 121, 131,141,151,161,171,181,191,201,211,221
];

const NumberGrid = () => {
  return (
    <div className="grid">
      {Array.from({ length: TOTAL_CELLS }, (_, i) => {
        const number = i + 1;
        let className = "cell";

        if (HIGHLIGHT_RED.includes(number)) className += " red";
        if (HIGHLIGHT_BLUE.includes(number)) className += " blue";

        return (
          <div key={number} className={className}>
            {number}
          </div>
        );
      })}
    </div>
  );
};

function App() {
  return (
    <div className="container">
      <NumberGrid />
    </div>
  );
}

export default App;