"use client"
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { GiRank3 } from "react-icons/gi";
import { FaBookBookmark, FaRegClock } from "react-icons/fa6";
import { IoDiamond } from "react-icons/io5";
import Link from "next/link"
import { RxCross2 } from "react-icons/rx";

export default function HistoryCard({ data }) {
  const formatedDate = (date) => {
    const newDate = new Date(date);
    const format = new Intl.DateTimeFormat("id-ID", { dateStyle: "medium", timeStyle: "short" }).format(newDate);
    return format;
  }
  const today = Date.now();
  const isExpired = formatedDate(data?.expiredAt) < formatedDate(today);
  return (
    <Link
      className="flex flex-col  h-[300px] md:h-[250px] bg-secret-background rounded-[15px] shadow-md"
      href={data?.is_paid ? `/course/${data?.courseUuid}` : isExpired ? `/course/${data?.courseUuid}` : `/payment/${data?.paymentUuid}`}
    >
      <div className="w-full h-[80px] ">
        <Image
          width={323}
          height={80}
          className="w-full h-full object-cover rounded-t-2xl bg-slate-400"
          alt="gambar konten"
          src={data?.image}
        />
      </div>
      <div className="flex flex-col justify-around p-2 h-full">
        <div className="flex justify-between">
          <p className="md:text-lg font-bold text-secret-pink">
            {data?.courseCategory}
          </p>
          <div className="flex gap-1 text-black items-center">
            <FaStar className="text-yellow-400 md:text-lg" />
            <p className="text-secret-text3 font-semibold text-xs md:text-sm">
              {data?.courseRating}
            </p>
          </div>
        </div>
        <div className="text-black">
          <h2 className="font-bold text-sm md:text-base">{data?.courseName}</h2>
          <p className="text-sm">by {data?.courseAuthor}</p>
        </div>

        <div className="flex flex-wrap justify-between mr-[10px] mt-1">
          <div className="flex gap-1 leading-loose">
            <GiRank3 className="text-green-700 text-base md:text-lg" />
            <p className="font-semibold text-xs md:text-sm text-secret-text3">
              {data?.courseLevel}
            </p>
          </div>
          <div className="flex gap-1 leading-loose">
            <FaBookBookmark className="text-green-700 text-base md:text-lg" />
            <p className="text-xs md:text-sm font-semibold text-secret-text3">
              {data?.totalModules} Modul
            </p>
          </div>
          <div className="flex gap-1 leading-loose">
            <FaRegClock className="text-green-700 text-base md:text-lg" />
            <p className="text-xs md:text-sm font-semibold text-secret-text3">
              {data?.totalMinutes} Menit
            </p>
          </div>
        </div>
        {data?.is_paid ? (
          <div className="flex justify-center gap-1 mt-1 w-full md:w-[143px] p-1 bg-secret-darkblue rounded-[15px] relative">
            <div className="flex gap-3 justify-center items-center">
              <IoDiamond className="text-white text-lg" />
              <h2 className="text-xs font-bold text-white">Sudah Dibayar</h2>
            </div>
          </div>
        ) : (
          isExpired ? (
            <div className="flex justify-center gap-1 mt-1 w-full md:w-[143px] p-1 bg-red-500 rounded-[15px] relative">
              <div className="flex gap-3 justify-center items-center">
                <RxCross2 className="text-white text-lg" />
                <h2 className="text-xs font-bold text-white">Expired</h2>
              </div>
            </div>
          ) : (
            <div className="flex justify-center gap-1 mt-1 w-full md:w-[143px] p-1 bg-yellow-500 rounded-[15px] relative">
              <div className="flex gap-3 justify-center items-center">
                <IoDiamond className="text-white text-lg" />
                <h2 className="text-xs font-bold text-white">Belum Dibayar</h2>
              </div>
            </div>
          )
        )}
      </div>
    </Link>
  );
}
