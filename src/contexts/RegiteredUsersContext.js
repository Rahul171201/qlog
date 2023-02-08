import { createContext, useState } from "react";
import users from "../data/users";

export const RegisteredUsersContext = createContext();

const RegisteredUsersContextProvider = ({ children }) => {
  const [registeredUsers, setRegisteredUsers] = useState(users);

  return (
    <RegisteredUsersContext.Provider
      value={{ registeredUsers, setRegisteredUsers }}
    >
      {children}
    </RegisteredUsersContext.Provider>
  );
};

export default RegisteredUsersContextProvider;
