"use client";

import { BiBrain } from "react-icons/bi";
import Otp from "@/components/Auth/Otp";
import { useState, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useParams, useSearchParams, useRouter } from "next/navigation";

export default function OtpPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { push } = useRouter();
  const params = useSearchParams();
  const { token } = useParams();
  const email = params.get("email");
  const [tokenData, setTokenData] = useState({});

  const [otp, setOtp] = useState(new Array(6).fill(0));
  const reference = useRef([]);

  function handleChange(value, index) {
    let newArr = [...otp];
    newArr[index] = value;
    setOtp(newArr);
    if (value && index < 6 - 1) {
      reference.current[index + 1].focus();
    }
  }
  function handleBackspace(index, e) {
    {
      if (e.key === "Backspace" && index > 0) {
        reference.current[index - 1].focus();
      }
    }
  }

  const sleepRedirect = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(push("/login"));
      }, 1500);
    });
  };
  useEffect(() => {
    try {
      validateToken(token);
    } catch (err) {
      push("/register");
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const validateToken = async (token) => {
    try {
      const validate = await axios.get(
        "https://api.academy-skillhub.com/v1/validate-jwt",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setTokenData(validate.data.data);
    } catch (err) {
      push("/register");
    }
  };
  const handleOtp = async (data) => {
    try {
      const otp = Object.values(data).join("");
      const register = axios.post(
        "https://api.academy-skillhub.com/v1/validate-register",
        { otp },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      await toast.promise(register, {
        loading: "Loading...",
        success: "OTP Berhasil Diverifikasi",
        error: "OTP Gagal Diverifikasi",
      });
      toast.loading("Mengalihkan...");
      await sleepRedirect();
    } catch (err) {
      if(err.response.status === 400) {
        toast.error("OTP Salah");
        return;
      }
      if (err.response.data.message === "jwt expired") {
        toast.error("Sesi Anda Telah Habis Silahkan Register Ulang");
        push("/register");
        return;
      }
      toast.error(err.response.data.message);
    }
  };

  const formatDate = (date) => {
    if(!date) return 0;
    const newDate = new Date(date);
    const intl = new Intl.DateTimeFormat("id-ID", {
      dateStyle: "short",
      timeStyle: "short",
    }).format(newDate);
    return intl;
  };
  return (
    <div className=" flex flex-col lg:flex-row w-full min-h-screen">
      <form
        className="p-8 lg:p-16 lg:w-2/3 flex items-center justify-center bg-secret-cyan flex-1"
        onSubmit={handleSubmit(handleOtp)}
      >
        <div className="w-full lg:w-2/3 text-black flex flex-col">
          <h1 className="font-bold text-xl md:text-3xl text-whit  lg:mb-12 text-left">
            Masukkan OTP
          </h1>

          <p className="text-sm md:text-base text-secret-text mb-4">
            Ketik 6 digit kode yang dikirimkan ke{" "}
            <span className="font-bold">{email}</span>
          </p>
          <div className="mb-4 lg:mb-8 flex gap-1 md:gap-6">
            {otp.map((_, index) => (
              <Otp
                key={index}
                index={index}
                register={register}
                errors={errors}
                reference={reference}
                handleChange={handleChange}
                handleBackspace={handleBackspace}
              />
            ))}
          </div>
            <p className=" bg-secret-red text-white rounded-lg mb-4 text-center font-bold text-sm md:text-base border border-red-500">
              Mohon Validasi OTP Sebelum {formatDate(tokenData?.expiredAt)}
            </p>
       
  
          <button
            type="submit"
            className="font-bold bg-secret-green text-white rounded-lg w-full p-2 shadow-2xl hover:shadow-none hover:scale-x-95 duration-300"
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
      <Toaster
        position="bottom-left"
        toastOptions={{
          loading: {
            duration: 2000,
          },
        }}
      />
    </div>
  );
}
