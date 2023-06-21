import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./assets/css/style.css"
import Login from "./pages/Login";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Register from "./pages/Register";
// import ErrorPage from "./pages/ErrorPage";
import PrivateRoute from "./utils/PrivateRoute";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route exact path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* <Route path="*" element={<ErrorPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
