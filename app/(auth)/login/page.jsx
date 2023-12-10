"use client";


import { BiBrain } from "react-icons/bi";
import Link from "next/link";
import toast from "react-hot-toast";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useUsers } from "@/app/context/usersContext";
import { useState } from "react";

export default function LoginPage() {
  const {users, handleUsers} = useUsers();
  const {push} = useRouter();
  const [disabled, setDisabled] = useState(false);
  
  const handleLogin = async (e) => {
    e.preventDefault();
    // setDisabled(true);
    const formData = new FormData(e.currentTarget);
    const formObject = Object.fromEntries(formData);
    const mock  =  mockLogin();
    console.log(formObject);
    handleUsers(formObject);
    const res = await toast.promise (
      mock , {
        loading: 'Loading',
        success: `${formObject.Email} successfully logged in`,
        error: 'Error'
      }
    )
    console.log(res);
    // await sleepRedirect();

  }

  const sleepRedirect = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(push('/'));
      }, 1000);
    });
  }

  const mockLogin = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(true);
      }, 1000);
    });
}

  return (
    <div className=" flex flex-col lg:flex-row w-full min-h-screen">
      {/* Bagian Kiri */}
      <form onSubmit={handleLogin} className="p-8 lg:p-16 lg:w-2/3 flex items-center justify-center bg-secret-cyan overflow-hidden flex-1">
        <div className="w-full lg:w-2/3 text-black flex flex-col">
          <h1 className="font-bold text-3xl text-whit  lg:mb-12 text-left">
            Selamat Datang !
          </h1>

          {/* Email/No telp */}
          <div className="mb-4 lg:mb-8">
            <label htmlFor="emailorphone" className="font-bold text-secret-text">Email/No Telpon</label>

            <input
              type="text"
              name="Email"
              placeholder="Ex: skillHUB@gmail.com / 081234567890"
              id="emailorphone"
              className=" border-2 rounded-2xl w-full p-2 text-black mt-4 shadow-2xl focus:shadow-none focus:outline-none "
              required
            />
          </div>

          <div className="grid grid-cols-2 mb-4 lg:mb-8">

            <label htmlFor="password" className=" font-bold text-secret-text">Password</label>

            <Link
              href="login/forgot-password"
              className="text-secret-text font-bold text-base hover:underline hover:text-white text-right"
            >
              Lupa Kata Sandi ?
            </Link>

            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              className="border-2 rounded-2xl w-full p-2 text-secret-text col-span-2 mt-4 shadow-2xl focus:shadow-none focus:outline-none"
              pattern=".{8,}" 
              title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
              required
            />
          </div>

          <button disabled={disabled} type="submit" className="font-bold bg-secret-green text-white rounded-lg w-full p-2 shadow-2xl hover:shadow-none hover:scale-x-95 duration-300">

            Masuk
          </button>

          <div className="text-secret-text items-center text-center mt-6">
            Belum punya akun?
            <Link
              href="/register"
              className="text-secret-text font-bold hover:underline hover:text-white pl-2"
            >
              Daftar di sini
            </Link>
          </div>
        </div>
      </form>

      {/* Bagian Kanan */}
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
    </div>
  );
}
