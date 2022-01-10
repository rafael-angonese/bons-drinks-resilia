import { createContext, useState } from "react";

const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const [name, setName] = useState("nome padraosdfsdf");
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{ user, setUser, name, setName }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContextProvider };
export default UserContext;
