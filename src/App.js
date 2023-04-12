import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Dashboard from "./pages/Dashboard";
import Consultation from "./pages/Consultation";
import "./custom";
import Spot from "./pages/Spot";
import SpotDetail from "./pages/SpotDetail";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Login />} />
        <Route path="/dashboard" exact element={<Dashboard />} />
        <Route path="/consultation" exact element={<Consultation />} />
        <Route path="/spots" exact element={<Spot />} />
        <Route path="/spots/:id" exact element={<SpotDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
