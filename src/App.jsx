import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./pages/HomePage";
import UserPage from "./pages/UserPage";
import NotFound404 from "./components/NotFound/NotFound404";
import ProductPage from "./pages/ProductPage";
import Features from "./components/ProductFeatures/Features";
import AnalyticsPage from "./pages/AnalyticsPage";
import { MainWrapper } from "./common/Common.style";
import { useCurrentUserContext } from "./app/context/currentUser";
import { useEffect } from "react";

function App() {
  return (
    <MainWrapper>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Redirect />} />
          <Route path="/user/:username" element={<UserPage />}>
            <Route index path="analytics" element={<AnalyticsPage />} />
            <Route path="products" element={<ProductPage />}>
              <Route path=":productId" element={<Features />} />
            </Route>
          </Route>
          <Route path="*" element={<NotFound404 />} />
        </Routes>
      </Router>
    </MainWrapper>
  );
}

function Redirect() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate(`/user/rtripati`); // redirect to default user page
  }, [navigate]);
  return <></>;
}

export default App;
