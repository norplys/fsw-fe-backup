"use client";

import { BiBrain } from "react-icons/bi";
import Link from "next/link";
import toast, { Toaster } from "react-hot-toast";
import { useRouter, useSearchParams } from "next/navigation";
import { useUsers } from "@/app/context/usersContext";
import { useForm } from "react-hook-form";
import { useState } from "react";

export default function LoginPage() {
  const { handleUsers } = useUsers();
  const { push } = useRouter();
  const searchParams = useSearchParams();
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      user: "",
      password: "",
    },
  });


  const handleLogin = async (data) => {
    try{
    const redirect = searchParams.get("redirect");
    const login = handleUsers(data);
    await toast.promise (
      login , {
        loading: 'Memuat...',
        success: `${data.user} Berhasil Login`,
        error: `${data.user} Gagal Login`,
      }
    )
    setLoading(true);
    toast.loading('Sedang Mengalihkan...', {
      duration: 2000,
    })
    await sleepRedirect();
    if(!redirect){
      push('/');
      return;
    }
    push(redirect);
    }
    catch(err){
      setLoading(false);
      toast.error(err.message);
    }

  }

  const sleepRedirect = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(true);
      }, 1500);
    });
  };

  return (
    <div className=" flex flex-col lg:flex-row w-full min-h-screen">
      {/* Bagian Kiri */}
      <form
        onSubmit={handleSubmit(handleLogin)}
        className="p-8 xl:p-16 lg:w-2/3 flex items-center justify-center bg-secret-cyan flex-1"
      >
        <div className="w-full lg:w-2/3 text-black flex flex-col">
          <h1 className="font-bold text-xl md:text-3xl text-whit  lg:mb-12 text-left">
            Selamat Datang !
          </h1>

          {/* Email/No telp */}
          <div className="mb-4 lg:mb-8">
            <label htmlFor="user" className="font-bold text-secret-text text-sm md:text-base">
              Email/No Telpon
            </label>

            <input
              {...register("user", {
                required: "Mohon isi kolom ini",
                pattern: {
                  value: /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})|([0-9]{10})+$/,
                  message: "Mohon isi dengan email/no telpon yang valid",
                },
              })}
              type="text"
              name="user"
              placeholder="Ex: skillHUB@gmail.com / 081234567890"
              id="user"
              className={` border-2 text-sm md:text-base rounded-2xl w-full p-2 text-black mt-4 shadow-2xl focus:shadow-none focus:outline-none ${
                errors.user ? "border-red-500" : ""
              }`}
            />
            {errors.user && (
              <p className="text-red-500 text-sm font-bold">{errors.user.message}</p>
            )}
          </div>

          <div className="grid grid-cols-2 mb-4 lg:mb-8">
            <label htmlFor="password" className=" font-bold text-secret-text text-sm md:text-base">
              Password
            </label>

            <Link
              href="/forgot-password"
              className="text-secret-text font-bold  hover:underline hover:text-white text-right text-sm md:text-base"
            >
              Lupa Kata Sandi ?
            </Link>

            <input
              {...register("password", {
                required: "Mohon isi kolom ini",
                minLength: {
                  value: 8,
                  message: "Password minimal 8 karakter",
                },
              })}
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              className={`border-2 ${
                errors.password ? "border-red-500" : ""
              } rounded-2xl w-full p-2 text-secret-text col-span-2 mt-4 shadow-2xl focus:shadow-none focus:outline-none text-sm md:text-base`}
            />
            {errors.password && (
              <p className="text-red-500 text-sm font-bold">{errors.password.message}</p>
            )}
            <Toaster position="bottom-left" toastOptions={{
              loading: {
                duration: 2000,
              },
            }}/>
          </div>

          <button
            disabled={isSubmitting || loading}
            type="submit"
            className="font-bold bg-secret-green text-white rounded-lg w-full p-2 shadow-2xl hover:shadow-none hover:scale-x-95 duration-300 text-sm md:text-base"
          >
            Masuk
          </button>

          <div className="text-secret-text items-center text-center mt-6 text-sm md:text-base">
            Belum punya akun?
            <Link
              href="/register"
              className="text-secret-text font-bold hover:underline hover:text-white pl-2 text-sm md:text-base"
            >
              Daftar di sini
            </Link>
          </div>
        </div>
      </form>

      {/* Bagian Kanan */}
      <div className="bg-secret-pink p-8 lg:p-16 lg:w-1/3 hidden lg:flex items-center justify-center flex-1">
        <BiBrain className="text-7xl xl:text-9xl text-white" />
        <div className="flex flex-col lg:flex-row items-center">
          <h1 className="text-4xl xl:text-7xl text-secret-text flex items-center font-bold">
            SkillHUB
          </h1>
        </div>
      </div>
    </div>
  );
}
