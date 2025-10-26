import { useNavigate, useParams, useSearchParams } from "react-router";

function useHeader() {
  const [searchParams] = useSearchParams();
  const username = searchParams.get("username");

  const { id } = useParams();
  const navigate = useNavigate();

  function goBack() {
    navigate("/chats");
  }

  return [username, id, goBack];
}

export { useHeader };
