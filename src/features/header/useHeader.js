import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router";

function useHeader() {
  const [username, setUsername] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function getUsername() {
      const data = "Global Chat";
      setUsername(data);
    }

    getUsername();
  }, [id]);

  function goBack() {
    navigate("/chats");
  }

  return [username, id, goBack];
}

export { useHeader };
