import { useState } from "react";
import Pagination from "./Components/Pagination";

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  return (
    <>
      <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </>
  );
}

export default App;
