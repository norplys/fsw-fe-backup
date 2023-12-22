import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { FiEdit3, FiSettings, FiShoppingCart } from "react-icons/fi";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { GiRank3 } from "react-icons/gi";
import { FaBookBookmark, FaRegClock } from "react-icons/fa6";
import { IoDiamond } from "react-icons/io5";

export default function UbahPassword() {
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
          <div className="card bg-white w-full md:w-[50rem] h-auto md:h-[35rem] rounded-xl border border-secret-pink mb-8">
            <h1 className="flex justify-center font-bold px-5 py-5 bg-secret-pink rounded-t-xl text-2xl">
              Riwayat Pembayaran
            </h1>

            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2">
                <div className="flex flex-row justify-start px-4 md:px-8 gap-5 my-2 md:my-5 hover:text-blue-600">
                  <FiEdit3 className="text-4xl w-7 h-7" />
                  <div className="flex flex-col justify-between">
                    <a href="/profile" className="font-bold text-lg">
                      Profile Saya
                    </a>
                  </div>
                </div>

                <div className="flex flex-row justify-start px-4 md:px-8 gap-5 my-2 md:my-5 hover:text-blue-600">
                  <FiSettings className="text-4xl w-7 h-7" />
                  <div className="flex flex-col justify-between">
                    <a
                      href="/profile/ubah-password"
                      className="font-bold text-lg"
                    >
                      Ubah Password
                    </a>
                  </div>
                </div>

                <div className="flex flex-row justify-start px-4 md:px-8 gap-5 my-2 md:my-5 hover:text-blue-600">
                  <FiShoppingCart className="text-4xl w-7 h-7" />
                  <div className="flex justify-between">
                    <a
                      href="/profile/riwayat-pembayaran"
                      className="font-bold text-lg"
                    >
                      Riwayat Pembayaran
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex flex-col w-100 md:w-1/2 p-3  ">
                <div className="flex flex-col course md:max-w-full h-[300px] md:h-[250px] bg-secret-background rounded-[15px] duration-300 shadow-xl hover:scale-105 hover:shadow-2xl">
                  <div className="w-full h-[80px] ">
                    <Image
                      src="/image.png"
                      width={323}
                      height={80}
                      className="w-full h-full object-cover rounded-t-2xl bg-slate-400"
                      alt="gambar konten"
                    />
                  </div>
                  <div className="flex flex-col justify-around p-2 h-full">
                    <div className="flex justify-between">
                      <p className="text-sm md:text-lg font-bold text-secret-pink">
                        UI/UX Design
                      </p>
                      <div className="flex gap-1 text-black items-center">
                        <FaStar className="text-yellow-400 text-lg" />
                        <p className="text-secret-text3 font-semibold text-sm">
                          4.7
                        </p>
                      </div>
                    </div>
                    <div className="text-black">
                      <h2 className="font-bold text-sm md:text-base">
                        Belajar Web Designer dengan Figma
                      </h2>
                      <p className="text-sm">by Angela Doe</p>
                    </div>

                    <div className="flex flex-col md:flex-row justify-between mr-[10px] mt-1">
                      <div className="flex gap-1 leading-loose">
                        <GiRank3 className="text-green-700 text-lg" />
                        <p className="font-semibold text-xs text-secret-text3">
                          Intermediate Level
                        </p>
                      </div>
                      <div className="flex gap-1 leading-loose">
                        <FaBookBookmark className="text-green-700 text-lg" />
                        <p className="text-xs font-semibold text-secret-text3">
                          10 Modul
                        </p>
                      </div>
                      <div className="flex gap-1 leading-loose">
                        <FaRegClock className="text-green-700 text-lg" />
                        <p className="text-xs font-semibold text-secret-text3">
                          120 Menit
                        </p>
                      </div>
                    </div>
                    <button className="flex justify-center gap-1 mt-1 w-full md:w-[143px] p-1 bg-green-500 rounded-[15px] relative">
                      <div className="flex gap-3 justify-center items-center">
                        <IoDiamond className="text-white text-lg" />
                        <h2 className="text-xs font-bold text-white">Paid</h2>
                      </div>
                    </button>
                  </div>

                  <div className="flex flex-col course md:max-w-full h-[300px] md:h-[250px] bg-secret-background rounded-[15px] duration-300 shadow-xl hover:scale-105 hover:shadow-2xl">
                  <div className="w-full h-[80px] ">
                    <Image
                      width={323}
                      height={80}
                      className="w-full h-full object-cover rounded-t-2xl bg-slate-400"
                      alt="gambar konten"
                    />
                  </div>
                  <div className="flex flex-col justify-around p-2 h-full">
                    <div className="flex justify-between">
                      <p className="text-sm md:text-lg font-bold text-secret-pink">
                        UI/UX Design
                      </p>
                      <div className="flex gap-1 text-black items-center">
                        <FaStar className="text-yellow-400 text-lg" />
                        <p className="text-secret-text3 font-semibold text-sm">
                          4.7
                        </p>
                      </div>
                    </div>
                    <div className="text-black">
                      <h2 className="font-bold text-sm md:text-base">
                        Belajar Web Designer dengan Figma
                      </h2>
                      <p className="text-sm">by Angela Doe</p>
                    </div>

                    <div className="flex flex-col md:flex-row justify-between mr-[10px] mt-1">
                      <div className="flex gap-1 leading-loose">
                        <GiRank3 className="text-green-700 text-lg" />
                        <p className="font-semibold text-xs text-secret-text3">
                          Intermediate Level
                        </p>
                      </div>
                      <div className="flex gap-1 leading-loose">
                        <FaBookBookmark className="text-green-700 text-lg" />
                        <p className="text-xs font-semibold text-secret-text3">
                          10 Modul
                        </p>
                      </div>
                      <div className="flex gap-1 leading-loose">
                        <FaRegClock className="text-green-700 text-lg" />
                        <p className="text-xs font-semibold text-secret-text3">
                          120 Menit
                        </p>
                      </div>
                    </div>
                    <button className="flex justify-center gap-1 mt-1 w-full md:w-[143px] p-1 bg-green-500 rounded-[15px] relative">
                      <div className="flex gap-3 justify-center items-center">
                        <IoDiamond className="text-white text-lg" />
                        <h2 className="text-xs font-bold text-white">Paid</h2>
                      </div>
                    </button>
                  </div>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
