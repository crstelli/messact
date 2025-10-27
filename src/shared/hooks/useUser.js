import { useQuery } from "@tanstack/react-query";
import { getUser } from "../../lib/apiAuth";

function useUser() {
  return useQuery({
    queryKey: ["loggedUser"],
    queryFn: getUser,
  });
}

export { useUser };
