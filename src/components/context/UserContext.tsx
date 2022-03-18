import { createContext, useState } from "react";

import { User } from "../models/User";
import { users } from "../../constants/users"

interface UserContextProviderProps {
  children: React.ReactNode;
}

interface UserContextType {
  user: User | null,
  setUser: React.Dispatch<React.SetStateAction<User | null>>
}

export const UserContext = createContext<UserContextType | null>(null);

export const UserContextProvider = ({ children }: UserContextProviderProps) => {
  const [user, setUser] = useState<User | null>(users[0]);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  )
}