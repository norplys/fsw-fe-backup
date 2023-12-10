"use client"

import { createContext, useState, useContext } from "react";
import axios from "axios";

const UsersContext = createContext();

const UsersProvider = ({ children }) => {
  const [user, setUser] = useState({});

  const handleUsers = async (user) => {
    setUser(user);
  };


  return (
    <UsersContext.Provider value={{ user, handleUsers}}>
      {children}
    </UsersContext.Provider>
  );
};

export default UsersProvider;

export const useUsers = () => {
    const context = useContext(UsersContext);
    if (!context) {
        throw new Error("must be used within a UsersProvider");
    }
    return context;
}

