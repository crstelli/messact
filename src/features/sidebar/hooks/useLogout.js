import { useNavigate } from "react-router";
import { logout as logoutApi } from "../../../lib/apiAuth";

function useLogout() {
  const navigate = useNavigate();

  function logout() {
    logoutApi();
    navigate("/login");
  }

  return { logout };
}

export { useLogout };
