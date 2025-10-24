import { useEffect, useState } from "react";
import { useParams } from "react-router";

import { Phone } from "lucide-react";

function Header() {
  const [username, setUsername] = useState("");
  const { id } = useParams();

  useEffect(() => {
    async function getUsername() {
      const data = "Global Chat";
      setUsername(data);
    }

    getUsername();
  }, [id]);

  return (
    <div className="flex items-center justify-between border-b border-slate-500 px-10 py-4">
      <span className="flex items-center justify-center gap-2">
        <div className="size-10 rounded-full bg-sky-200"></div>
        <h2 className="text-xl">{username}</h2>
      </span>
      {id !== "global" && (
        <span className="flex size-8 items-center justify-center rounded-full bg-green-600 p-[6px] text-green-200">
          <Phone />
        </span>
      )}
    </div>
  );
}

export { Header };
