"use client";

import CardCategories from "@/components/HomePage/CardCategories";
import HomePageButton from "@/components/HomePage/HomePageButton";
import Navbar from "@/components/Navbar";
import ClassCategoriesCard from "@/components/ClassCategoriesCard";
import Link from "next/link";
import ClassCardLoading from "@/components/ClassCardLoading";
import { useCoursesData } from "./utils/hooks/useCoursesData";
import { useCategoriesData } from "./utils/hooks/useCategoriesData";
import CategoryLoading from "@/components/CategoryLoading";
import { CiHeadphones } from "react-icons/ci";

const array = [1, 2, 3, 4, 5, 6];

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
  const {
    isLoading: isLoadingCourses,
    error: errorCourses,
    data: dataCourses,
  } = useCoursesData();
  const {
    isLoading: isLoadingCategories,
    error: errorCategories,
    data: dataCategories,
  } = useCategoriesData();
  return (
    <>
      <Navbar />
      <div className="font-montserrat min-h-screen">
        <div className="flex w-full">
          <div className="before:bg-gradient-to-t from-transparent to-[#2FB5BF] before:w-full before:h-full before:absolute relative col-span-12 flex-2 w-full">
            <div className="bg-[url('/homeImage.svg')] bg-cover h-96 flex justify-center items-center">
              <div className="z-10  flex items-center text-white font-bold text-5xl w-96 drop-shadow-[0_3px_1.2px_rgba(0,0,0,0.8)]">
                  Ready To Upgrade Your Skill ?
              </div>
              <div className="flex gap-3">
              <Link className="text-white font-bold text-2xl z-10 border border-white h-min p-2 rounded-md animate-pulse hover:scale-105" href={"/courses"}>Mulai Sekarang</Link>
              <Link className="text-white font-bold text-2xl z-10 border border-white h-min p-2 rounded-md flex items-center hover:scale-105" href={"/"}> <CiHeadphones/> Tanya Kami</Link>
              </div>
            </div>
          </div>

          {/* KANAN */}
        </div>
        <div className="bg-secret-background">
          <div className="max-w-7xl mx-auto">
            <div className="flex leading-loose justify-between p-5">
              <h1 className="font-bold text-secret-text4 text-[20px]">
                Kategori Belajar
              </h1>
              {/* lihat semua tombol */}
              <Link href="/courses" className="text-secret-text4 font-semibold hover:text-secret-darkblue">
                Lihat Semua
              </Link>
            </div>
            {/* KATEGORI */}
            <div className="flex gap-5 pb-5">
              {isLoadingCategories ? (
                array.map((item, index) => {
                  return <CategoryLoading key={index} />;
                })
              ) : errorCategories ? (
                <p>Something Went Wrong</p>
              ) : (
                dataCategories.map((item, index) => {
                  return (
                    <CardCategories
                      key={index}
                      name={item.name}
                      image={item.image}
                      categoryId={item.id}
                    />
                  );
                })
              )}
            </div>
          </div>
        </div>
        <div className="bg-white pb-5">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between leading-loose p-5">
              <h1 className="font-bold text-secret-text4 text-[20px]">
                Kursus Populer
              </h1>
              {/* lihat semua tombol */}
              <Link href="/courses" className="text-secret-text4 font-semibold hover:text-secret-darkblue ">
                Lihat Semua
              </Link>
            </div>
            {/* TOMBOL TOMBOL */}
            <div className="flex gap-5  mb-5 justify-around">
              {mockButton.map((item, index) => {
                return <HomePageButton key={index} name={item} index={index} />;
              })}
            </div>

            {/* COURSES CONTAINER */}
            <div className="grid grid-cols-3 mx-auto  gap-5 items-center h-full">
              {isLoadingCourses ? (
                array.map((item, index) => {
                  return <ClassCardLoading key={index} />;
                })
              ) : errorCourses ? (
                <p>Something Went Wrong</p>
              ) : (
                dataCourses.map((item, index) => {
                  return (
                    <ClassCategoriesCard
                      key={index}
                      name={item.name}
                      image={item.image}
                      category={item.category}
                      rating={item.rating}
                      teacher={item.author}
                      level={item.level}
                      totalModule={item.totalModule}
                      totalMinute={item.totalMinute}
                      price={item.price}
                      id={item.id}
                    />
                  );
                })
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Beranda;
