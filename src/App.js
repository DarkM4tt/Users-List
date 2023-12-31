import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:page/:id" element={<Dashboard />} />
      </Routes>
  );
}

export default App;
