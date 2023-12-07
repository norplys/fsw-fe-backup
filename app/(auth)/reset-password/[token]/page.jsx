"use client";


import AuthInput from "@/components/Auth/AuthInput";
import { BiBrain } from "react-icons/bi";

const requiredArray = [{
  name: "Masukkan Password Baru",
  type: "password",
  placeholder: "Password123",
  id: "password1"
}, {
  name: "Ulangi Password Baru",
  type: "password",
  placeholder: "Password123",
  id: "password2"
}];

export default function ResetPassword() {
  return (
    <div className=" flex flex-col lg:flex-row w-full min-h-screen">
      <form className="p-8 lg:p-16 lg:w-2/3 flex items-center justify-center bg-secret-cyan overflow-hidden flex-1">
        <div className="w-full lg:w-2/3 text-black flex flex-col">
          <h1 className="font-bold text-3xl text-whit  lg:mb-12 text-left">
            Reset Password
          </h1>


          {requiredArray.map((item, index) => (
            <AuthInput key={index} {...item} />
          ))}
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
    </div>
  );
}