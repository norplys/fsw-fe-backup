"use client";
import { useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import AuthInput from "@/components/Auth/AuthInput";
import { BiBrain } from "react-icons/bi";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast , {Toaster} from "react-hot-toast";

const requiredArray = [
  {
    name: "Masukkan Password Baru",
    type: "password",
    placeholder: "Password123",
    id: "password1",
  },
  {
    name: "Ulangi Password Baru",
    type: "password",
    placeholder: "Password123",
    id: "password2",
  },
];

export default function ResetPassword() {
  const { token } = useParams();
  const { push } = useRouter();

  useEffect(() => {
    if (!token) push("/login");
    validateToken();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const validateToken = async () => {
    try{
      await axios.get("https://api.academy-skillhub.com/v1/validate-jwt", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    }
    catch(err){
      toast.error(err.response.data.message);
      push("/login");
    }
  }
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      password1: "",
      password2: "",
    },
  });
  const handleResetPassword = async (data) => {
    try{
      const newData = {
        new_password : data.password1,
      }
      const res = axios.put(`https://api.academy-skillhub.com/v1/reset-password/${token}`, newData);
      await toast.promise(res, {
        loading: "Memuat...",
        success: "Password berhasil diubah",
        error: "Gagal mengubah password, Mohon coba lagi",
      });
      toast.loading("Mengalihkan...", { duration: 2000 });
      await sleepRedirect();
    }
    catch(err){
      toast.error(err.response.data.message);
      if(err.response.data.message === "TokenExpiredError: jwt expired"){
        toast.error("Sesi Anda Telah Habis Silahkan Reset Password Ulang");
        push("/forgot-password");
      }
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
      <form className="p-8 lg:p-16 lg:w-2/3 flex items-center justify-center bg-secret-cyan flex-1" onSubmit={handleSubmit(handleResetPassword)}>
        <div className="w-full lg:w-2/3 text-black flex flex-col">
          <h1 className="font-bold text-xl md:text-3xl text-whit  lg:mb-12 text-left">
            Reset Password
          </h1>

          {requiredArray.map((item, index) => (
            <AuthInput
              key={index}
              {...item}
              register={register}
              errors={errors}
              isSubmitting={isSubmitting}
              watch={watch}
            />
          ))}
          <button
            type="submit"
            className="font-bold bg-secret-green text-white rounded-lg w-full p-2 shadow-2xl hover:shadow-none hover:scale-x-95 duration-300 text-sm md:text-base"
          >
            Simpan
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
    </div>
  );
}
