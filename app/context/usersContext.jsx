"use client"

import { createContext, useState, useContext } from "react";
import axios from "axios";


const UsersContext = createContext();

const UsersProvider = ({ children }) => {
  const [user, setUser] = useState(null);


  const handleUsers = async (user) => {
    try {
    const data = {
      "email": user.user,
      "password": user.password
    }
    const res = await axios.post("https://final-project-online-course.et.r.appspot.com/v1/login", data);
    localStorage.setItem("token", res.data.token);
    const userData = {
      name : res.data.name,
      email : res.data.email,
    }
    setUser(res.data); 
  }
  catch(err){
    throw new Error(err.response.data.message);
  }
  };

  const removeUser = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  const handleToken = async (token) => {
    try{
    const res = await axios.get("https://final-project-online-course.et.r.appspot.com/v1/profile", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setUser({name: "test", email: "test@gmail.com"});
  }
  catch(err){
      localStorage.removeItem("token");
      throw new Error(err.response.data.message);
    }
  }


  return (
    <UsersContext.Provider value={{ user, handleUsers, handleToken, removeUser}}>
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

