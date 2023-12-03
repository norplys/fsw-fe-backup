"use client";
import ClassCategoriesCard from "@/components/ClassPage/ClassCategoriesCard";
import FilterCategory from "@/components/ClassPage/FilterCategory"; 
import ClassButton from "@/components/ClassPage/ClassButton";
import {useCoursesData} from "../../utils/hooks/useCoursesData";
import ClassCardLoading from "@/components/ClassCardLoading";

import { BiSearchAlt } from "react-icons/bi";

const array = [1, 2, 3, 4, 5, 6];


const FilterData = [
  {
    category : "Filter",
    card : [
      {
        name : "Paling Baru",
        value : "baru"
      },
      {
        name : "Paling Populer",
        value : "populer"
      },
      {
        name : "Promo",
        value : "promo"
      }
    ]
  },
  {
    category : "Kategori",
    card : [
      {
        name : "UI/UX Design",
        value : "uiux"
      },
      {
        name : "Web Development",
        value : "webdevelopment"
      },
      {
        name : "Android Development",
        value : "androiddevelopment"
      },
      {
        name : "Data Science",
        value : "datascience"
      },
      {
        name : "Business Intelligence",
        value : "businessintelligence"
      }
    ]
  },
  {
    category : "Kesulitan",
    card : [
      {
        name : "Beginner Level",
        value : "beginner"
      },
      {
        name : "Intermediate Level",
        value : "intermediate"
      },
      {
        name : "Advanced Level",
        value : "advanced"
      }
    ]
  }
]

const ButtonData = [
  {
    name : "Semua Kelas",
    value : "semua"
  },
  {
    name : "Kelas Premium",
    value : "premium"
  },
  {
    name : "Kelas Gratis",
    value : "gratis"
  }
]

export default function Courses() {
  const {isLoading, error, data} = useCoursesData();
  return (
    <div className=" bg-secret-grey2 px-[150px] pt-4 w-full font-montserrat min-h-screen">
      <section className="max-w-7xl m-auto">
      <div className="flex justify-between ">
        <h1 className="text-secret-text mb-10 font-bold text-[24px]">
          Kelas Berjalan
        </h1>
        {/* SEARCH BUTTON */}
        <div className="relative flex flex-shrink-0 ml-5">
          <input
            type="text"
            placeholder="Cari Kelas..."
            name="search"
            className="w-60 h-10 text-black px-10  rounded-[16px] text-sm"
          />

          <button className="search absolute top-[18px] -translate-y-1/2 right-3 transform bg-DARKBLUE05 p-2 rounded-[10px]">
            <BiSearchAlt color="white" size={10} />
          </button>
        </div>
      </div>

      <div className="flex lg:flex-row gap-[88px] ">
        {/* FORM FILTER */}
        <form className="bg-secret-grey1 flex flex-col w-64 p-5
         h-auto rounded-[16px] gap-5">
          {
            FilterData.map((item, index) => {
              return (
                <FilterCategory
                  key={index}
                  category={item.category}
                  card={item.card}
                />
              );
            })
          }
          {/* HAPUS FILTER BUTTON */}
          <div className="w-full text-center">
            <button type="reset" className="bg-white text-red-600 w-fit">
              Hapus Filter
            </button>
          </div>
        </form>
        {/* SEBELAH KANAN */}

        <div className="container">
          {/* TOMBOL ATAS */}
          <div className="flex  gap-7 mb-5">
            {
              ButtonData.map((item, index) => {
                return (
                  <ClassButton
                    key={index}
                    text={item.name}
                    value={item.value}
                  />
                );
              })
            }
          </div>
          <div className="grid grid-cols-2 max-w-3xl flex-wrap flex-row content-start gap-6">
            {isLoading ? (
              array.map((item, index) => {
                return <ClassCardLoading key={index} />;
              })
            ) : error ? (
               <h1>An Error Occured</h1>
            ) : data.map((item, index) => {
                    return (
                      <ClassCategoriesCard
                        id={item.id}
                        key={index}
                        name={item.name}
                        img={item.image}
                        category={item.category}
                        rating={item.rating}
                        teacher={item.author}
                        level={item.level}
                        modul={item.modul}
                        waktu={item.waktu}
                        isPremium={item.isPremium}
                      />
                    );
                  })}
          </div>
        </div>
      </div>
      </section>
    </div>
  );
}
