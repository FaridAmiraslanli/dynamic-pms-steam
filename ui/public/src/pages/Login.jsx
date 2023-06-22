import { Button, IconBtn, LinkBtn } from "../components/Button";

function Login() {
  return (
    <div>
      <Button text="btn" />
      <IconBtn icon="google" />
      <IconBtn icon="facebook" />
      <IconBtn icon="apple" />
      <LinkBtn text="link btn" />
    </div>
  );
}

export default Login;
