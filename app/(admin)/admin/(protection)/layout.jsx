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
        if (token === null) {
            push("/admin/login");
            return;
        }
        validateAdmin(token);
        setIsLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    
    const validateAdmin = async (token) => {
        try {
          const res = await axios.get(
            "https://final-project-online-course.et.r.appspot.com/v1/profile",
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          if (res.data.data.role !== "admin") {
            throw new Error("You are not admin");
          }
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