import { useNavigate } from "react-router";
import { logout as logoutApi } from "../../../lib/apiAuth";
import { useMutation, useQueryClient } from "@tanstack/react-query";

function useLogout() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: logout } = useMutation({
    mutationFn: logoutApi,
    onSuccess: () => {
      queryClient.removeQueries(["loggedUser"]);
      navigate("/login");
    },
  });

  return { logout };
}

export { useLogout };
