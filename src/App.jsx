import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./pages/HomePage";
import UserPage from "./pages/UserPage";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/user/:username/dashboard" element={<UserPage />} />
      </Routes>
    </Router>
  );
}

export default App;
