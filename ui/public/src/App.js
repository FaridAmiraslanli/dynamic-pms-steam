import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Login from "@pages/Login";
import Home from "@pages/Home";
import Register from "@pages/Register";
import Forget from "@pages/Forget"
import Error from "@pages/Error"
import Check from "./pages/Check";
import PrivateRoutes from "./utils/PrivateRouter";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route exact path="/" element={<Home />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/forget" element={<Forget />} />
          <Route path="/check" element={<Check />} />
          <Route path="/error" element={<Error />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
