"use client"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import axios from "axios"
import Guard from "@/components/Guard"
import { useUsers } from "@/app/context/usersContext"
export default function LoginProtect({children}) {
    const [isLoading, setIsLoading] = useState(true);
    const { push } = useRouter();
    const {removeUser } = useUsers();
    useEffect(() => {
        const token = localStorage.getItem("token");
        if(!token){
          setIsLoading(false);
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
          if (!res.data.data.role === "admin") {
            throw new Error("You are not admin");
          }
          push("/admin/courses");
        } catch (error) {
          removeUser();
          setIsLoading(false);
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