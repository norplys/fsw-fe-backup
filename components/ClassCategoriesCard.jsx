import Image from "next/image";
import Link from "next/link";
import { GiRank3 } from "react-icons/gi";
import { FaBookBookmark, FaRegClock } from "react-icons/fa6";
import { IoDiamond } from "react-icons/io5";
import { FaStar } from "react-icons/fa";

export default function ClassCategoriesCard({
  name,
  image,
  rating,
  teacher,
  category,
  level,
  isPremium,
  totalModule,
  totalMinute,
  id,
  price
}) {
  const priceFormat = (price) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(price);
  }
  const capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  return (
    <Link
      href={`course/${id}`}
      className="flex flex-col course w-full h-[250px] bg-secret-background rounded-[15px] duration-300 shadow-md hover:shadow-xl scale-95 hover:scale-100"
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
          <p className="text-lg md:text-base lg:text-lg xl:text-lg 2xl:text-lg font-bold text-secret-pink">{category}</p>

          <div className="flex gap-1 text-black items-center">
            <FaStar className="text-yellow-400 text-lg" />
            <p className="text-secret-text3 font-semibold text-sm">{rating}</p>
          </div>
        </div>

        <div className="text-black">
          <h2 className="text-base md:text-sm lg:text-base xl:text-base 2xl:text-base font-bold">{name}</h2>

          <p className="text-sm">by {teacher}</p>
        </div>

        <div className="flex justify-between mr-[10px] mt-1 flex-wrap">
          <div className="flex gap-1 leading-loose">
            <GiRank3 className="text-green-700 text-lg"/>
            <p className="font-semibold text-xs text-secret-text3">
              {capitalize(level)} Level
            </p>
          </div>
          <div className="flex gap-1 leading-loose">
          <FaBookBookmark className="text-green-700 text-md"/>
            <p className="text-xs font-semibold text-secret-text3">{totalModule} Modul</p>
          </div>
          <div className="flex gap-1 leading-loose">
          <FaRegClock className="text-green-700  text-md"/>
            <p className="text-xs font-semibold text-secret-text3">{totalMinute} Menit</p>
          </div>
        </div>
        {isPremium ? (
          <button className="flex items-center w-fit py-1 px-3 gap-2 bg-secret-pink rounded-[15px]">
            <IoDiamond className="text-xs text-secret-background" />
            <div className="flex gap-2">
            <h2 className="text-xs text-secret-background font-bold">Beli</h2>
            <h2 className="text-xs font-bold text-secret-background">{priceFormat(price)}</h2>
          </div>
        </button>
        ) : (
          <button className="flex justify-center gap-1 mt-1 w-[143px] p-1 bg-secret-pink rounded-[15px] relative">
            <div className="flex">
              <h2 className="text-xs font-bold text-white">Mulai Kelas</h2>
            </div>
          </button>
        )}
      </div>
    </Link>
  );
}
