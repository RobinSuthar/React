import { useMemo, useState } from "react";

// In this assignment, your task is to create a component that performs an expensive calculation (finding the factorial) based on a user input.
// Use useMemo to ensure that the calculation is only recomputed when the input changes, not on every render.

export function Assignment1() {
  const [input, setInput] = useState(0);
  // Your solution starts here
  var expensiveValue = 0;

  if (input < 0) {
    expensiveValue = "Wrong ";
  }
  if (input === 0 || input === 1) {
    expensiveValue = 1;
  }

  expensiveValue = 1;
  const x = useMemo(() => {
    for (let i = 1; i <= input; i++) {
      console.log("Huehue");
      expensiveValue *= i;
    }
    return expensiveValue;
  }, [input]);
  // Your solution ends here
  console.log(input);
  return (
    <div>
      <input
        type="number"
        value={input}
        onChange={(e) => setInput(Number(e.target.value))}
      />
      <p>Calculated Value: {x}</p>
    </div>
  );
}
