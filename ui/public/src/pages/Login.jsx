import SignUp from "@components/signUp/SignUp";
import Layout from "../components/layout/Layout";
import { userStore } from "../store/userStore";
import { Navigate, redirect, useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Login() {
  const { authKey } = userStore();
  const navigate = useNavigate();
  // useEffect(() => {
  //   if (authKey){
  //     navigate("/home")
  //   }
  // }, [authKey])
  // if (authKey) {
  //   return <Navigate to="/home" replace={true} />;
  // }
  // useEffect(() => {
  //   if (authKey) {
  //     window.location.url = "http://localhost:3001/home";
  //   }
  // }, []);
  return (
    <Layout>
      <SignUp />
    </Layout>
  );
}

export default Login;
