import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Register from "./pages/Register";
import PrivateRoutes from "./utils/PrivateRouter";

const App = () => {
  const loggedUser = undefined;
  return (
    <>
      <BrowserRouter>
        {loggedUser ? (
          <Routes>
            <Route element={<PrivateRoutes />}>
              <Route exact path="/" element={<Home />} />
            </Route>
          </Routes>
        ) : (
          <Routes>
            <Route exact path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        )}
      </BrowserRouter>
    </>
  );
};

export default App;
