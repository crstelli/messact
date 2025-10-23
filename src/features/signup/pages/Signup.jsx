import { useState } from "react";
import { Form } from "../../../shared/ui/form/Form";
import { signup } from "../../../services/apiLogin";

import { useNavigate } from "react-router";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password || !confirmPassword) return;
    if (password !== confirmPassword) return;

    async function handleSignup() {
      await signup(email, password);

      setEmail("");
      setPassword("");
      setConfirmPassword("");

      navigate("/login");
    }

    handleSignup();
  }

  return (
    <Form
      onSubmit={handleSubmit}
      title="Sign Up"
      alt={{ link: "/login", text: "Log In" }}
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

      <Form.Label htmlFor="confirm">Confirm Password</Form.Label>
      <Form.Input
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        id="confirm"
        type="password"
      />

      <Form.Submit>Sign Up</Form.Submit>
    </Form>
  );
}

export { SignUp };
