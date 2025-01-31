import React from "react";

const GRID_SIZE = 21; // 21x10 Grid to fit 210 numbers
const HIGHLIGHT_RED = [3, 11, 21, 32, 54, 76, 87, 109, 147, 183, 201]; // Example positions
const HIGHLIGHT_BLUE = [1, 22, 34, 45, 56, 79, 99, 127, 136, 174, 204]; // Example positions

const NumberGrid = () => {
  return (
    <div className="grid">
      {Array.from({ length: 210 }, (_, i) => {
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

export default App;
