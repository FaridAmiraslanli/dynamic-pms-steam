import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";


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
// import {AnimatePresence} from "framer-motion/dist/framer-motion";
import {AnimatePresence} from "framer-motion";
import './assets/sass/globals.scss'
import Pricing from "./components/pricingPage/Pricing";
const App = () => {
  // TODO .env fayli olmalidi backend islemesi ucun
  // TODO snackbar mui
  // TODO config js
  // TODO redux toolkit
  // TODO login duymesi yasil olsun

  const { authKey, setAuthKey } = userStore();
  const location = useLocation();
  // console.log("app authkey", authKey);

  React.useEffect(() => {
    setAuthKey(JSON.parse(localStorage.getItem("authkey")));
  }, []);

  return (

  <div>
    <Pricing/>
  </div>
    // <AnimatePresence>
    //   {authKey ? (
    //     <Routes location={location} key={location.pathname}>
    //       <Route exact path="/" element={<Home />} />
    //       <Route path="/home" element={<Home />} />
    //       <Route path="*" element={<Error />} />
    //       {/* <Route path="/login" /> */}
    //     </Routes>
    //   ) : (
    //     <Routes location={location} key={location.pathname}>
    //       <Route exact path="/" element={<Login />} />
    //       <Route path="/login" element={<Login />} />
    //       <Route path="/register" element={<Register />} />
    //       <Route path="/creditpacks" element={<CreditPacks />} />
    //       <Route path="/forget" element={<Forget />} />
    //       <Route path="*" element={<Error />} />
    //     </Routes>
    //   )}
    // </AnimatePresence>
  );
};

export default App;
