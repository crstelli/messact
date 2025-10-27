import { useNavigate } from "react-router";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { login } from "../../lib/apiAuth";

function useLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { isLoading, mutate: handleLogin } = useMutation({
    mutationFn: ({ email, password }) => login({ email, password }),
    onSuccess: () => {
      queryClient.invalidateQueries(["loggedUser"]);
      navigate("/chats");
    },
  });

  return { isLoading, handleLogin };
}

export { useLogin };
