import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Login from "@pages/Login";
import Home from "@pages/Home";
import Register from "@pages/Register";
import Forget from "@pages/Forget"
import PrivateRoutes from "./utils/PrivateRouter";
//import SetNewPassword from "./components/setNewPassword/SetNewPassword";
import SignIn from "./components/signIn/SignIn";
import CreditPacks from "./pages/CreditPacks";

const App = () => {
  const loggedUser = undefined;
  return (
    <>
    {/* <SignIn/> */}
    {/* <SetNewPassword/> */}
      <BrowserRouter>
        {/* <Routes>
          <Route element={<PrivateRoutes />}>
            <Route exact path="/" element={<Home />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/forget" element={<Forget />} />
          <Route path="/register" element={<Register />} />
        </Routes> */}
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
            <Route path="/creditpacks" element={<CreditPacks />} />
          </Routes>
        )}
      </BrowserRouter>
    </>
  );
};

export default App;
