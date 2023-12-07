"use client";


import { BiBrain } from "react-icons/bi";
import AuthInput from "@/components/Auth/AuthInput";

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
  type: "text",
  placeholder: "+62",
  id: "phone"
}, {
  name: "Buat Password",
  type: "password",
  placeholder: "password",
  id: "password"
}];

export default function LoginPage() {
  return (
    <div className=" flex flex-col lg:flex-row w-full min-h-screen">

      <form className="p-8 lg:p-16 lg:w-2/3 flex items-center justify-center bg-secret-cyan overflow-hidden flex-1">
        <div className="w-full lg:w-2/3 text-black flex flex-col">
          <h1 className="font-bold text-3xl text-whit  lg:mb-12 text-left">
            Daftar
          </h1>
          {requiredArray.map((item, index) => (
            <AuthInput key={index} {...item} />
          ))}
          <button type="submit" className="font-bold bg-secret-green text-white rounded-lg w-full p-2 shadow-2xl hover:shadow-none hover:scale-x-95 duration-300">
            Masuk
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
