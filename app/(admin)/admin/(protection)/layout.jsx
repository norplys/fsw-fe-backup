"use client";
import Guard from "@/components/Guard";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useUsers } from "@/app/context/usersContext";

export default function Index({children}) {
    const [isLoading, setIsLoading] = useState(true);
    const { push } = useRouter();
    const { removeUser } = useUsers();
    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            push("/admin/login");
            return;
        }
        validateAdmin(token);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    
    const validateAdmin = async (token) => {
        try {
          const res = await axios.get(
            "https://api.academy-skillhub.com/v1/profile",
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          if (res.data.data.role !== "admin") {
            console.log("masuk");
            throw new Error("You are not admin");
          }
          setIsLoading(false);
        } catch (error) {
          removeUser();
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