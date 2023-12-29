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
import { useState, useEffect } from "react";
import { useSearchParams, usePathname, useRouter} from "next/navigation";
import ButtonLoading from "@/components/ButtonLoading";


const array = [1, 2, 3, 4, 5, 6];

export default function Beranda () {
  const [queryCategory, setQueryCategory] = useState("");
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const params = new URLSearchParams(searchParams);

  const {
    isLoading: isLoadingCourses,
    error: errorCourses,
    data: dataCourses,
  } = useCoursesData(queryCategory, "", "", "");
  const {
    isLoading: isLoadingCategories,
    error: errorCategories,
    data: dataCategories,
  } = useCategoriesData();

  useEffect(() => {
    const category = searchParams.get("categoryId");
    if (category) {
      setQueryCategory(category);
    }else {
      setQueryCategory("");
      params.delete("categoryId");
      router.push(pathname + "?" + params.toString(), {
        scroll: false,
      });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);
  
  const createQueryString = (name, value) => {
    params.set(name, value);
    return params.toString();
  };

  const handleChange = (value) => {    
    const queryCategoryArray = queryCategory.split(",");
    if (queryCategoryArray[0] === "") {
      queryCategoryArray.shift();
    }
    const newChecked = [...queryCategoryArray];
    const currentIndex = newChecked.indexOf(value.toString());    
    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setQueryCategory(newChecked.join(","));
    router.push(pathname + "?" + createQueryString('categoryId', newChecked.join(",")), {
      scroll: false,
    });
  };

  return (
    <>
      <Navbar />
      <div className="font-montserrat min-h-screen">
        <div className="flex w-full">
          <div className="before:bg-gradient-to-t from-transparent to-[#2FB5BF] before:w-full before:h-full before:absolute relative col-span-12 flex-2 w-full">
            <div className="bg-[url('/homeImage.svg')] bg-cover h-96 flex justify-center items-center flex-col md:flex-row">
              <div className="z-10  flex items-center text-white font-bold text-5xl md:w-96  drop-shadow-[0_3px_1.2px_rgba(0,0,0,0.8)] flex-shrink-0 ml-5 md:ml-0">
                  Ready To Upgrade Your Skill ?
              </div>
              <div className="flex gap-3 ml-5 md:ml-0 mt-5 md:mt-0">
              <Link className="text-white font-bold text-2xl z-10 border border-white h-min p-2 rounded-md animate-pulse hover:scale-105" href={"/courses"}>Mulai Sekarang</Link>
              <Link className="text-white font-bold text-2xl z-10 border border-white h-min p-2 rounded-md flex items-center hover:scale-105" href={"https://wa.me/6282284134328?text=Saya%20ingin%20bertanya%20perihal%20course%20di%20skillHUB"}> <CiHeadphones/> Tanya Kami</Link>
              </div>
            </div>
          </div>

        </div>
        <div className="bg-secret-background">
          <div className="max-w-7xl mx-auto">
            <div className="flex leading-loose justify-between p-5">
              <h1 className="font-bold text-secret-text4 text-[20px]">
                Kategori Belajar
              </h1>
              <Link href="/courses" className="text-secret-text4 font-semibold  duration-300 hover:text-secret-darkblue hover:underline">
                Lihat Semua
              </Link>
            </div>
   
            <div className="flex gap-5 pb-5 overflow-x-auto md:overflow-hidden-x-auto lg:overflow-x-auto xl:overflow-hidden 2xl:overflow-hidden">
              {isLoadingCategories ? (
                array.map((item, index) => {
                  return <CategoryLoading key={index} />;
                })
              ) : errorCategories ? (
                <p>Something Went Wrong</p>
              ) : (
                dataCategories?.map((item, index) => {
                  return (
                    <div key={index} className="flex-shrink-0 flex-grow w-[25%] xl:w-[10%]">
                        <CardCategories
                      key={index}
                      name={item.name}
                      image={item.image}
                      categoryId={item.id}
                    />
                    </div>
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

              <Link href="/courses" className="text-secret-text4 font-semibold duration-300 hover:text-secret-darkblue hover:underline">
                Lihat Semua
              </Link>
            </div>

            <div className="flex gap-5  mb-5 justify-around overflow-x-auto p-1">
            {isLoadingCategories ? (
                array.map((item, index) => {
                  return <ButtonLoading key={index} />;
                })
              ) : errorCategories ? (
                <p>Something Went Wrong, Please Try Again</p>
              ) : (
                dataCategories?.map((item, index) => {
                  return (
                    <HomePageButton key={index} name={item.name} categoryId={item.id} handleChange={handleChange} queryCategory={queryCategory}/>
                  );
                })
              )}
            </div>

    
            <div className="grid grid-cols-1 md:grid-cols-3 mx-auto   gap-5 items-center h-full">
              {isLoadingCourses ? (
                array.map((item, index) => {
                  return <ClassCardLoading key={index} />;
                })
              ) : errorCourses ? (
                <p>Something Went Wrong</p>
              ) : (
                dataCourses ? 
                dataCourses?.map((item, index) => {
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
                      isPremium={item.isPremium}
                    />
                    
                  );
                })
                :
                    <h1>No data</h1>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

