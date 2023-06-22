import React from "react";
// import { Routes, Route, BrowserRouter } from "react-router-dom";
// import Login from "./pages/Login";
// import Home from "./pages/Home";
// import Register from "./pages/Register";
// import PrivateRoutes from "./utils/PrivateRouter";
import Title from "./components/title";
const App = () => {
  return (
    <>
    <Title text="Create your account"/>
    {/* <BrowserRouter>
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route exact path="/" element={<Home />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter> */}
    </>
  );
};

export default App;
