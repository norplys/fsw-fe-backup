"use client";


import { BiBrain } from "react-icons/bi";
import Otp from "@/components/Auth/Otp";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast , { Toaster } from "react-hot-toast";
import {useParams, useSearchParams, useRouter} from "next/navigation";

const mockArray = Array(6).fill(0);
export default function OtpPage() {
  const [timer, setTimer] = useState(60);
  const { register, handleSubmit, formState: { errors } } = useForm();
  const {push} = useRouter();
  const params = useSearchParams();
  const { token } = useParams();
  const email = params.get("email");


  const sleepRedirect = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(push("/login"));
      }, 1500);
    });
  };
  useEffect(() => {
    const interval = setInterval(() => {
      if (timer === 0) {
        clearInterval(interval);
        return;
      }
      setTimer((prev) => prev - 1);
    }
    , 1000);
    return () => clearInterval(interval);
  }
  , [timer]);
  const handleOtp = async (data) => {
    try{
    const otp = Object.values(data).join("");
    const register = axios.post("https://final-project-online-course.et.r.appspot.com/v1/validate-register", { otp }, {headers : {
      Authorization: `Bearer ${token}`,
    }});
    const res = await toast.promise(register, {
      loading: "Loading...",
      success: "OTP successfully verified",
      error: "OTP failed to verify",
    });
    toast.loading("Redirecting Please Wait...");
    await sleepRedirect();
  }
  catch(err){
    if(err.response.data.message === "jwt expired"){
      push("/register");
    }
    toast.error(err.response.data.message);
  } 
  }
  return (
    <div className=" flex flex-col lg:flex-row w-full min-h-screen">

      <form className="p-8 lg:p-16 lg:w-2/3 flex items-center justify-center bg-secret-cyan overflow-hidden flex-1" onSubmit={handleSubmit(handleOtp)}>
        <div className="w-full lg:w-2/3 text-black flex flex-col">
          <h1 className="font-bold text-3xl text-whit  lg:mb-12 text-left">
            Masukkan OTP
          </h1>

        <p className="text-base text-secret-text mb-4">Ketik 6 digit kode yang dikirimkan ke <span className="font-bold">{email}</span></p>
          <div className="mb-4 lg:mb-8 flex gap-6">
            { mockArray.map((_, index) => 
                <Otp
                  key={index}
                  index={index}
                  register={register}
                  errors={errors}
                />
            )}  
          </div>
          {
            timer > 0 ?
          <p className="text-base text-secret-text mb-4 text-center">Kirim Ulang OTP dalam <span className="font-bold">{timer}</span> Detik</p>
          :
          <p className="text-base text-secret-text mb-4 text-center">Kirim Ulang <span className="font-bold">OTP</span></p>
          }
            <button type="submit" className="font-bold bg-secret-green text-white rounded-lg w-full p-2 shadow-2xl hover:shadow-none hover:scale-x-95 duration-300">
            Simpan          
            </button>
        </div>
      </form>

      <div className="bg-secret-pink p-8 lg:p-16 lg:w-1/3 flex items-center justify-center flex-1">
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
      <Toaster position="bottom-left" toastOptions={{
        loading: {
          duration: 2000,
        },
      }}/>
    </div>
  );
}
