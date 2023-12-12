"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import { useUsers } from "@/app/context/usersContext";
import Guard from "@/components/Guard";


export default function LoginLayout({ children }) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const { user, handleToken } = useUsers();

  useEffect(() => {
    const token = localStorage.getItem("token");
    ifToken(token);
  }, []);

  const ifToken = async (token) => {
    try{
      if (token && !user) {
        await handleToken(token);
        await mockLoading;
        router.push("/");

      } else if (token && user) {

        await mockLoading;
        router.push("/");
      } else {
        await mockLoading;
        setLoading(false);
      }
    }
    catch(err){

      await mockLoading;

      setLoading(false);
    }
  };
  const mockLoading = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(true);
    }, 1000);
  });

  if (loading)
    return (

      <Guard />

    );

  return <section>{children}</section>;
}
