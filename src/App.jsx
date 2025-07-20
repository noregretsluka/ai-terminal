// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
import MainMenu from "./MainMenu";
import Logs from "./Logs";
import Assistant from "./Assistant";
import Settings from "./Settings";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/menu" element={<MainMenu />} />
        <Route path="/logs" element={<Logs />} />
        <Route path="/assistant" element={<Assistant />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Router>
  );
}

export default App;