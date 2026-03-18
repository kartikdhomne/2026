import { useState } from "react";
import "./App.css";
import CinemaSeatBooking from './components/cinema-seat-booking';

function App() {
  const [count, setCount] = useState(0);

  return <div><CinemaSeatBooking/></div>;
}

export default App;
