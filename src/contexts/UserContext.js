import { createContext, useState } from "react";
import User from "@/classes/User";

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  let currentUser = new User(1, "Rahul Roy", "rahulroydps@gmail.com");

  const [user, setUser] = useState(currentUser);

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};

export default UserContextProvider;
