import React, { useState } from "react";
import "../index.css";
import { include } from "./../../node_modules/@rolldown/pluginutils/dist/filter/composable-filters";

const TranferList = ({ intialLeft = [], intialRight = [] }) => {
  const [left, setLeftt] = useState(intialLeft);
  const [right, setRight] = useState(intialRight);
  const [selectedLeft, setSelectedleft] = useState([]);
  const [selectedRight, setSelectedRight] = useState([]);
  const moveLeft = () => {};
  const moveRight = () => {};
  const moveAllLeft = () => {};
  const moveAllRight = () => {};

  const RenderList = (items, selectedItems, side) => {
    return (
      <div className="list">
        {items.map((item, index) => {
          <div
            key={index}
            className={`
            list-name ${selectedItems.includes(item) ? "selected" : ""}
            `}
            onClick={() => handleSelect(item, side)}
          >
            {item}
          </div>;
        })}
      </div>
    );
  };
  return (
    <div>
      <div>{RenderList(left, selectedLeft, "left")}</div>
      <div className="btn-group">
        <button onClick={moveLeft}>{">"}</button>
        <button onClick={moveRight}>{"<"}</button>
        <button onClick={moveAllLeft}>{">>"}</button>
        <button onClick={moveAllRight}>{"<<"}</button>
      </div>
      <div>
        <div>{RenderList(right, selectedRight, "right")}</div>
      </div>
    </div>
  );
};

export default TranferList;
