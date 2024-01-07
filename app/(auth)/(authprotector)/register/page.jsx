"use client";

import { BiBrain } from "react-icons/bi";
import AuthInput from "@/components/Auth/AuthInput";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import { useRouter } from "next/navigation";

const requiredArray = [{
  name: "Nama",
  type: "text",
  placeholder: "skillHUB",
  id: "name"
}, {
  name: "Email",
  type: "email",
  placeholder: "ex: skillHUB@gmail.com",
  id: "email"
}, {
  name: "Nomor Telepon",
  type: "tel",
  placeholder: "0812345678",
  id: "phone"
}, {
  name: "Buat Password",
  type: "password",
  placeholder: "password",
  id: "password"
}];


export default function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm();

  const {push} = useRouter();
  const mockLoading = () => {
    return new Promise((resolve) => setTimeout(resolve, 1000));
  };

  const handleRegister = async (data) => {
    try{
    const register = axios.post("https://api.academy-skillhub.com/v1/register", data);
    const res = await toast.promise(register, {
      loading: "Memuat...",
      success: `${data.name} Berhasil diregister, Silahkan verifikasi email anda`,
      error: "Register Gagal"
    });
    toast.loading("Mengalihkan...");
    await mockLoading();
    push(`/register/otp/${res.data.data.token}?email=${data.email}`);

  } catch (error) {
    if (error.response.status === 400) {
      toast.error("Email atau Nomor Telepon Sudah Terdaftar");
      return;
    }
    if (error.response.status === 401) {
      toast.error("Email atau Nomor Telepon Sudah Terdaftar");
      return;
    }
    if (error.response.status === 500) {
      toast.error("Terjadi Kesalahan Pada Server");
      return;
    }
    toast.error(error.response.data.message);
  }

  }
  return (
    <div className=" flex flex-col lg:flex-row w-full min-h-screen">

      <form className="p-8 lg:p-16 lg:w-2/3 flex items-center justify-center bg-secret-cyan flex-1" onSubmit={handleSubmit(handleRegister)}>
        <div className="w-full lg:w-2/3 text-black flex flex-col">
          <h1 className="font-bold text-xl md:text-3xl text-whit  lg:mb-12 text-left">
            Daftar
          </h1>

          {requiredArray.map((item, index) => (
            <AuthInput key={index} {...item} register={register} errors = {errors}/>
          ))}
          <button disabled={isSubmitting} type="submit" className="font-bold bg-secret-green text-white rounded-lg w-full p-2 shadow-2xl hover:shadow-none hover:scale-x-95 duration-300 text-sm md:text-base">
            Masuk
          </button>
        </div>
      </form>

      <div className="bg-secret-pink p-8 lg:p-16 lg:w-1/3 hidden lg:flex items-center justify-center flex-1">
        <BiBrain className="text-9xl text-white" />
        <div className="flex flex-col lg:flex-row items-center">
          <h1 className="text-7xl text-secret-text flex items-center font-bold">
            SkillHUB
          </h1>
        </div>
      </div>
    <Toaster position="bottom-left" toastOptions={
      {
        loading : {
          duration: 2000
        }
      }
    }/>
    </div>
  );
}
