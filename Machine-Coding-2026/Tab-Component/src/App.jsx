import { useState } from "react";
import "./App.css";

function App() {
  const [activeId, setActiveId] = useState(1);

  const data = [
    { id: 1, name: "Kartik", city: "Ahmedabad" },
    { id: 2, name: "Anand", city: "Nagpur" },
    { id: 3, name: "Mrunal", city: "Hyderabad" },
  ];

  const activeTab = data.find((item) => item.id === activeId);

  return (
    <div className="tab-container">
      {/* Tabs */}
      <div className="tab-head-wrapper">
        {data.map((item) => (
          <div
            key={item.id}
            className={`tab-head ${activeId === item.id ? "active" : ""}`}
            onClick={() => setActiveId(item.id)}
          >
            {item.name}
          </div>
        ))}
      </div>

      {/* Single Body */}
      <div className="tab-body">{activeTab?.city}</div>
    </div>
  );
}

export default App;
