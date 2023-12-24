import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { GiRank3 } from "react-icons/gi";
import { FaBookBookmark, FaRegClock } from "react-icons/fa6";
import { IoDiamond } from "react-icons/io5";
import Link from "next/link"

export default function HistoryCard({ data }) {
  return (
    <Link
      className="flex flex-col course md:max-w-full h-[300px] md:h-[250px] bg-secret-background rounded-[15px] shadow-md hover:border hover:border-secret-cyan"
      href={`/course/${data?.courseUuid}`}
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
          <p className="text-sm md:text-lg font-bold text-secret-pink">
            {data?.courseCategory}
          </p>
          <div className="flex gap-1 text-black items-center">
            <FaStar className="text-yellow-400 text-lg" />
            <p className="text-secret-text3 font-semibold text-sm">
              {data?.courseRating}
            </p>
          </div>
        </div>
        <div className="text-black">
          <h2 className="font-bold text-sm md:text-base">{data?.courseName}</h2>
          <p className="text-sm">by {data?.courseAuthor}</p>
        </div>

        <div className="flex flex-col md:flex-row justify-between mr-[10px] mt-1">
          <div className="flex gap-1 leading-loose">
            <GiRank3 className="text-secret-green text-lg" />
            <p className="font-semibold text-xs text-secret-text3">
              {data?.courseLevel}
            </p>
          </div>
          <div className="flex gap-1 leading-loose">
            <FaBookBookmark className="text-secret-green text-lg" />
            <p className="text-xs font-semibold text-secret-text3">
              {data?.totalModules} Modul
            </p>
          </div>
          <div className="flex gap-1 leading-loose">
            <FaRegClock className="text-secret-green text-lg" />
            <p className="text-xs font-semibold text-secret-text3">
              {data?.totalMinutes} Menit
            </p>
          </div>
        </div>
        {data?.is_paid ? (
          <div className="flex justify-center gap-1 mt-1 w-full md:w-[143px] p-1 bg-secret-darkblue rounded-[15px] relative">
            <div className="flex gap-3 justify-center items-center">
              <IoDiamond className="text-white text-lg" />
              <h2 className="text-xs font-bold text-white">Paid</h2>
            </div>
          </div>
        ) : (
          <div className="flex justify-center gap-1 mt-1 w-full md:w-[143px] p-1 bg-secret-pink rounded-[15px] relative">
            <div className="flex gap-3 justify-center items-center">
              <IoDiamond className="text-white text-lg" />
              <h2 className="text-xs font-bold text-white">Pending</h2>
            </div>
          </div>
        )}
      </div>
    </Link>
  );
}
