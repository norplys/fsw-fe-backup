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
    const res = await axios.post("https://api.academy-skillhub.com/v1/login", data);
    localStorage.setItem("token", res.data.data.token);
    setUser(res.data.data); 
  }
  catch(err){
    if(err.response.status === 401){
      throw new Error("Email atau Password Salah");
    }
    if(err.response.status === 404){
      throw new Error("Email tidak terdaftar");
    }
    if(err.response.status === 500){
      throw new Error("Terjadi Kesalahan Pada Server");
    }
    throw new Error(err.response.data.message);
  }
  };

  const removeUser = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  const handleToken = async (token) => {
    try{
    const res = await axios.get("https://api.academy-skillhub.com/v1/profile", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setUser(res.data.data);
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

