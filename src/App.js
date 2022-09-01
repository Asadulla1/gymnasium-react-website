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

import Register from "./Component/Register/Register";
import PackageDetails from "./Component/Packages/PackageDetails";
import NotFound from "./Component/404Page/NotFound";

function App() {
  return (
    <div className="">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/registration" element={<Register />} />
            <Route
              path="/packages"
              element={
                <PrivateRoute>
                  <Packages />
                </PrivateRoute>
              }
            />
            <Route path="/package/:packageId" element={<PackageDetails />} />
            <Route path="/trainer" element={<Trainer />} />
            <Route
              path="/pricesandplans"
              element={
                <PrivateRoute>
                  <PricesAndPlans />
                </PrivateRoute>
              }
            />
            <Route
              path="/schedule"
              element={
                <PrivateRoute>
                  <Schedule />
                </PrivateRoute>
              }
            />
            <Route path="/login" element={<Login />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
