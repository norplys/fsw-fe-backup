"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useUsers } from "@/app/context/usersContext";
import Guard from "@/components/Guard";
import Navbar from "@/components/Navbar";
import {Toaster} from "react-hot-toast";

export default function CheckOutLayout({ children }) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const { user, handleToken } = useUsers();

  useEffect(() => {
    const token = localStorage.getItem("token");
    ifToken(token);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const ifToken = async (token) => {
    try{
      if (token && !user) {
        await handleToken(token);
        await mockLoading;
        setLoading(false);
      } else if (token && user) {
        await mockLoading;
        setLoading(false);
      } else {
        await mockLoading;
        router.push("/login");
      }
    }
    catch(err){
      await mockLoading;
      router.push("/login");
    }
  };
  const mockLoading = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(true);
    }, 1000);
  });

if (loading)
    return (
        <Guard/>
    )
 

  return (
  <section>
    <Navbar/>
    {children}
    <Toaster position="bottom-left"/>
  </section>
    );__
}
