import logo from "./logo.svg";
import "./App.css";
import Header from "./Component/Header/Header";
import Home from "./Component/Home/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Packages from "./Component/Packages/Packages";
import Footer from "./Component/Footer/Footer";
import PricesAndPlans from "./Component/PricesAndPlans/PricesAndPlans";
import Schedule from "./Component/Schedule/Schedule";
import Trainer from "./Component/Trainer/Trainer";
import Login from "./Component/Login/Login";
import AuthProvider from "./contexts/AuthProvider";
import PrivateRoute from "./Component/PrivateRoute/PrivateRoute";

function App() {
  return (
    <div className="">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/packages" element={<Packages />} />
            <Route path="/trainer" element={<Trainer />} />
            <Route
              path="/pricesandplans"
              element={
                <PrivateRoute>
                  <PricesAndPlans />
                </PrivateRoute>
              }
            />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/login" element={<Login />} />
          </Routes>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
