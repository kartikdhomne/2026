import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetch(
          `https://dummyjson.com/products/search?q=${search}`,
        );
        const res = await data.json();
        setData(res.products);
        console.log(res, "res");
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [search]);

  const handleSearch = () => {
    const filteredData = data.filter((item) => {
      return item.title.toLowerCase().includes(search.toLowerCase());
    });

    setData(filteredData);
  };

  return (
    <div className="App">
      <h1>Debounce Search</h1>
      <div className="input-wrapper">
        <input
          type="text"
          value={search}
          placeholder="search here"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="card-wrapper">
        {data.map((item, id) => {
          return (
            <div key={item.id} className="card">
              <div className="image">
                <img src={item.images[0]} alt={item.title} />
              </div>
              <div className="brand">{item.brand}</div>
              <div className="title">{item.title}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
