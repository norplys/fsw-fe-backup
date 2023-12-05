import Image from "next/image";
import Link from "next/link";
import { GiRank3 } from "react-icons/gi";
import { FaBookBookmark, FaRegClock } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import { IoDiamond } from "react-icons/io5";

export default function CoursesCard({
  id,
  name,
  image,
  price,
  rating,
  teacher,
  category,
  level,
  totalModule,
  totalMinute,
}) {
  return (
    <Link href={`course/${id}`} className="flex flex-col course hover:scale-105 ease-in-out duration-200 bg-secret-black rounded-[15px] drop-shadow shadow-2xl ">
      {/* GAMBAR */}
      <div className="h-[80px] bg-cover ">
        <Image
          src={image}
          width={323}
          height={80}
          className="w-full h-full object-cover rounded-t-2xl"
          alt="gambar konten"
        />
      </div>
      {/* keterangan */}
      <div className="flex flex-col justify-around p-2 h-full">
        <div className="flex justify-between">
          {/* kategori */}
          <p className="text-lg font-bold text-secret-text">{category}</p>
          {/* bintang */}
          <div className="flex gap-1 text-black">
            <FaStar className="text-yellow-400 text-lg" />
            <p className="text-slate-50">{rating}</p>
          </div>
        </div>
        {/* keterangan */}
        <div className="text-black">
          {/* judul course */}
          <h2 className="text-base text-secret-text font-bold">{name}</h2>
          {/* nama pembuat course */}
          <p className="text-sm text-secret-orange">by {teacher}</p>
        </div>
        {/* level, modul, waktu */}
        <div className="flex justify-between items-center mt-1">
          {/* level */}
          <div className="flex gap-[5px] leading-loose">
            <GiRank3 className="text-secret-text text-lg"/>
            <p className="font-semibold text-sm text-secret-text">
              {level} Level
            </p>
          </div>
          {/* jumlah modul */}
          <div className="flex gap-[5px] leading-loose">
          <FaBookBookmark className="text-secret-text text-lg"/>
            <p className="font-semibold text-sm text-secret-text">{totalModule} Modul</p>
          </div>
          {/* waktu */}
          <div className="flex gap-[5px] leading-loose">
          <FaRegClock className="text-secret-text text-lg"/>
            <p className="font-semibold text-sm text-secret-text">{totalMinute} Menit</p>
          </div>
        </div>
        {/*Beli button */}
        <button className="flex items-center w-fit py-1 px-3 gap-2 bg-secret-cyan rounded-[15px]">
          <IoDiamond className="text-base text-secret-background" />
          <div className="flex gap-2">
            <h2 className="text-sm text-secret-background font-bold">Beli</h2>
            {/* HARGA */}
            <h2 className="text-sm font-bold text-secret-background">Rp {price}</h2>
          </div>
        </button>
      </div>
    </Link>
  );
}
