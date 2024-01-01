import Image from "next/image";
import Link from "next/link";
import { GiRank3 } from "react-icons/gi";
import { FaBookBookmark, FaRegClock } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";

export default function MyClassCard({
  name,
  image,
  rating,
  author,
  category,
  level,
  totalModule,
  totalMinute,
  id,
  totalProgress,
}) {
  return (
    <Link
      href={`course/${id}`}
      className="flex flex-col course w-full h-[250px] bg-secret-background rounded-[15px] duration-300 shadow-lg hover:shadow-2xl scale-95 hover:scale-100"
    >
      <div className="w-full h-[80px] ">
        <Image
          src={image}
          width={323}
          height={80}
          className="w-full h-full object-cover rounded-t-2xl"
          alt="gambar konten"
        />
      </div>

      <div className="flex flex-col justify-around p-2 h-full">
        <div className="flex justify-between">
          <p className="text-lg font-bold text-secret-pink">{category}</p>

          <div className="flex gap-1 text-black items-center">
            <FaStar className="text-yellow-400 text-lg" />
            <p className="text-secret-text3 font-semibold text-sm">{rating}</p>
          </div>
        </div>

        <div className="text-black">
          <h2 className="text-base font-bold">{name}</h2>

          <p className="text-sm">by {author}</p>
        </div>

        <div className="flex justify-between mr-[10px] mt-1">
          <div className="flex gap-1 leading-loose">
            <GiRank3 className="text-green-700 text-lg" />
            <p className="font-semibold text-xs text-secret-text3">
              {level} Level
            </p>
          </div>
          <div className="flex gap-1 leading-loose">
            <FaBookBookmark className="text-green-700 text-md" />
            <p className="text-xs font-semibold text-secret-text3">
              {totalModule} Modul
            </p>
          </div>
          <div className="flex gap-1 leading-loose">
            <FaRegClock className="text-green-700  text-md" />
            <p className="text-xs font-semibold text-secret-text3">
              {totalMinute} Menit
            </p>
          </div>
        </div>
        <div className="w-[150px] bg-secret-pink rounded-[25px] max-h-4">
          <div
            className="bg-secret-darkblue rounded-[25px]"
            style={{ width: `${totalProgress}%` }}
          >
            <p className="text-xs font-bold text-secret-background pl-3">
              {totalProgress}%
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}
