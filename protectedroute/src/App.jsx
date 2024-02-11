import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Product from "./pages/product/Product";
import Dashboard from "./pages/dashboard/Dashboard";
import Navbar from "./components/navbar/Navbar";
import ProtectedRoute from "./components/navbar/ProtectedRoute";

function App() {
  const [user, setUser] = useState(false);

  //create login function
  const login = () => {
    setUser(true);
  };

  //create logout fuction
  const logout = () => {
    setUser(false);
  };

  return (
    <>
      <Router>
        <Navbar user={user} login= {login} logout={logout}/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute user={user}>
                <Dashboard />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
