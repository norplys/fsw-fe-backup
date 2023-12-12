"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { BiBrain } from "react-icons/bi";

export default function LoginLayout({ children }) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      mockLogin.then((res) => {
        if (res) {
          router.push("/");
        } else {
          setLoading(false);
        }
      });
    } else {
        mockLoading.then((res) => {
            if (res) {
            setLoading(false);
            }
        });
    }
  }, []);

  const mockLogin = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(true);
    }, 2000);
  });

  const mockLoading = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(true);
    }, 1000);
  });

  if (loading) return (
  <div className="bg-secret-pink flex items-center justify-center min-h-screen min-w-full">
    <BiBrain className="text-9xl text-white" />
    <div className="flex">
      <h1 className="text-7xl text-secret-text flex items-center font-bold">
        Skill
      </h1>
      <h1 className="text-7xl text-secret-text font-bold rounded-xl">HUB</h1>
    </div>
  </div>
  );

  return <section>{children}</section>;
}
