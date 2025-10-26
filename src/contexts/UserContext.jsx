import { createContext, useEffect, useState } from "react";
import { getUser } from "../lib/apiAuth";

const UserContext = createContext();

function UserProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    (async function () {
      const user = await getUser();
      setUser(user);
    })();
  }, []);

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
}

export { UserProvider, UserContext };
