import React, { useState } from "react";

export default function EasyTransfer() {
  const [left, setLeft] = useState(["Apple", "Banana", "Grapes"]);
  const [right, setRight] = useState(["Mango"]);

  const [selected, setSelected] = useState([]);

  const toggle = (item) => {
    setSelected((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item],
    );
  };

  const move = (from, to, setFrom, setTo, all = false) => {
    const items = all ? from : from.filter((i) => selected.includes(i));
    setTo([...to, ...items]);
    setFrom(from.filter((i) => !items.includes(i)));
    setSelected([]);
  };

  const moveRight = () => move(left, right, setLeft, setRight);
  const moveLeft = () => move(right, left, setRight, setLeft);
  const moveAllRight = () => move(left, right, setLeft, setRight, true);
  const moveAllLeft = () => move(right, left, setRight, setLeft, true);

  return (
    <div style={{ display: "flex", gap: "30px" }}>
      <div>
        {left.map((item) => (
          <label key={item} style={{ display: "block" }}>
            <input
              type="checkbox"
              checked={selected.includes(item)}
              onChange={() => toggle(item)}
            />
            {item}
          </label>
        ))}
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <button onClick={moveRight}>&gt;</button>
        <button onClick={moveLeft}>&lt;</button>
        <button onClick={moveAllRight}>&gt;&gt;</button>
        <button onClick={moveAllLeft}>&lt;&lt;</button>
      </div>

      <div>
        {right.map((item) => (
          <label key={item} style={{ display: "block" }}>
            <input
              type="checkbox"
              checked={selected.includes(item)}
              onChange={() => toggle(item)}
            />
            {item}
          </label>
        ))}
      </div>
    </div>
  );
}
