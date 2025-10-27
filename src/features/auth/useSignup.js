import { useNavigate } from "react-router";

import { signup } from "../../lib/apiAuth";
import { useMutation, useQueryClient } from "@tanstack/react-query";

function useSignup() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { isLoading, mutate: handleSignup } = useMutation({
    mutationFn: ({ email, password, username }) =>
      signup({ email, password, username }),
    onSuccess: () => {
      queryClient.invalidateQueries(["loggedUser"]);
      navigate("/login");
    },
  });

  return { isLoading, handleSignup };
}

export { useSignup };
