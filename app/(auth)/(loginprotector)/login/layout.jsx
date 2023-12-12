"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { BiBrain } from "react-icons/bi";
import { useUsers } from "@/app/context/usersContext";

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
      } else if (token) {
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
    }, 500);
  });

  if (loading)
    return (
      <div className="bg-secret-pink flex items-center justify-center min-h-screen min-w-full">
        <BiBrain className="text-9xl text-white" />
        <div className="flex">
          <h1 className="text-7xl text-secret-text flex items-center font-bold">
            Skill
          </h1>
          <h1 className="text-7xl text-secret-text font-bold rounded-xl">
            HUB
          </h1>
        </div>
      </div>
    );

  return <section>{children}</section>;
}
