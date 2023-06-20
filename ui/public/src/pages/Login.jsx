import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import "../assets/css/login.css";

function Login() {
  return (
    <Form className="login d-flex flex-column justify-content-center align-items-center">
      <h1 className="mb-4">Login</h1>
      <Form.Group className="mb-3 login-input" controlId="formGroupEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3 login-input" controlId="formGroupPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group
        className="mb-3 d-flex justify-content-between align-items-center"
        id="formGridCheckbox"
      >
        <Form.Check type="checkbox" label="Remember me" />
        <Button variant="link" id="passwordHelpBlock" className="text-muted">
          Forgot password?
        </Button>
      </Form.Group>

      <Button className="login-input" variant="primary" type="submit">
        Submit
      </Button>
      <Form.Label className="mb-3" htmlFor="inputRegister">
        Not a member?
        <Button variant="link" id="inputRegister" className="text-muted">
          <Link to="/register">Register</Link>
        </Button>
      </Form.Label>
    </Form>
  );
}

export default Login;
