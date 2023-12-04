"use client";

import Image from "next/image";
import CardCategories from "@/components/HomePage/CardCategories";
import HomePageButton from "@/components/HomePage/HomePageButton";
import Navbar from "@/components/Navbar";
import CoursesCard from "@/components/HomePage/CoursesCard";
import Link from "next/link";
import ClassCardLoading from "@/components/ClassCardLoading";
import { useCoursesData } from "./utils/hooks/useCoursesData";
import { useCategoriesData } from "./utils/hooks/useCategoriesData";
import CategoryLoading from "@/components/CategoryLoading";

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

  const { isLoading : isLoadingCourses, error :  errorCourses, data : dataCourses } = useCoursesData();
  const { isLoading: isLoadingCategories, error: errorCategories, data: dataCategories } = useCategoriesData();
  return (
    <>
      <Navbar />
      <div className="font-montserrat min-h-screen">
        <div className="grid grid-cols-12">
          <div className="before:bg-gradient-to-b from-transparent to-secret-black before:w-full before:h-full before:absolute relative col-span-12">

          <Image
              src="/orangKetawa.svg"
              width={600}
              height={500}
              alt="smile-picture"
              style={{objectPosition: "top"}}
              className="w-full h-96 object-cover"
            />
          </div>
          {/* KANAN */}
          {/* <div className="flex flex-col justify-center gap-5 items-center bg-secret-black col-span-5">
            <h1 className="font-bold text-secret-orange text-3xl text-center">
              Belajar dari Praktisi Terbaik
            </h1>
            <Link
              className="clickable text-2xl rounded px-2 py-1 text-center   font-bold uppercase border-2 text-white"
              href="/courses"
            >
              Ikuti kelas
            </Link>
          </div> */}
        </div>
        <div className="bg-secret-black">
          <div className="max-w-7xl mx-auto">
            <div className="flex leading-loose justify-between p-5">
              <h1 className="font-bold text-white text-[20px]">
                Kategori Belajar
              </h1>
              {/* lihat semua tombol */}
              <Link href="/courses" className="text-secret-orange font-semibold">
                Lihat Semua
              </Link>
            </div>
            {/* KATEGORI */}
            <div className="flex gap-5 pb-5">
              {
                isLoadingCategories ? (
                  array.map((item, index) => {
                    return <CategoryLoading key={index} />;
                  })
                ) :
                errorCategories ? (
                  <p>Something Went Wrong</p>
                ) : (
                  dataCategories.map((item, index) => {
                    return (
                      <CardCategories
                        key={index}
                        name={item.name}
                        img={item.image}
                      />
                    );
                  })
                )
              }
            </div>
          </div>
        </div>
        <div className="bg-secret-black pb-5">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between leading-loose p-5">
              <h1 className="font-bold text-secret-text text-[20px]">
                Kursus Populer
              </h1>
              {/* lihat semua tombol */}
              <Link href="/courses" className="text-secret-orange font-semibold ">
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
              ) : 
              errorCourses ? (
                <p>Something Went Wrong</p>
              ) : (
                dataCourses.map((item, index) => {
                  return (
                    <CoursesCard
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
