"use client";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import NotificationCard from "@/components/Auth/NotificationCard";
import { useNotification } from "@/app/utils/hooks/useNotification";

const Notification = () => {
  const token = localStorage.getItem("token");
  const { data, isLoading } = useNotification(token);
  return (
    <>
      <div className="h-auto  p-3 md:p-6 bg-secret-blue min-h-screen">
        <Link
          href="/"
          className="flex justify-start md:px-8 gap-6 mb-8 text-sm md:text-xl items-center hover:text-secret-darkblue"
        >
          <FaArrowLeft />
          <h1 className="font-bold text-sm md:text-base">Kembali Ke Beranda</h1>
        </Link>
        <div className="flex justify-center items-center ">
          <div className="card bg-white w-full md:w-3/4 lg:w-3/6 xl:w-2/4 h-fit  rounded-xl border border-secret-pink">
            <h1 className="flex justify-center font-bold px-5 py-5 bg-secret-pink rounded-t-xl">
              Notification
            </h1>
            <div className="overflow-y-scroll h-full max-h-80 hide-scroll-bar">
              {isLoading ? (
                <div className="flex flex-col md:flex-row justify-start px-5 md:px-14 gap-5 my-5">
                  <div className="w-full text-center">
                    <h1 className="font-semibold animate-pulse">Loading...</h1>
                  </div>
                </div>
              ) : data.length !== 0 ? (
                data.map((item, index) => (
                  <NotificationCard key={index} data={item} />
                ))
              ) : (
                <div className="flex flex-col md:flex-row justify-start px-5 md:px-14 gap-5 my-5">
                  <div className="w-full text-center">
                    <h1 className="font-semibold">Tidak Ada Notifikasi</h1>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Notification;
