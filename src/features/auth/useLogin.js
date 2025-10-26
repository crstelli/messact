import { useState } from "react";
import { useNavigate } from "react-router";

import { login as loginApi } from "../../lib/apiAuth";

function useLogin() {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  async function handleLogin(email, password) {
    setIsLoading(true);

    try {
      await loginApi(email, password);
      navigate("/chats");
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  return [isLoading, handleLogin];
}

export { useLogin };
