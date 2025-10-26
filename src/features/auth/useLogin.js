import { useState } from "react";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";

import { login as loginApi } from "../../lib/apiAuth";

function useLogin() {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  async function handleLogin(email, password) {
    setIsLoading(true);

    try {
      await loginApi(email, password);
      navigate("/chats");
      toast.success("Login succesfully");
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  }

  return [isLoading, handleLogin];
}

export { useLogin };
