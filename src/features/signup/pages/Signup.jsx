import { useState } from "react";
import { useSignup } from "../hooks/useSignup";

import { Form } from "../../../shared/ui/form/Form";
import { Spinner } from "../../../shared/ui/Spinner";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [isLoading, handleSignUp] = useSignup();

  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password || !confirmPassword) return;
    if (password !== confirmPassword) return;

    handleSignUp(email, password);

    setEmail("");
    setPassword("");
    setConfirmPassword("");
  }

  return isLoading ? (
    <Spinner />
  ) : (
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
