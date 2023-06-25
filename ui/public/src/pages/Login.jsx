import SignUp from "@components/signUp/SignUp";
import Layout from "../components/layout/Layout"
import { userStore } from "../store/userStore";

function Login() {
  const {authKey} = userStore()
  return (
    <Layout>
      <SignUp />
    </Layout>
  );
}

export default Login;
