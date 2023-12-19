"use client";
import Guard from "@/components/Guard";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function Index({children}) {
    const [isLoading, setIsLoading] = useState(true);
    const { push } = useRouter();
    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token === null) {
            push("/admin/login");
            return;
        }
        validateAdmin(token);
        setIsLoading(false);
    }, []);
    
    const validateAdmin = async (token) => {
        try {
          const res = await axios.get(
            "https://api.learnify.risalamin.com/users/me",
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          if (!res.data.data.admin) {
            throw new Error("You are not admin");
          }
        } catch (error) {
          localStorage.removeItem("token");
          push("/admin/login");
        }
      };
    if (isLoading) {
        return <Guard/>
    }

    return (
        <section>
            {children}
        </section>
    )
}