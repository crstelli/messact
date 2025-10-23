import { useState } from "react";
import { useNavigate } from "react-router";

import { login } from "../../../services/apiLogin";
import { Form } from "../../../shared/ui/form/Form";

function Login() {
  const [email, setEmail] = useState("giuseppe@crescitelli.it");
  const [password, setPassword] = useState("ciao1234");

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) return;

    async function handleLogin() {
      await login(email, password);
      navigate("/chats/global");
    }

    handleLogin();

    setEmail("");
    setPassword("");
  }

  return (
    <Form
      title="Log In"
      onSubmit={handleSubmit}
      alt={{
        link: "/signup",
        text: "Sign Up",
      }}
    >
      <Form.Label htmlFor="id">Email</Form.Label>
      <Form.Input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        id="email"
        type="email"
      />

      <Form.Label htmlFor="password">Password</Form.Label>
      <Form.Input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        id="password"
        type="password"
      />

      <Form.Submit>Login</Form.Submit>
    </Form>
  );
}

export { Login };
