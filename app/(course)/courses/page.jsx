"use client";

import { useState } from "react";
import Image from "next/image";

import { BiSearchAlt } from "react-icons/bi";

export default function Courses() {
  // in progress button useState
  const [isActive, setIsActive] = useState(false);
  // all button useState
  const [isActive2, setIsActive2] = useState(false);
  // selesai button useState
  const [isActive3, setIsActive3] = useState(false);

  // in progress button handleclick
  const IPHandleClick = () => {
    setIsActive(!isActive);
  };
  // all button handleclick
  const AllHandleClick = () => {
    setIsActive2(!isActive2);
  };
  // selesai button handleclick
  const selesaiHandleClick = () => {
    setIsActive3(!isActive3);
  };
  return (
    <div className="overflow-x-hidden">
      <main className=" bg-check-fill px-[150px] py-[80px] w-full h-auto font-montserrat ">
        <div className="flex justify-between ">
          <h1 className="text-black mb-10 font-bold text-[24px]">
            Kelas Berjalan
          </h1>
          {/* SEARCH BUTTON */}
          <div className="relative flex flex-shrink-0 ml-5">
            <input
              type="text"
              placeholder="Cari Kelas..."
              name="search"
              className="w-[200px] h-[36px] px-10  rounded-[16px] text-sm"
            />

            <button className="search absolute top-[18px] -translate-y-1/2 right-3 transform bg-DARKBLUE05 p-2 rounded-[10px]">
              <BiSearchAlt color="white" size={10} />
            </button>
          </div>
        </div>

        <div className="flex lg:flex-row gap-[88px] ">
          {/* FORM FILTER */}
          <form className="bg-white flex flex-col w-[267px] h-auto rounded-[16px] p-6 gap-5">
            {/* FILTER */}
            <h2 className="text-black font-bold text-[16px]">Filter</h2>
            {/* Paling Baru */}
            <div className="flex gap-4 leading-normal">
              <input
                type="checkbox"
                id="paling_baru"
                className="border-check-border active:bg-DARKBLUE05  text-DARKBLUE05 border-2 rounded-[8px] bg-check-fill w-[24px] h-[24px]"
                value="paling_baru"
              />
              <label htmlFor="paling_baru" className="text-black">
                Paling Baru
              </label>
            </div>
            {/* Paling Populer */}
            <div className="flex gap-4 leading-normal">
              <input
                type="checkbox"
                id="paling_populer"
                className="border-check-border active:bg-DARKBLUE05  text-DARKBLUE05 border-2 rounded-[8px] bg-check-fill w-[24px] h-[24px]"
                value="paling_populer"
              />
              <label htmlFor="paling_populer" className="text-black">
                Paling Populer
              </label>
            </div>
            {/* Promo */}
            <div className="flex gap-4 leading-normal">
              <input
                type="checkbox"
                id="promo"
                className="border-check-border active:bg-DARKBLUE05  text-DARKBLUE05 border-2 rounded-[8px] bg-check-fill w-[24px] h-[24px]"
                value="promo"
              />
              <label htmlFor="promo" className="text-black">
                Promo
              </label>
            </div>

            {/* KATERGORI */}
            <h2 className="text-black font-bold">Kategori</h2>
            {/* UI/UX Design */}
            <div className="flex gap-4 leading-normal">
              <input
                type="checkbox"
                id="ui/ux"
                className="border-check-border active:bg-DARKBLUE05  text-DARKBLUE05 border-2 rounded-[8px] bg-check-fill w-[24px] h-[24px]"
                value="ui/ux"
              />
              <label htmlFor="ui/ux" className="text-black">
                UI/UX Design
              </label>
            </div>
            {/* web_development */}
            <div className="flex gap-4 leading-normal">
              <input
                type="checkbox"
                id="web_development"
                className="border-check-border active:bg-DARKBLUE05  text-DARKBLUE05 border-2 rounded-[8px] bg-check-fill w-[24px] h-[24px]"
                value="web_development"
              />
              <label htmlFor="web_development" className="text-black">
                Web Development
              </label>
            </div>
            {/* android_development */}
            <div className="flex gap-4 leading-normal">
              <input
                type="checkbox"
                id="android_development"
                className="border-check-border active:bg-DARKBLUE05  text-DARKBLUE05 border-2 rounded-[8px] bg-check-fill w-[24px] h-[24px]"
                value="android_development"
              />
              <label htmlFor="android_development" className="text-black">
                Android Development
              </label>
            </div>
            {/* data_science */}
            <div className="flex gap-4 leading-normal">
              <input
                type="checkbox"
                id="data_science"
                className="border-check-border active:bg-DARKBLUE05  text-DARKBLUE05 border-2 rounded-[8px] bg-check-fill w-[24px] h-[24px]"
                value="data_science"
              />
              <label htmlFor="data_science" className="text-black">
                Data Science
              </label>
            </div>
            {/* business_intelligence */}
            <div className="flex gap-4 leading-normal">
              <input
                type="checkbox"
                id="business_intelligence"
                className="border-check-border active:bg-DARKBLUE05  text-DARKBLUE05 border-2 rounded-[8px] bg-check-fill w-[24px] h-[24px]"
                value="business_intelligence"
              />
              <label htmlFor="business_intelligence" className="text-black">
                Business Intelligence
              </label>
            </div>

            {/* KESULITAN */}
            <h2 className="text-black font-bold">Kesulitan</h2>
            {/* SEMUA LEVEL */}
            <div className="flex gap-4 leading-normal">
              <input
                type="checkbox"
                id="semua_level"
                className="border-check-border active:bg-DARKBLUE05  text-DARKBLUE05 border-2 rounded-[8px] bg-check-fill w-[24px] h-[24px]"
                value="semua_level"
              />
              <label htmlFor="semua_level" className="text-black">
                {" "}
                Semua Level
              </label>
            </div>
            {/* BEGINNER LEVEL */}
            <div className="flex gap-4 leading-normal">
              <input
                type="checkbox"
                id="beginner_level"
                className="border-check-border active:bg-DARKBLUE05  text-DARKBLUE05 border-2 rounded-[8px] bg-check-fill w-[24px] h-[24px]"
                value="beginner_level"
              />
              <label htmlFor="beginner_level" className="text-black">
                {" "}
                Beginner Level
              </label>
            </div>
            {/* INTERMEDIATE LEVEL */}
            <div className="flex gap-4 leading-normal">
              <input
                type="checkbox"
                id="intermediate_level"
                className="border-check-border active:bg-DARKBLUE05  text-DARKBLUE05 border-2 rounded-[8px] bg-check-fill w-[24px] h-[24px]"
                value="intermediate_level"
              />
              <label htmlFor="intermediate_level" className="text-black">
                {" "}
                Intermediate Level
              </label>
            </div>
            {/* ADVANCED LEVEL */}
            <div className="flex gap-4 leading-normal">
              <input
                type="checkbox"
                id="advanced_level"
                className="border-check-border active:bg-DARKBLUE05  text-DARKBLUE05 border-2 rounded-[8px] bg-check-fill w-[24px] h-[24px]"
                value="advanced_level"
              />
              <label htmlFor="advanced_level" className="text-black">
                {" "}
                Advanced Level
              </label>
            </div>
            {/* HAPUS FILTER BUTTON */}
            <div className="w-full text-center">
              <button type="reset" className="bg-white text-red-600 w-fit">
                Hapus Filter
              </button>
            </div>
          </form>

          {/* CONTENT */}
          {/* SEBELAH KANAN */}

          <div className="container">
            {/* TOMBOL ATAS */}
            <div className="flex  gap-7 mb-5  ">
              {/* ALL BUTTON */}
              <button
                className={`rounded-full flex-shrink-0 w-[110px] p-2 focus:outline-none 
                            ${
                              isActive2
                                ? "text-white bg-DARKBLUE05"
                                : "text-black bg-white"
                            }`}
                onClick={AllHandleClick}
              >
                All
              </button>
              {/* IN PROGRESS BUTTON */}
              <button
                onClick={IPHandleClick}
                id="InProgressBtn"
                className={`rounded-full flex-shrink-0 w-[277px] p-2 focus:outline-none 
                            ${
                              isActive
                                ? "text-white bg-DARKBLUE05"
                                : "text-black bg-white"
                            }`}
              >
                In Progress
              </button>
              <button
                onClick={selesaiHandleClick}
                id="InProgressBtn"
                className={`rounded-full flex-shrink-0 w-[222px] p-2 focus:outline-none 
                            ${
                              isActive3
                                ? "text-white bg-DARKBLUE05"
                                : "text-black bg-white"
                            }`}
              >
                Selesai
              </button>
            </div>
            <div className="container flex mx-auto flex-wrap flex-row content-start gap-5 flex-shrink-0">
              {/* card */}
              <div className="course w-[323px] h-[200px] bg-white rounded-[15px]">
                {/* GAMBAR */}
                <div className="w-full h-[80px] ">
                  <Image
                    src="konten/gambarContent.svg"
                    width={323}
                    height={80}
                  />

                  {/* keterangan */}
                  <div className="p-2">
                    <div className="flex justify-between">
                      {/* kategori */}
                      <p className="font-bold text-DARKBLUE05">UI/UX Design</p>
                      {/* bintang */}
                      <div className="flex text-black">
                        <Image
                          src="icon/bintang.svg"
                          width={14}
                          height={14}
                          alt="icon bintang"
                        />
                        <p className="">4.7</p>
                      </div>
                    </div>
                    {/* keterangan */}
                    <div className="text-black">
                      {/* judul course */}
                      <h2 className="text-[12px] font-bold">
                        Belajar Web Designer dengan Figma
                      </h2>
                      {/* nama pembuat course */}
                      <p className="text-[8px]">by Angela Doe</p>
                    </div>
                    {/* level, modul, waktu */}
                    <div className="flex justify-between mr-[10px] mt-1">
                      {/* level */}
                      <div className="flex gap-[5px] leading-loose">
                        <Image src="icon/perisai.svg" width={14} height={14} />
                        <p className="font-semibold text-[8px] text-DARKBLUE05">
                          Intermediate Level
                        </p>
                      </div>
                      {/* jumlah modul */}
                      <div className="flex gap-[5px] leading-loose">
                        <Image src="icon/folder.svg" width={10} height={10} />
                        <p className="text-[8px] text-black">10 Modul</p>
                      </div>
                      {/* waktu */}
                      <div className="flex gap-[5px] leading-loose">
                        <Image src="icon/waktu.svg" width={10} height={10} />
                        <p className="text-[8px] text-black">120 Menit</p>
                      </div>
                    </div>
                    {/* Progress bar */}
                    <div className="flex gap-1 mt-1">
                      <Image src="icon/centang.svg" width={14} height={14} />
                      {/* progress bar */}
                      <div className="w-[150px] bg-progress-plat rounded-[25px]">
                        <div className="bg-DARKBLUE05 p-1 w-[60%] rounded-[25px]">
                          {/* tulisan persennya */}
                          <p className="text-[10px]">60% Complete</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="course w-[323px] h-[200px] bg-white rounded-[15px]">
                {/* GAMBAR */}
                <div className="w-full h-[80px] ">
                  <Image
                    src="konten/gambarContent.svg"
                    width={323}
                    height={80}
                  />

                  {/* keterangan */}
                  <div className="p-2">
                    <div className="flex justify-between">
                      {/* kategori */}
                      <p className="font-bold text-DARKBLUE05">UI/UX Design</p>
                      {/* bintang */}
                      <div className="flex text-black">
                        <Image
                          src="icon/bintang.svg"
                          width={14}
                          height={14}
                          alt="icon bintang"
                        />
                        <p className="">4.7</p>
                      </div>
                    </div>
                    {/* keterangan */}
                    <div className="text-black">
                      {/* judul course */}
                      <h2 className="text-[12px] font-bold">
                        Belajar Web Designer dengan Figma
                      </h2>
                      {/* nama pembuat course */}
                      <p className="text-[8px]">by Angela Doe</p>
                    </div>
                    {/* level, modul, waktu */}
                    <div className="flex justify-between mr-[10px] mt-1">
                      {/* level */}
                      <div className="flex gap-[5px] leading-loose">
                        <Image src="icon/perisai.svg" width={14} height={14} />
                        <p className="font-semibold text-[8px] text-DARKBLUE05">
                          Intermediate Level
                        </p>
                      </div>
                      {/* jumlah modul */}
                      <div className="flex gap-[5px] leading-loose">
                        <Image src="icon/folder.svg" width={10} height={10} />
                        <p className="text-[8px] text-black">10 Modul</p>
                      </div>
                      {/* waktu */}
                      <div className="flex gap-[5px] leading-loose">
                        <Image src="icon/waktu.svg" width={10} height={10} />
                        <p className="text-[8px] text-black">120 Menit</p>
                      </div>
                    </div>
                    {/* Progress bar */}
                    <div className="flex gap-1 mt-1">
                      <Image src="icon/centang.svg" width={14} height={14} />
                      {/* progress bar */}
                      <div className="w-[150px] bg-progress-plat rounded-[25px]">
                        <div className="bg-DARKBLUE05 p-1 w-[60%] rounded-[25px]">
                          {/* tulisan persennya */}
                          <p className="text-[10px]">60% Complete</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="course w-[323px] h-[200px] bg-white rounded-[15px]">
                {/* GAMBAR */}
                <div className="w-full h-[80px] ">
                  <Image
                    src="konten/gambarContent.svg"
                    width={323}
                    height={80}
                  />

                  {/* keterangan */}
                  <div className="p-2">
                    <div className="flex justify-between">
                      {/* kategori */}
                      <p className="font-bold text-DARKBLUE05">UI/UX Design</p>
                      {/* bintang */}
                      <div className="flex text-black">
                        <Image
                          src="icon/bintang.svg"
                          width={14}
                          height={14}
                          alt="icon bintang"
                        />
                        <p className="">4.7</p>
                      </div>
                    </div>
                    {/* keterangan */}
                    <div className="text-black">
                      {/* judul course */}
                      <h2 className="text-[12px] font-bold">
                        Belajar Web Designer dengan Figma
                      </h2>
                      {/* nama pembuat course */}
                      <p className="text-[8px]">by Angela Doe</p>
                    </div>
                    {/* level, modul, waktu */}
                    <div className="flex justify-between mr-[10px] mt-1">
                      {/* level */}
                      <div className="flex gap-[5px] leading-loose">
                        <Image src="icon/perisai.svg" width={14} height={14} />
                        <p className="font-semibold text-[8px] text-DARKBLUE05">
                          Intermediate Level
                        </p>
                      </div>
                      {/* jumlah modul */}
                      <div className="flex gap-[5px] leading-loose">
                        <Image src="icon/folder.svg" width={10} height={10} />
                        <p className="text-[8px] text-black">10 Modul</p>
                      </div>
                      {/* waktu */}
                      <div className="flex gap-[5px] leading-loose">
                        <Image src="icon/waktu.svg" width={10} height={10} />
                        <p className="text-[8px] text-black">120 Menit</p>
                      </div>
                    </div>
                    {/* Progress bar */}
                    <div className="flex gap-1 mt-1">
                      <Image src="icon/centang.svg" width={14} height={14} />
                      {/* progress bar */}
                      <div className="w-[150px] bg-progress-plat rounded-[25px]">
                        <div className="bg-DARKBLUE05 p-1 w-[60%] rounded-[25px]">
                          {/* tulisan persennya */}
                          <p className="text-[10px]">60% Complete</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
