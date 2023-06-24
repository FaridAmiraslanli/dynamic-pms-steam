import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Login from "@pages/Login";
import Home from "@pages/Home";
import Register from "@pages/Register";
import Forget from "@pages/Forget"
import Check from "./pages/Check";
import PrivateRoutes from "./utils/PrivateRouter";

import Error from "./pages/Error";
//import SetNewPassword from "./components/setNewPassword/SetNewPassword";
//import SignIn from "./components/signIn/SignIn";
//import CheckYourEmail from "./components/checkFolder/CheckYourEmail";
//import SetNewPassword from "./components/setNewPassword/SetNewPassword";
//import CreateNewAccount from "./components/createYourAccount/CreateNewAccount";
//import PasswordReset from "./components/passwordReset/PassworReset";
const App = () => {
  return (
    <>

    {/* <CreateNewAccount/> */}
       {/* <PasswordReset/> */}
    {/* <SetNewPassword/> */}
    {/* <SignIn/> */}
    {/* <SetNewPassword/> */}
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
