"use client";


import AuthInput from "@/components/Auth/AuthInput";
import { BiBrain } from "react-icons/bi";
import Link from "next/link";
import { useForm } from "react-hook-form";
import toast , {Toaster} from "react-hot-toast";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function ForgotPassword() {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();
  const { push } = useRouter();

  const handleForgotPassword = async (data) => {
    try{
    const newData = {
      email: data.email,
    }
    
    const res =  axios.post("https://api.academy-skillhub.com/v1/forget-password", newData);
    await toast.promise(res, {
      loading: "Loading...",
      success: `Link untuk reset password telah dikirim ke ${data.email}`,
      error: "Gagal mengirim link reset password",
    });
    toast.loading("Mengalihkan...", { duration: 2000 });
    await sleepRedirect();
  } catch (err) {
    if(err.response.status === 401){
      toast.error("Email tidak terdaftar");
      return;
    }
    if(err.response.status === 500){
      toast.error("Server Error");
      return;
    }
    toast.error(err.response.data.message);
  }
  }
  const sleepRedirect = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(push("/login"));
      }, 2000);
    });
  }
  return (
    <div className=" flex flex-col lg:flex-row w-full min-h-screen">
      <Toaster position="bottom-left"/>
      <form className="p-8 lg:p-16 lg:w-2/3 flex items-center justify-center bg-secret-cyan flex-1" onSubmit={handleSubmit(handleForgotPassword)}>
        <div className="w-full lg:w-2/3 text-black flex flex-col">
          <h1 className="font-bold text-xl md:text-3xl text-whit  lg:mb-12 text-left">
            Lupa Kata Sandi ?
          </h1>

          <AuthInput
            name="Masukkan Email Yang Terdaftar"
            type="email"
            placeholder="Ex: skillHUB@gmail.com"
            id="email"
            register={register}
            errors={errors}
            isSubmitting={isSubmitting}
          />

          <button type="submit" className="font-bold bg-secret-green text-white rounded-lg w-full p-2 shadow-2xl hover:shadow-none hover:scale-x-95 duration-300 text-sm md:text-base">

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

      <div className="bg-secret-pink p-8 lg:p-16 lg:w-1/3 hidden lg:flex items-center justify-center flex-1">
        <BiBrain className="text-9xl text-white" />
        <div className="flex flex-col lg:flex-row items-center">
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
