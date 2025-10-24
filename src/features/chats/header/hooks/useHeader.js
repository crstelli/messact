import { useState, useEffect } from "react";
import { useParams } from "react-router";

function useHeader() {
  const [username, setUsername] = useState("");
  const { id } = useParams();

  useEffect(() => {
    async function getUsername() {
      const data = "Global Chat";
      setUsername(data);
    }

    getUsername();
  }, [id]);

  return [username, id];
}

export { useHeader };
