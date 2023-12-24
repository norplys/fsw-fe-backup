"use client";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import { FiEdit3, FiSettings, FiShoppingCart } from "react-icons/fi";
import { useUsers } from "@/app/context/usersContext";
import { useForm } from "react-hook-form";
import { useState } from "react";
import ProfileSaya from "@/components/Auth/ProfileSaya";
import Password from "@/components/Auth/Password";
import RiwayatPembayaran from "@/components/Auth/RiwayatPembayaran";

export default function Profile() {
  const { user } = useUsers();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    values:{
      name: user?.name,
      email: user?.email,
      phone: user?.phone,
      country: user?.country,
      city: user?.city,
    }
  });
  const [currentTab, setCurrentTab] = useState("Profile");
  const handleTab = (tab) => {
    setCurrentTab(tab);
  };
  return (
    <>
      <div className="h-auto md:h-40 p-6 bg-secret-blue ">
        <Link
          href="/"
          className="flex justify-start px-4 md:px-12 gap-2 md:gap-5 mb-4 md:mb-8"
        >
          <FaArrowLeft className="text-4xl w-6 h-6" />
          <h1 className="font-bold text-xl">Kembali Ke Beranda</h1>
        </Link>
        <div></div>
        <div className="flex flex-col items-center">
          <div className="card bg-white w-full md:w-[50rem] h-auto md:h-[37rem] rounded-xl border border-secret-pink mb-8">
            <h1 className="flex justify-center font-bold px-5 py-5 bg-secret-pink rounded-t-xl text-2xl">
              Akun
            </h1>

            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2">
                <button className={`flex flex-row justify-start px-4 md:px-8 gap-5 my-2 md:my-5 hover:text-secret-darkblue ${currentTab === "Profile" ? 'text-blue-600' : ''}`} onClick={() => handleTab("Profile")}>
                  <FiEdit3 className="text-4xl w-7 h-7" />
                  <div className="flex flex-col justify-between font-bold text-lg">
                      Profile Saya
                  </div>
                </button>

                <button className={`flex flex-row justify-start px-4 md:px-8 gap-5 my-2 md:my-5 hover:text-secret-darkblue ${currentTab === "Password" ? 'text-blue-600' : ''}`} onClick={() => handleTab("Password")}>
                  <FiSettings className="text-4xl w-7 h-7" />
                  <div className="flex flex-col justify-between font-bold text-lg">
                      Ubah Password
                  </div>
                </button>

                <button className={`flex flex-row justify-start px-4 md:px-8 gap-5 my-2 md:my-5 hover:text-secret-darkblue ${currentTab === "Pembayaran" ? 'text-blue-600' : ''}`} onClick={() => handleTab("Pembayaran")}>
                  <FiShoppingCart className="text-4xl w-7 h-7" />
                  <div className="flex flex-col justify-between font-bold text-lg">
                      Riwayat Pembayaran
                  </div>
                </button>
              </div>
              <div className="md:w-1/2">
                {currentTab === "Profile" && <ProfileSaya register={register}/>}
                {currentTab === "Password" && <Password />}
                {currentTab === "Pembayaran" && <RiwayatPembayaran />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
