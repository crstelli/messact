import { useState } from "react";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";

import { signup as signupApi } from "../../lib/apiAuth";

function useSignup() {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSignUp(email, password, username) {
    setIsLoading(true);

    try {
      await signupApi(email, password, username);
      navigate("/login");
      toast.success("Success! Check your email to confirm.");
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  }

  return [isLoading, handleSignUp];
}

export { useSignup };
