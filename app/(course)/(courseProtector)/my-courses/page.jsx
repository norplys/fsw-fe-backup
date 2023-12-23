"use client";
import MyClassCard from "@/components/ClassPage/MyClassCard";
import FilterCategory from "@/components/ClassPage/FilterCategory";
import ClassButton from "@/components/ClassPage/ClassButton";
import { useCoursesData } from "@/app/utils/hooks/useCoursesData";
import ClassCardLoading from "@/components/ClassCardLoading";
import { useCategoriesData } from "@/app/utils/hooks/useCategoriesData";
import { BiSearchAlt } from "react-icons/bi";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";


const array = [1, 2, 3, 4];
const levelFilterButton = {
  category: "level",
  card: [
    {
      name: "Beginner Level",
      id: "beginner",
    },
    {
      name: "Intermediate Level",
      id: "intermediate",
    },
    {
      name: "Advanced Level",
      id: "advanced",
    },
  ],
}
const ButtonData = [
  {
    name: "Semua Kelas",
    value: "",
  },
  {
    name: " In Progress",
    value: "1",
  },
  {
    name: "Completed",
    value: "0",
  },
];
export default function MyCourses() {
  const [search, setSearch] = useState(); 
  const [categoryId, setCategoryId] = useState();
  const [level, setLevel] = useState();
  const [queryCategory, setQueryCategory] = useState([]);
  const [queryLevel, setQueryLevel] = useState([]);
  const [premium, setPremium] = useState();
  
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const params = new URLSearchParams(searchParams);
  const {register, handleSubmit} = useForm({
    defaultValues: {
      search : ''
    }
  })
  const createQueryString = (name, value) => {
    params.set(name, value)
    return params.toString()
}


useEffect(() => {
  const categoryFilter = searchParams.get("categoryId")
  const levelFilter = searchParams.get("level")
  const searchFilter = searchParams.get("search")
  const premiumFilter = searchParams.get("premium")
  if(premiumFilter){
    setPremium(premiumFilter)
  }else{
    setPremium("")
    params.delete("premium");
    router.push(pathname + "?" + params.toString())
  }
  if(searchFilter){
    setSearch(searchFilter)
  }else{
    setSearch("")
    params.delete("search");
    router.push(pathname + "?" + params.toString())
  }
  if(categoryFilter){
    setCategoryId(categoryFilter)
    setQueryCategory(categoryFilter.split(",").map((item) => parseInt(item)))
  }else{
    setCategoryId("")
    setQueryCategory([])
    params.delete("categoryId");
    router.push(pathname + "?" + params.toString())
  }
  if(levelFilter){
    setLevel(levelFilter)
    setQueryLevel(levelFilter.split(","))
  }else{
    setLevel("")
    setQueryLevel([])
    params.delete("level");
    router.push(pathname + "?" + params.toString())
  }
}, [searchParams]);

  const handlePremium = (value) => {
    setPremium(value);
    router.push(pathname + "?" + createQueryString('premium', value), {
      scroll: false,
    });
  };


  const handleChange = (value, category) => {
    if(category === "Kategori"){
      const currentIndex = queryCategory.indexOf(value);
      const newChecked = [...queryCategory];
      if (currentIndex === -1) {
        newChecked.push(value);
      } else {
        newChecked.splice(currentIndex, 1);
      }
      setQueryCategory(newChecked)
      router.push(pathname + "?" + createQueryString('categoryId', newChecked.join(",")), {
        scroll: false,
      });
    }
    if(category === "level"){
      const currentIndex = queryLevel.indexOf(value);
      const newChecked = [...queryLevel];
      if (currentIndex === -1) {
        newChecked.push(value);
      } else {
        newChecked.splice(currentIndex, 1);
      }
      setQueryLevel(newChecked)
      router.push(pathname + "?" + createQueryString(category, newChecked.join(",")),
      {
        scroll: false,
      });
    }
  }

  const handleSearch = (data) => {
    router.push(pathname + "?" + createQueryString('search', data.search), {
      scroll: false,
    });
  }


  const { isLoading, error, data } = useCoursesData(categoryId, level, search, premium);
  const {
    isLoading: isLoadingCategories,
    error: errorCategories,
    data: dataCategories,
  } = useCategoriesData();

  const FilterData = [
    {
      category: "Kategori",
      card: dataCategories,
    },
    levelFilterButton,
  ];
  return (
    <div className=" bg-secret-grey2 px-[150px] pt-4 w-full font-montserrat min-h-screen">
      <section className="max-w-7xl m-auto">
        <div className="flex justify-between ">
          <h1 className="text-secret-text mb-10 font-bold text-[24px]">
            Kelas Berjalan
          </h1>

          <form className="flex h-fit border border-secret-darkblue pl-2 rounded-lg overflow-hidden shadow-xl" onSubmit={handleSubmit(handleSearch)}>
            <input
              {...register("search")}
              type="text"
              placeholder="Cari Kelas..."
              name="search"
              className="text-black text-sm focus:outline-none"
              id="search-class"
            />

            <button htmlFor="search-class" className="flex justify-center items-center p-2 bg-secret-darkblue hover:scale-110 duration-300" >
              <BiSearchAlt className="text-secret-background text-xl"/>
            </button>
          </form>
        </div>

        <div className="flex lg:flex-row gap-[88px] ">

          <form
            className="bg-secret-background border shadow-md flex flex-col w-64 p-5
            h-[580px] rounded-[16px] gap-5"
          >
            {isLoadingCategories ? 
              <div>Loading</div>
             : errorCategories ? 
              <div>Error</div>
             : 
              FilterData.map((item, index) => {
                return (
                  <FilterCategory
                    pathname={pathname}
                    router={router}
                    key={index}
                    category={item.category}
                    card={item.card}
                    handleFilter = {handleChange}
                    queryCategory={queryCategory}
                    queryLevel={queryLevel}
                  />
                );
              }
            )}
            <div className="w-full text-center">
              <button type="reset" className="bg-secret-pink text-white px-3 rounded-xl text-base hover:scale-105" onClick={() => {
                router.push(pathname)
                setQueryCategory([])
                setQueryLevel([])
                }}>
                Hapus Filter
              </button>
            </div>
          </form>


          <div className="container">

            <div className="flex  gap-7 mb-5">
              {ButtonData.map((item, index) => {
                return (
                  <ClassButton
                    handlePremium={handlePremium}
                    key={index}
                    text={item.name}
                    value={item.value}
                    active={premium}
                  />
                );
              })}
            </div>
            <div className="grid grid-cols-2 max-w-3xl flex-wrap flex-row content-start gap-6">
              {isLoading ? 
                array.map((item, index) => {
                  return <ClassCardLoading key={index} />;
                })
               : error ? 
                <h1>An Error Occured</h1>
               : 
                data ? 
                data.map((item, index) => {
                  return (
                    <MyClassCard
                      id={item.id}
                      key={index}
                      name={item.name}
                      image={item.image}
                      category={item.category}
                      rating={item.rating}
                      teacher={item.author}
                      level={item.level}
                      modul={item.modul}
                      waktu={item.waktu}
                      isPremium={item.isPremium}
                      totalMinute={item.totalMinute}
                      totalModule={item.totalModule}
                      price={item.price}
                    />
                  )}) : 
                  <h1>No Data</h1>    
            }
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
