"use client";

import Image from "next/image";
import CardCategories from "@/components/HomePage/CardCategories";
import HomePageButton from "@/components/HomePage/HomePageButton";
import NavbarBeranda from "@/components/NavbarBeranda";
import CoursesCard from "@/components/HomePage/CoursesCard";

const mockCategories = [
  {
    name: "UI/UX Design",
    img: "/kategori/kategori1.svg",
  },
  {
    name: "Product Management",
    img: "/kategori/kategori2.svg",
  },
  {
    name: "Web Development",
    img: "/kategori/kategori3.svg",
  },
  {
    name: "Android Development",
    img: "/kategori/kategori4.svg",
  },
  {
    name: "IOS Development",
    img: "/kategori/kategori5.svg",
  },
  {
    name: "Data Science",
    img: "/kategori/kategori6.svg",
  },
];
const mockCourses = [
  {
    name: "Belajar Web Designer dengan Figma",
    img: "/konten/gambarContent.svg",
    category: "UI/UX Design",
    rating: "4.7",
    teacher: "Angela Doe",
    level: "Intermediate",
    modul: "10 Modul",
    waktu: "120 Menit",
    harga: 249000,
  },
  {
    name: "Belajar Web Designer dengan Figma",
    img: "/konten/gambarContent.svg",
    category: "UI/UX Design",
    rating: "4.7",
    teacher: "Angela Doe",
    level: "Intermediate",
    modul: "10 Modul",
    waktu: "120 Menit",
    harga: 249000,
  },
  {
    name: "Belajar Web Designer dengan Figma",
    img: "/konten/gambarContent.svg",
    category: "UI/UX Design",
    rating: "4.7",
    teacher: "Angela Doe",
    level: "Intermediate",
    modul: "10 Modul",
    waktu: "120 Menit",
    harga: 249000,
  },
  {
    name: "Belajar Web Designer dengan Figma",
    img: "/konten/gambarContent.svg",
    category: "UI/UX Design",
    rating: "4.7",
    teacher: "Angela Doe",
    level: "Intermediate",
    modul: "10 Modul",
    waktu: "120 Menit",
    harga: 249000,
  },
  {
    name: "Belajar Web Designer dengan Figma",
    img: "/konten/gambarContent.svg",
    category: "UI/UX Design",
    rating: "4.7",
    teacher: "Angela Doe",
    level: "Intermediate",
    modul: "10 Modul",
    waktu: "120 Menit",
    harga: 249000,
  },
];

const mockButton = [
  "All",
  "Data Science",
  "Android Development",
  "Web Development",
  "IOS Development",
  "Business Intelligence",
  "UI/UX Design",
];

const Beranda = () => {
  return (
    <>
      <NavbarBeranda />
      <div className="font-montserrat">
        <div className="grid grid-cols-12">
          <div className="before:bg-gradient-to-r from-transparent to-DARKBLUE05 before:w-full before:h-full before:absolute relative col-span-7">
            <Image
              src="/orangKetawa.svg"
              className="w-full h-[400px] object-cover"
              width={600}
              height={500}
              alt="orang ketawa"
            />
          </div>
          {/* KANAN */}
          <div className="flex flex-col justify-center gap-5 items-center bg-DARKBLUE05 col-span-5">
            <h1 className="font-bold text-3xl text-center">
              Belajar dari Praktisi Terbaik
            </h1>
            <a
              className="clickable text-2xl rounded bg-white px-2 py-1 text-center  font-bold uppercase text-DARKBLUE05"
              href="/courses"
            >
              Ikuti kelas
            </a>
          </div>
        </div>
        <div className="bg-check-fill">
          <div className="max-w-7xl mx-auto">
            <div className="flex leading-loose justify-between p-5">
              <h1 className="font-bold text-black text-[20px]">
                Kategori Belajar
              </h1>
              {/* lihat semua tombol */}
              <a href="" className="text-DARKBLUE05 font-semibold">
                Lihat Semua
              </a>
            </div>
            {/* KATEGORI */}
            <div className="flex gap-5 pb-5">
              {mockCategories.map((item, index) => {
                return (
                  <CardCategories key={index} name={item.name} img={item.img} />
                );
              })}
            </div>
          </div>
        </div>
        <div className="bg-white pb-5">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between leading-loose p-5">
              <h1 className="font-bold text-black text-[20px]">
                Kursus Populer
              </h1>
              {/* lihat semua tombol */}
              <a href="" className="text-DARKBLUE05 font-semibold ">
                Lihat Semua
              </a>
            </div>
            {/* TOMBOL TOMBOL */}
            <div className="flex gap-5  mb-5 justify-around">
              {mockButton.map((item, index) => {
                return <HomePageButton key={index} name={item} index={index} />;
              })}
            </div>

            {/* COURSES CONTAINER */}
            <div className="flex mx-auto flex-wrap gap-5 items-center">        
                {mockCourses.map((item, index) => {
                    return (
                    <CoursesCard
                        key={index}
                        name={item.name}
                        img={item.img}
                        category={item.category}
                        rating={item.rating}
                        teacher={item.teacher}
                        level={item.level}
                        modul={item.modul}
                        waktu={item.waktu}
                        price={item.harga}
                    />
                    );
                })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Beranda;
