import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./pages/HomePage";
import UserPage from "./pages/UserPage";
import NotFound404 from "./components/NotFound/NotFound404";
import ProductPage from "./pages/ProductPage";
import Features from "./components/ProductFeatures/Features";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/user/:username/dashboard" element={<UserPage />}>
          {/* <Route index /> */}
          <Route path="products" element={<ProductPage />}>
            <Route path=":productId" element={<Features />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound404 />} />
      </Routes>
    </Router>
  );
}

export default App;
