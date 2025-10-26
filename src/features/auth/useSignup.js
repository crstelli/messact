import { useState } from "react";
import { useNavigate } from "react-router";

import { signup as signupApi } from "../../lib/apiAuth";

function useSignup() {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSignUp(email, password, username) {
    setIsLoading(true);

    try {
      await signupApi(email, password, username);
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
