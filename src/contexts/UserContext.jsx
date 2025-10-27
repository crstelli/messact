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

// Non cambia lo il context quando fai logout, anche se cambi account

export { UserProvider, UserContext };
