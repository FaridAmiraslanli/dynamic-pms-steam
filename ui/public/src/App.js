import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Login from "@pages/Login";
import Home from "@pages/Home";
import Register from "@pages/Register";
import Forget from "@pages/Forget";
import Error from "@pages/Error";
import Check from "./pages/Check";
// import PrivateRoutes from "./utils/PrivateRouter";
//import SetNewPassword from "./components/setNewPassword/SetNewPassword";
import SignIn from "./components/signIn/SignIn";
import CreditPacks from "./pages/CreditPacks";
import { userStore } from "./store/userStore";

const App = () => {
  // todo snackbar mui
  // todo config js
  // todo localstorage
  // todo redux toolkit
  // todo login duymesi yasil olsun
  const loggedUser = undefined;
  const { authKey, setAuthKey } = userStore();
  console.log("app authkey", authKey);

  React.useEffect(() => {
    setAuthKey(JSON.parse(localStorage.getItem("authkey")))
  }, []);

  return (
    <>
      <BrowserRouter>
        {authKey ? (
          <Routes>
            {/* <Route element={<PrivateRoutes />}> */}
            <Route exact path="/" element={<Home />} />
            {/* </Route> */}
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
