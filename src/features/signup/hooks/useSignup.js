import { useState } from "react";
import { useNavigate } from "react-router";

import { signup } from "../../../services/apiLogin";

function useSignup() {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSignUp(email, password) {
    setIsLoading(true);

    try {
      await signup(email, password);
      navigate("/login");
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  return [isLoading, handleSignUp];
}

export { useSignup };
