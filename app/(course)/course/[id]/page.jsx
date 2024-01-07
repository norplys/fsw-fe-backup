"use client";
import CircleLoading from "@/components/CircleLoading";
import { useParams, useSearchParams, usePathname } from "next/navigation";
import {useState, useEffect } from "react";
import Link from "next/link";
import { BiSolidChat} from "react-icons/bi";
import { FiArrowLeft} from "react-icons/fi";
import { FaBookBookmark, FaRegClock } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import { GiRank3 } from "react-icons/gi";
import { useClassDetails } from "@/app/utils/hooks/useClassDetails";
import Chapter from "@/components/ClassDetail/Chapter";
import { useRouter } from "next/navigation";
import PremiumEnrollModal  from "@/components/ClassDetail/PremiumEnrollModal";
import FreeEnrollModal from "@/components/ClassDetail/FreeEnrollModal";
import { useVideoData } from "@/app/utils/hooks/useVideoCourse";
import VideoLoading from "@/components/VideoLoading";
import OnBoardingModals from "@/components/ClassDetail/Onboarding";
import axios from "axios";
import { useQueryClient } from "react-query";
import {Toaster} from "react-hot-toast";



const DetailKelas = () => {  
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);
  const { push } = useRouter();
  const [token, setToken] = useState("");
  const { id } = useParams();
  const [isOpen, setIsOpen] = useState(false);
  const { data, isLoading, isError, error } = useClassDetails(id, token);
  const pathname = usePathname();
  const [uuid, setUUID] = useState("")
  const { data: videoData, isLoading : videoLoading, error : videoError } = useVideoData(token, uuid);
  const queryClient = useQueryClient();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setToken(token);
    }
  }, []);

  useEffect(() => {
    let chapterIndex = searchParams.get("chapter");
    let index = searchParams.get("module");
    if (chapterIndex === null || index === null) {
      setUUID("");
      return;
    }  
    if (chapterIndex !== null || index !== null) {
      chapterIndex = Number(chapterIndex);
      index = Number(index);
      const uuid = data?.courseModules[chapterIndex].module[index].chapterModuleUuid;
      setUUID(uuid);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  const handleVideo = async (uuid, chapterIndex, index, userChapterModuleUuid) => {
    try{
    if(!data.isPremium && !data.isPaid && chapterIndex !== 0){
      handleModal();
      return;
    }
    if (!token) {
      push(`/login?redirect=/course/${id}`);
      return;
    }
    params.set("chapter", chapterIndex);
    params.set("module", index);
    push(`${pathname}?${params.toString()}`, {
      scroll : false
    });
    setUUID(uuid);
    if(userChapterModuleUuid){
      await axios.put(`https://api.academy-skillhub.com/v1/course-modules/module-completed/${userChapterModuleUuid}`, {}, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });}
    queryClient.invalidateQueries(["classDetails", id]);
  }
  catch(err){
    queryClient.invalidateQueries(["classDetails", id]);
    setUUID(uuid);
  };
  };

  const handleNextVideo = () => {
    let currentChapter = searchParams.get("chapter");
    let currentModule = searchParams.get("module");
    if (currentChapter === null || currentModule === null) {
      handleVideo(data.courseModules[0].module[0].chapterModuleUuid, 0, 0, data.courseModules[0].module[0].userChapterModuleUuid);
      return;
    }
    currentChapter = Number(currentChapter);
    currentModule = Number(currentModule);
    const chapterLength = data.courseModules.length;
    const moduleLength = data.courseModules[currentChapter].module.length;
    const nextUuid = data.courseModules[currentChapter].module[currentModule + 1];

    if (currentModule < moduleLength - 1) {
      handleVideo(nextUuid.chapterModuleUuid, currentChapter, currentModule + 1, nextUuid.userChapterModuleUuid);
    } else if (currentChapter < chapterLength - 1) {
      if(!data.isPaid){
        handleModal();
        return;
      }
      const nextChapter = data.courseModules[currentChapter + 1].module[0];
      handleVideo(nextChapter.chapterModuleUuid, currentChapter + 1, 0, nextChapter.userChapterModuleUuid);
    }
  };

  const handleModal = () => {
    if (!token) {
      push(`/login?redirect=/course/${id}`);
      return;
    }
    setIsOpen(true);
  };

  const handleCourses = (e) => {
    e.preventDefault();
    push("/courses");
  };

  const capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };


  if (isError) {
    return (
      <div className="container flex items-center justify-center h-screen">
        <h1>{error.message} , Mohon Coba Kembali</h1>
      </div>
    );
  }

  return (
    <>
      {isLoading ? (
        <CircleLoading />
      ) : (
        <>
        {
          data.isPremium ? <PremiumEnrollModal isOpen={isOpen} setIsOpen={setIsOpen} data={data} token={token} /> : <FreeEnrollModal isOpen={isOpen} setIsOpen={setIsOpen} data={data} token={token} />
        }
        
          <div className="py-6 md:py-10 bg-secret-blue shadow-xl xl:h-[300px]">
            { !data?.isOnboarding && data?.isPaid ?  <OnBoardingModals data={data} token={token} /> : ''}
            <div className="container grid gap-10 px-1 md:px-2 mx-auto xl:grid-cols-5">
              <div className="xl:col-span-3 p-1">

                <Link
                  className="flex items-center mb-4 space-x-2"
                  href={"/courses"}
                >
                  <FiArrowLeft className="text-secret-text hover:text-secret-darkblue text-sm md:text-base" size={16} />
                  <div className="font-bold text-secret-text text-sm md:text-base hover:text-secret-darkblue">
                    Kelas Lainnya
                  </div>
                </Link>

                <div className="flex flex-col mb-3">
                  <div className="flex items-center justify-between ">
                    <h1 className="text-base md:text-2xl font-bold text-secret-text">
                      {data?.category}
                    </h1>
                    <div className="flex items-center space-x-1">
                      <FaStar className="text-yellow-400 text-xs md:text-base" />
                      <span className="font-bold text-secret-text text-xs md:text-base">
                        {data?.rating}
                      </span>
                    </div>
                  </div>
                  <h2 className="font-bold text-secret-pink text-base md:text-2xl">
                    {data?.name}
                  </h2>
                  <p className="text-sm text-gray-500 ">by {data?.author}</p>
                </div>

                <div className="flex items-center justify-between mb-4 max-w-[400px]">
                  <div className="flex items-center space-x-2 font-semibold">
                    <GiRank3 className="text-green-700 text-sm md:text-lg" />
                    <span className="text-secret-text text-sm md:text-base">{capitalize(data?.level)}</span>
                  </div>

                  <div className="flex items-center space-x-2 font-semibold">
                    <FaBookBookmark className="text-green-700 text-sm md:text-base" />
                    <span className="text-secret-text text-sm md:text-base">
                      {data?.totalModule} Modul
                    </span>
                  </div>

                  <div className="flex items-center space-x-2 font-semibold">
                    <FaRegClock className="text-green-700 text-sm md:text-base" />
                    <span className="text-secret-text text-sm md:text-base">
                      {data?.totalMinute} Menit
                    </span>
                  </div>
                </div>

                <Link
                  className="flex items-center justify-center px-6 py-2 space-x-2 bg-secret-darkblue rounded-full hover:scale-105 max-w-xs"
                  href={data?.telegram}
                >
                  <div className="font-bold text-white shadow-2xl hover:shadow-none text-sm md:text-base">
                    Telegram Link
                  </div>
                  <BiSolidChat className="text-white" size={20} />
                </Link>
              </div>

              <div className="xl:col-span-2">
                <div className="p-4 pb-0 md:p-8 bg-white drop-shadow rounded-2xl">
                  <div className="flex items-center justify-between mb-3">

                    <h1 className="font-bold text-sm md:text-xl">Materi Belajar</h1>
                    {/* progress bar here */}
                    {data?.isPaid && <div className="relative py-2 rounded-full bg-secret-pink w-[150px] md:w-[200px] overflow-hidden">
                      <div
                        style={{
                          width: `${data?.progressBar}%`,
                        }}
                        className="absolute top-0 left-0 py-2 rounded-full bg-secret-darkblue transition-all duration-500"
                      ></div>
                      <div className="absolute text-xs text-white transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 font-bold">
                        {data?.progressBar ? data?.progressBar : 0}%
                      </div>
                    </div>}
                  </div>

                  {data?.courseModules.map((chapter, index) => (
                    <Chapter
                      key={index}
                      name={chapter.chapter}
                      time={chapter.estimation}
                      modules={chapter.module}
                      index={index}
                      handleVideo={handleVideo}
                      isPremium={data?.isPremium}
                      handleModal={handleModal}
                      isPaid={data?.isPaid}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="py-7 md:py-10">
            <div className="container grid gap-10 px-2 mx-auto xl:grid-cols-5">
              <div className="xl:col-span-3">
                {videoLoading ? (
                  < VideoLoading/>
                ) :
                
                videoData ? (
                  <iframe
                    className="w-full h-44 mb-5 rounded-2xl shadow-2xl md:h-full"

                    src={videoData}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen={true}
                  ></iframe>
                  
                ) : (
                  <iframe
                    className="w-full h-44 mb-5 rounded-2xl shadow-2xl md:h-full"

                    src={data?.introVideo}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen={true}
                  ></iframe>
                  
                )}
                <div className="flex gap-2 mb-3">
                  <button
                    className="bg-secret-pink text-white font-bold px-2 rounded-lg text-sm md:text-lg hover:scale-105 duration-300 shadow-2xl "
                    onClick={handleCourses}
                  >
                    Kelas Lainnya
                  </button>
                  <button className="bg-secret-darkblue text-white font-bold px-2 rounded-lg text-sm md:text-lg hover:scale-105 duration-300 shadow-2xl " onClick={handleNextVideo}>
                    Video Selanjutnya
                  </button>

                </div>

                <h2 className="mb-3 text-sm md:text-2xl font-bold">Tentang Kelas</h2>
                <p className="mb-5 leading-relaxed text-gray-500 text-xs md:text-base">
                  {data?.description}
                </p>

                <h2 className="mb-3 text-sm md:text-xl font-bold">
                  Kelas Ini Ditujukan Untuk
                </h2>
                <ol className="mb-5 leading-relaxed text-gray-500 list-decimal list-inside">
                  {data?.classTarget.map((item, index) => (
                    <li key={index} className="text-xs md:text-base">{item}</li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </>
      )}
      <Toaster position="bottom-left" />
    </>
  );
};

export default DetailKelas;
