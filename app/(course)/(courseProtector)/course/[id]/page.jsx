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


const DetailKelas = () => {
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setToken(token);
    }
  }, []);  
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);
  const { push } = useRouter();
  const [token, setToken] = useState("");
  const { id } = useParams();
  const [isOpen, setIsOpen] = useState(false);
  const { data, isLoading, isError, error } = useClassDetails(id, token);
  const [video, setVideo] = useState("");
  const pathname = usePathname();

  useEffect(() => {
    let chapterIndex = searchParams.get("chapter");
    let index = searchParams.get("module");
    if (chapterIndex === null || index === null) {
      setVideo("");
      return;
    }  
    if (chapterIndex !== null || index !== null) {
      chapterIndex = Number(chapterIndex);
      index = Number(index);
      const video = data?.courseModules[chapterIndex].module[index].courseLink;
      setVideo(video);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  const handleVideo = (video, chapterIndex, index) => {
    if(!data.isPremium && !data.isPaid && chapterIndex !== 0){
      handleModal();
      return;
    }
    if (!token) {
      push(`/login?redirect=/courses/${id}`);
      return;
    }
    params.set("chapter", chapterIndex);
    params.set("module", index);
    push(`${pathname}?${params.toString()}`, {
      scroll : false
    });
    setVideo(video);
  };

  const handleNextVideo = () => {
    let currentChapter = Number(searchParams.get("chapter"));
    let currentModule = Number(searchParams.get("module"));
    const chapterLength = data.courseModules.length;
    const moduleLength = data.courseModules[currentChapter].module.length;
    const nextVideo = data.courseModules[currentChapter].module[currentModule + 1];

    if (currentModule < moduleLength - 1) {
      handleVideo(nextVideo.courseLink, currentChapter, currentModule + 1);
    } else if (currentChapter < chapterLength - 1) {
      if(!data.isPaid){
        handleModal();
        return;
      }
      handleVideo(data.courseModules[currentChapter + 1].module[0].courseLink, currentChapter + 1, 0);
    }
  };

  const handleModal = () => {
    if (!token) {
      push(`/login?redirect=/courses/${id}`);
      return;
    }
    setIsOpen(true);
  };

  const handleCourses = (e) => {
    e.preventDefault();
    push("/courses");
  };

  if (isError) {
    return (
      <div className="container flex items-center justify-center h-screen">
        <h1>{error.message} , Please try again</h1>
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
          data.isPremium ? <PremiumEnrollModal isOpen={isOpen} setIsOpen={setIsOpen} data={data} /> : <FreeEnrollModal isOpen={isOpen} setIsOpen={setIsOpen} data={data} />
        }
          <div className="py-10 bg-secret-blue shadow-xl xl:h-[300px]">
            <div className="container grid gap-10 px-2 mx-auto xl:grid-cols-5">
              <div className="xl:col-span-3">
                <Link
                  className="flex items-center mb-4 space-x-2"
                  href={"/courses"}
                >
                  <FiArrowLeft color="sectext-secret-text" size={16} />
                  <div className="font-bold text-secret-text">
                    Kelas Lainnya
                  </div>
                </Link>

                <div className="flex flex-col mb-3">
                  <div className="flex items-center justify-between ">
                    <h1 className="text-2xl font-bold text-secret-text">
                      {data.category}
                    </h1>
                    <div className="flex items-center space-x-1">
                      <FaStar className="text-yellow-400 text-base" />
                      <span className="font-bold text-secret-text">
                        {data.rating}
                      </span>
                    </div>
                  </div>
                  <h2 className="text-xl font-bold text-secret-pink">
                    {data.name}
                  </h2>
                  <p className="text-sm text-gray-500 ">by {data.author}</p>
                </div>

                <div className="flex items-center justify-between mb-4 max-w-[400px]">
                  <div className="flex items-center space-x-2 font-semibold">
                    <GiRank3 className="text-secret-green text-lg" />
                    <span className="text-secret-text">{data.level}</span>
                  </div>

                  <div className="flex items-center space-x-2 font-semibold">
                    <FaBookBookmark className="text-secret-green text-base" />
                    <span className="text-secret-text">
                      {data.totalModule} Modul
                    </span>
                  </div>

                  <div className="flex items-center space-x-2 font-semibold">
                    <FaRegClock className="text-secret-green text-base" />
                    <span className="text-secret-text">
                      {data.totalMinute} Menit
                    </span>
                  </div>
                </div>

                <Link
                  className="flex items-center justify-center px-6 py-2 space-x-2 bg-secret-darkblue rounded-full hover:scale-105 max-w-xs"
                  href={data.telegram}
                >
                  <div className="font-bold text-white shadow-2xl hover:shadow-none">
                    Telegram Link
                  </div>
                  <BiSolidChat className="text-white" size={20} />
                </Link>
              </div>

              <div className="xl:col-span-2">
                <div className="p-8 bg-white drop-shadow rounded-2xl">
                  <div className="flex items-center justify-between mb-4">
                    <h1 className="text-xl font-bold">Materi Belajar</h1>
                    {/* progress bar here */}
                    {data.progress && <div className="relative py-2 rounded-full bg-secret-pink w-[200px] overflow-hidden">
                      <div
                        style={{
                          width: `${data.progress}%`,
                        }}
                        className="absolute top-0 left-0 py-2 rounded-full bg-secret-darkblue"
                      ></div>
                      <div className="absolute text-xs text-white transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 font-bold">
                        50% Complete
                      </div>
                    </div>}
                  </div>

                  {data.courseModules.map((chapter, index) => (
                    <Chapter
                      key={index}
                      name={chapter.chapter}
                      time={chapter.estimation}
                      modules={chapter.module}
                      index={index}
                      handleVideo={handleVideo}
                      isPremium={data.isPremium}
                      handleModal={handleModal}
                      isPaid={data?.isPaid}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="py-10">
            <div className="container grid gap-10 px-2 mx-auto xl:grid-cols-5">
              <div className="xl:col-span-3">
                {video ? (
                  <iframe
                    className="w-full h-full mb-5 rounded-2xl shadow-2xl"
                    src={video}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen={true}
                  ></iframe>
                ) : (
                  <iframe
                    className="w-full h-full mb-5 rounded-2xl shadow-2xl"
                    src={data.introVideo}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen={true}
                  ></iframe>
                )}
                <div className="flex gap-2 mb-3">
                  <button
                    className="bg-secret-pink text-white font-bold px-2 rounded-lg text-lg hover:scale-105 duration-300 shadow-2xl "
                    onClick={handleCourses}
                  >
                    Kelas Lainnya
                  </button>
                  <button className="bg-secret-darkblue text-white font-bold px-2 rounded-lg text-lg hover:scale-105 duration-300 shadow-2xl" onClick={handleNextVideo}>
                    Next Video
                  </button>
                </div>

                <h2 className="mb-3 text-2xl font-bold">Tentang Kelas</h2>
                <p className="mb-5 leading-relaxed text-gray-500">
                  {data.description}
                </p>

                <h2 className="mb-3 text-xl font-bold">
                  Kelas Ini Ditujukan Untuk
                </h2>
                <ol className="mb-5 leading-relaxed text-gray-500 list-decimal list-inside">
                  {data.classTarget.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default DetailKelas;
