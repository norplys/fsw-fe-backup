import Image from "next/image";

export default function CoursesCard({
  name,
  img,
  price,
  rating,
  teacher,
  category,
  level,
}) {
  return (
    <div className="flex flex-col course w-96 h-[250px] bg-white rounded-[15px] drop-shadow ">
      {/* GAMBAR */}
      <div className="w-full h-[80px] ">
        <Image
          src={img}
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
          <p className="text-lg font-bold text-DARKBLUE05">{category}</p>
          {/* bintang */}
          <div className="flex text-black">
            <Image
              src="icon/bintang.svg"
              width={14}
              height={14}
              alt="icon bintang"
            />
            <p className="">{rating}</p>
          </div>
        </div>
        {/* keterangan */}
        <div className="text-black">
          {/* judul course */}
          <h2 className="text-base font-bold">{name}</h2>
          {/* nama pembuat course */}
          <p className="text-sm">by {teacher}</p>
        </div>
        {/* level, modul, waktu */}
        <div className="flex justify-between mr-[10px] mt-1">
          {/* level */}
          <div className="flex gap-[5px] leading-loose">
            <Image src="icon/perisai.svg" width={14} height={14} alt="icon" />
            <p className="font-semibold text-xs text-DARKBLUE05">
              {level} Level
            </p>
          </div>
          {/* jumlah modul */}
          <div className="flex gap-[5px] leading-loose">
            <Image src="icon/folder.svg" width={10} height={10} alt="icon" />
            <p className="text-xs text-black">10 Modul</p>
          </div>
          {/* waktu */}
          <div className="flex gap-[5px] leading-loose">
            <Image src="icon/waktu.svg" width={10} height={10} alt="icon" />
            <p className="text-xs text-black">120 Menit</p>
          </div>
        </div>
        {/*Beli button */}
        <button className="flex w-fit py-1 px-3 gap-2 bg-DARKBLUE03 rounded-[15px]">
          <Image
            src="icon/diamond.svg"
            width={10}
            height={10}
            className=" icon h-full"
            alt="icon"
          />
          <div className="flex gap-2">
            <h2 className="text-sm font-bold">Beli</h2>
            {/* HARGA */}
            <h2 className="text-sm font-bold">Rp {price}</h2>
          </div>
        </button>
      </div>
    </div>
  );
}
