"use client";
import MyClassCard from "@/components/ClassPage/MyClassCard";
import FilterCategory from "@/components/ClassPage/FilterCategory";
import ClassButton from "@/components/ClassPage/ClassButton";
import { useMyCourses } from "@/app/utils/hooks/useMyCoursesData";
import ClassCardLoading from "@/components/ClassCardLoading";
import { useCategoriesData } from "@/app/utils/hooks/useCategoriesData";
import { BiSearchAlt } from "react-icons/bi";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import FilterLoading from "@/components/FilterLoading";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import Link from "next/link";
import { Collapse } from "@/components/Collapse";

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
    value: "0",
  },
  {
    name: "Completed",
    value: "1",
  },
];
export default function MyCourses() {
  const [searchValue, setSearchValue] = useState("");
  const [search, setSearch] = useState(); 
  const [categoryId, setCategoryId] = useState();
  const [level, setLevel] = useState();
  const [queryCategory, setQueryCategory] = useState([]);
  const [queryLevel, setQueryLevel] = useState([]);
  const [isComplete, setisComplete] = useState();
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const params = new URLSearchParams(searchParams);
  const [filterOpen, setFilterOpen] = useState(false);
  const token = localStorage.getItem("token");
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

  const isCompleteFilter = searchParams.get("isComplete")
  if(isCompleteFilter){
    setisComplete(isCompleteFilter)
  }else{
    setisComplete("");
    params.delete("isComplete");
    router.push(pathname + "?" + params.toString());
  }
  if(searchFilter){
    setSearch(searchFilter);
    setSearchValue(searchFilter);

  }else{
    setSearch("");
    params.delete("search");
    router.push(pathname + "?" + params.toString());
  }
  if(categoryFilter){
    setCategoryId(categoryFilter);
    setQueryCategory(categoryFilter.split(",").map((item) => parseInt(item)));
  }else{
    setCategoryId("");
    setQueryCategory([]);
    params.delete("categoryId");
    router.push(pathname + "?" + params.toString());
  }
  if(levelFilter){
    setLevel(levelFilter);
    setQueryLevel(levelFilter.split(","));
  }else{
    setLevel("");
    setQueryLevel([]);
    params.delete("level");
    router.push(pathname + "?" + params.toString());
  }
// eslint-disable-next-line react-hooks/exhaustive-deps
}, [searchParams]);


const onChange = (e) => {
  e.preventDefault();
  if(e.target.value === ""){
    setSearch("");
    params.delete("search");
    router.push(pathname + "?" + params.toString())
  }
  setSearchValue(e.target.value);
};



  const handleisComplete = (value) => {
    setisComplete(value);
    router.push(pathname + "?" + createQueryString('isComplete', value), {
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
  const { isLoading, error, data } = useMyCourses(categoryId, level, search, isComplete, token);
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
    <div className="bg-secret-grey2 md:px-[50px] pt-4 w-full font-montserrat min-h-screen">
      <section className="max-w-7xl m-auto p-2 md:p-0">
        <div className="flex justify-between md:flex-row flex-col p-2 md:p-0">
          <h1 className="text-secret-text md:mb-10 mb-5 font-bold text-base md:text-[24px]">
            Kelas Berjalan
          </h1>

          <form className="flex justify-between h-10 border border-secret-darkblue pl-2 rounded-lg overflow-hidden shadow-xl relative md:mb-0 mb-5 md:h-fit bg-white" onSubmit={handleSubmit(handleSearch)}>
            <input
              {...register("search", {
                onChange : (e) => onChange(e),
              })}
              type="text"
              placeholder="Cari Kelas..."
              name="search"
              className="text-black text-sm focus:outline-none flex-1"
              id="search-class"
              value={searchValue}
            />

            <button htmlFor="search-class" className="flex md:static justify-center items-center p-2  bg-secret-darkblue hover:scale-110 duration-300" >
            <BiSearchAlt className="text-secret-background text-sm"/>
            </button>
          </form>
        </div>

        <div className="flex lg:flex-row flex-col gap-10 ">
           <button className="bg-secret-darkblue w-full h-4 rounded-xl lg:hidden flex justify-center text-white font-bold" onClick={() => setFilterOpen(!filterOpen)}>{filterOpen ? <IoIosArrowUp/> : <IoIosArrowDown/>}</button>
           <Collapse open = {filterOpen}>
          <form
            className="bg-secret-background border shadow-md lg:flex flex-col w-64 p-5 pb-0
            h-[580px] rounded-[16px] gap-5 mx-auto flex"
          >
            {isLoadingCategories ? 
              <FilterLoading/>
             : errorCategories ? 
              <div>Terjadi Kesalahan, Mohon Coba Kembali</div>
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
            )
          }
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
          </Collapse>


          <div className="container">
            <div className="flex pb-2 pt-2 overflow-x-scroll mb-4 text-sm md:gap-7 xl:gap-7 lg:gap-7 gap-2 mr-1 ml-1 md:text-base md:pb-0 md:overflow-x-visible ">

              {ButtonData.map((item, index) => {
                return (
                  <ClassButton
                    handlePremium={handleisComplete}
                    key={index}
                    text={item.name}
                    value={item.value}
                    active={isComplete}
                  />
                );
              })}
            </div>
            <div className="grid md:grid-cols-2 grid-flow-cols-1 max-w-3xl flex-wrap flex-row content-start gap-6">
              {isLoading ? 
                array.map((item, index) => {
                  return <ClassCardLoading key={index} />;
                })
               : error ? 
                <h1>Terjadi Kesalahan, Mohon Coba Kembali</h1>
               : 
                data.length ? 
                data.map((item, index) => {
                  return (
                    <MyClassCard
                      id={item.id}
                      key={index}
                      name={item.name}
                      image={item.image}
                      category={item.category}
                      rating={item.rating}
                      author={item.author}
                      level={item.level}
                      totalMinute={item.totalMinute}
                      totalModule={item.totalModule}
                      totalProgress={item.progressBar}
                    />
                  )}) : 
                  <section className="font-bold ">
                    <h1 >Tidak ada kelas yang ditemukan</h1>
                    <div>Daftar Kelas <Link href="/courses" className="text-secret-darkblue hover:text-secret-cyan hover:underline">Disini</Link></div>
                  </section>    
            }
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
