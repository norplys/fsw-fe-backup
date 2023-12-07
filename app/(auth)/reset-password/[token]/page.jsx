"use client";

import { useState } from "react";
import { BiBrain } from "react-icons/bi";
import Link from "next/link";

export default function ResetPassword() {
  return (
    <div className=" flex flex-col lg:flex-row w-full min-h-screen">
      <form className="p-8 lg:p-16 lg:w-2/3 flex items-center justify-center bg-secret-cyan overflow-hidden flex-1">
        <div className="w-full lg:w-2/3 text-black flex flex-col">
          <h1 className="font-bold text-3xl text-whit  lg:mb-12 text-left">
            Reset Password
          </h1>

          <div className="mb-4 lg:mb-8">
            <label htmlFor="password1" className="font-bold text-secret-text">Masukkan Password Baru</label>

            <input
              type="password"
              name="password1"
              placeholder="Password123"
              id="password1"
              className=" border-2 rounded-2xl w-full p-2 text-black mt-4 shadow-2xl focus:shadow-none focus:outline-none "
              required
            />
          </div>

          <div className="grid grid-cols-2 mb-4 lg:mb-8 pt">
            <label htmlFor="password2" className=" font-bold text-secret-text">Ulangi Password Baru</label>

            <input
              type="password"
              name="password"
              id="password2"
              placeholder="Password123"
              className="border-2 rounded-2xl w-full p-2 text-secret-text col-span-2 mt-4 shadow-2xl focus:shadow-none focus:outline-none"
              required
            />
          </div>
          <button type="submit" className="font-bold bg-secret-green text-white rounded-lg w-full p-2 shadow-2xl hover:shadow-none hover:scale-x-95">
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
