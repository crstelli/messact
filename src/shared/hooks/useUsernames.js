import { useQuery } from "@tanstack/react-query";
import { getUsernames } from "../../lib/apiAuth";

function useUsernames() {
  return useQuery({
    queryKey: ["usernames"],
    queryFn: getUsernames,
  });
}

export { useUsernames };
