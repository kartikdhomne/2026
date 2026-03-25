import VirtualizedList from "./components/VirtualisedList";

const App = () => {
  const items = Array.from({ length: 10000 }, (_, i) => `Item ${i}`);

  return (
    <VirtualizedList
      items={items}
      itemHeight={100}
      height={1000}
      renderItem={(item, index) => (
        <div
          key={index}
          style={{
            height: 100,
            display: "flex",
            alignItems: "center",
            padding: "0 10px",
            borderBottom: "1px solid #eee",
          }}
        >
          {item}
        </div>
      )}
    />
  );
};

export default App;
