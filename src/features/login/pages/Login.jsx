import { useState } from "react";

import { useLogin } from "../hooks/useLogin";

import { Form } from "../../../shared/ui/form/Form";
import { Spinner } from "../../../shared/ui/Spinner";

function Login() {
  const [email, setEmail] = useState("giuseppe@crescitelli.it");
  const [password, setPassword] = useState("ciao1234");

  const [isLoading, handleLogin] = useLogin();

  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) return;

    handleLogin(email, password);
    setEmail("");
    setPassword("");
  }

  return isLoading ? (
    <Spinner />
  ) : (
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
