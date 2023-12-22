import Image from "next/image";
import Link from "next/link";

export default function Modals({ name, image }) {
  return (
    <div className="flex flex-col bg-slate-500 w-[30vw] justify-center items-center text-center gap-5 py-4 px-10 mt-5 rounded-2xl">
      <p className="text-white font-bold text-3xl m-0">Onboarding...</p>
      <Image
        className="bg-white w-full min-w-[150px] min-h-[120px]"
        src={image}
        width={140}
        height={100}
        alt={name}
      />
      <div className="flex flex-col gap-3">
        <p className="text-white text-sm font-semibold">
          Persiapkan hal berikut untuk belajar yang maksimal:
        </p>
        <p className="text-white text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id numquam
          doloribus odit aut!
        </p>
      </div>

      <button className="flex justify-center gap-1 mt-1 w-full p-2 bg-blue-600 rounded-[15px] relative">
        <div className="flex">
          <h2 className="text-base font-bold text-white">Ikuti Kelas</h2>
        </div>
      </button>
    </div>
  );
}