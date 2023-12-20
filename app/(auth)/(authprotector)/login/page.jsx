"use client";

import { BiBrain } from "react-icons/bi";
import Link from "next/link";
import toast, { Toaster } from "react-hot-toast";
import { useRouter, useSearchParams } from "next/navigation";
import { useUsers } from "@/app/context/usersContext";
import { useForm } from "react-hook-form";

export default function LoginPage() {
  const { handleUsers } = useUsers();
  const { push } = useRouter();
  const searchParams = useSearchParams();
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
        loading: 'Loading',
        success: `${data.user} successfully logged in`,
        error: `${data.user} failed to login`
      }
    )
    toast.loading('Redirecting Please Wait...')
    await sleepRedirect();
    if(!redirect){
      push('/');
      return;
    }
    push(redirect);
    }
    catch(err){
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
        className="p-8 lg:p-16 lg:w-2/3 flex items-center justify-center bg-secret-cyan overflow-hidden flex-1"
      >
        <div className="w-full lg:w-2/3 text-black flex flex-col">
          <h1 className="font-bold text-3xl text-whit  lg:mb-12 text-left">
            Selamat Datang !
          </h1>

          {/* Email/No telp */}
          <div className="mb-4 lg:mb-8">
            <label htmlFor="user" className="font-bold text-secret-text">
              Email/No Telpon
            </label>

            <input
              {...register("user", {
                required: "Please fill this field",
                pattern: {
                  value: /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})|([0-9]{10})+$/,
                  message: "Please provide a valid Email Address or phone number",
                },
              })}
              type="text"
              name="user"
              placeholder="Ex: skillHUB@gmail.com / 081234567890"
              id="user"
              className={` ${
                errors.user ? "border-red-500" : ""
              } border-2 rounded-2xl w-full p-2 text-black mt-4 shadow-2xl focus:shadow-none focus:outline-none`}
            />
            {errors.user && (
              <p className="text-red-500 text-sm font-bold">{errors.user.message}</p>
            )}
          </div>

          <div className="grid grid-cols-2 mb-4 lg:mb-8">
            <label htmlFor="password" className=" font-bold text-secret-text">
              Password
            </label>

            <Link
              href="login/forgot-password"
              className="text-secret-text font-bold text-base hover:underline hover:text-white text-right"
            >
              Lupa Kata Sandi ?
            </Link>

            <input
              {...register("password", {
                required: "Please fill this field",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters",
                },
              })}
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              className={`border-2 ${
                errors.password ? "border-red-500" : ""
              } rounded-2xl w-full p-2 text-secret-text col-span-2 mt-4 shadow-2xl focus:shadow-none focus:outline-none`}
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
            disabled={isSubmitting}
            type="submit"
            className="font-bold bg-secret-green text-white rounded-lg w-full p-2 shadow-2xl hover:shadow-none hover:scale-x-95 duration-300"
          >
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
