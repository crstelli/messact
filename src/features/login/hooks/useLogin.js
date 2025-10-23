import { useState } from "react";
import { useNavigate } from "react-router";
import { login as loginApi } from "../../../services/apiLogin";

function useLogin() {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  async function handleLogin(email, password) {
    setIsLoading(true);

    try {
      await loginApi(email, password);
      navigate("/chats/global");
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  return [isLoading, handleLogin];
}

export { useLogin };
