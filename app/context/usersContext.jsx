"use client"

import { createContext, useState, useContext } from "react";
import axios from "axios";


const UsersContext = createContext();

const UsersProvider = ({ children }) => {
  const [user, setUser] = useState({});


  const handleUsers = async (user) => {
    try {
    const data = {
      "email": user.user,
      "password": user.password
    }
    const res = await axios.post("https://final-project-online-course.et.r.appspot.com/v1/login", data);
    localStorage.setItem("token", res.data.token);
    
    const userData = {
      
    }
    setUser(res.data); 
  }
  catch(err){
    throw new Error(err.response.data.message);
  }
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

