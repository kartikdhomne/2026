// UseMemo

// useMemo is a React hook used for performance optimization that memoizes (caches) the
// result of a computation so it doesn’t get recalculated on every render unless
// dependencies change.

// example
// const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);

//  🚀 Why do we need useMemo?
// In React, every render re-runs your component function.
// Problem:
// Expensive calculations slow down UI
// Unnecessary recomputation
// Performance bottlenecks in large apps


// ⚙️ How it works internally
// React stores:
// Previous dependencies array
// Previous computed value
// On next render:
// Compares dependencies using shallow comparison
// If unchanged → returns cached value
// If changed → recomputes


// Use it when:
// Expensive computations
// Sorting large arrays
// Filtering big datasets
// Complex calculations
// Prevent unnecessary re-renders (with React.memo)


import React, { useState, useMemo } from "react";

function UseMemoHook() {
  const [count, setCount] = useState(1);
  const [action, setAction] = useState("");

  const computedValue = useMemo(() => {
    if (action === "increment") {
      console.log("Running only for +1");
      return count + 1;
    }
    return count;
  }, [count, action]);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Count: {count}</h2>
      <h3>Derived: {computedValue}</h3>

      <button
        onClick={() => {
          setCount(count + 1);
          setAction("increment");
        }}
      >
        Increase by 1
      </button>

      <button
        onClick={() => {
          setCount(count * 10);
          setAction("multiply");
        }}
      >
        Multiply by 10
      </button>
    </div>
  );
}

export default UseMemoHook;
