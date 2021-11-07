import { BrowserRouter, Route, Routes } from "react-router-dom";
import Todos from "./Todos";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Todos />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
