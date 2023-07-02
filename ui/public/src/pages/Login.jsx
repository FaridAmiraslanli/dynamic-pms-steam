import SignUp from "@components/signUp/SignUp";
import Layout from "../components/layout/Layout";
import { userStore } from "../store/userStore";
import { Navigate, redirect, useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Login() {
  const { authKey } = userStore();
  const navigate = useNavigate()
  // useEffect(() => {
  //   if (authKey){
  //     navigate("/home")
  //   }
  // }, [authKey])
  if (authKey) {
    return <Navigate to="/home" replace={true} />
    
  }
  return (
    <Layout>
      <SignUp />
    </Layout>
  );
}

export default Login;
