'use client'
import Navbar from "@/components/Navbar"
import { useEffect, useState } from "react"
import { useUsers } from "../context/usersContext"
import { useRouter } from "next/navigation"
import Guard from "@/components/Guard"

export default function CheckOutLayout({children}) {
  useEffect(()=>{
    const token = localStorage.getItem('token');
    if(token){
      ifToken(token);
      setLoading(false);
    }
    else{
      push('/login')
    }

      
  }, [])
    const {user, handleToken} = useUsers()
    const {push} = useRouter()
    const [loading, setLoading] = useState(true)
    const ifToken = async (token)=>{
      try{
        if(token && !user){
            await handleToken(token)
        }
      }
      catch(err){
        localStorage.removeItem('token')
        push('/login')
      }
    }
    if(loading){
      return <Guard/>
    }
    return (
      <section>
        <Navbar />
        {children}
      </section>
    )
  }