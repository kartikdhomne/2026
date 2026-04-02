import "./App.css";
import UseMemoHook from "./Hooks/UseMemoHook";
import HocAdmin from "./Patterns/HocAdmin";
import HocUser from "./Patterns/HocChild";

function App() {
  return (
    <div>
      {/* <UseMemoHook /> */}
      <HocUser name="Kartik Dhomne" />
      <HocAdmin name="Super Admin" />
    </div>
  );
}

export default App;
