import React, { useState } from "react";
import { User } from "./models";

export const UserContext = React.createContext<{
  user: User | null;
  updateUser: (user: User | null) => void;
}>({
  user: null,
  updateUser: () => {},
});

const AppState: React.FC = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const updateUser = (user: User | null) => setUser(user);

  return (
    <>
      <UserContext.Provider value={{ user, updateUser }}>
        {children}
      </UserContext.Provider>
    </>
  );
};

export default AppState;
