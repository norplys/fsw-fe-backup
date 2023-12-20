"use client";
import CircleLoading from "@/components/CircleLoading";

import { Fragment, useState, useEffect } from "react";

import Link from "next/link";
import { useParams } from "next/navigation";
import { BiSolidChat, BiSolidStar, BiX } from "react-icons/bi";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { FaBookBookmark, FaRegClock } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import { GiRank3 } from "react-icons/gi";
import { Dialog, Transition } from "@headlessui/react";
import { useClassDetails } from "@/app/utils/hooks/useClassDetails";
import Chapter from "@/components/ClassDetail/Chapter";
import Image from "next/image";
import { useRouter } from "next/navigation";

const DetailKelas = () => {
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setToken(token);
    }
  }, []);

  const { push } = useRouter();
  const [token, setToken] = useState("");
  const { id } = useParams();
  const [isOpen, setIsOpen] = useState(false);
  const { data, isLoading, isError, error } = useClassDetails(id, token);
  const [video, setVideo] = useState("");


  const handleVideo = (video) => {
    if(!token){
      push(`/login?redirect=/courses/${id}`)
      return
    }
    setVideo(video);
  };

  const handleModal = () => {
    if(!token){
      push(`/login?redirect=/courses/${id}`)
      return
    }
    setIsOpen(true);
  };

  const handleCourses = (e) => {
    e.preventDefault();
    push("/courses")
  }

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
          <Transition appear show={isOpen} as={Fragment}>
            <Dialog
              as="div"
              className="relative z-30"
              onClose={() => setIsOpen(false)}
            >
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="fixed inset-0 bg-sectext-secret-text/80"></div>
              </Transition.Child>

              <div className="fixed inset-0 overflow-y-auto">
                <div className="flex items-center justify-center min-h-full p-4 text-center">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                  >
                    <Dialog.Panel className="relative w-full max-w-lg p-6 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                      <button
                        className="absolute top-0 right-0 p-2 m-4 transition-all duration-200 ease-in-out bg-transparent rounded-full group"
                        onClick={() => setIsOpen(false)}
                      >
                        <BiX
                          className="transition-all duration-200 ease-in-out text-secret-darkblue group-hover:text-white"
                          size={25}
                        />
                      </button>

                      <Dialog.Title
                        as="h3"
                        className="mb-5 text-xl font-bold text-center"
                      >
                        Selangkah lagi menuju
                        <br />
                        <span className="text-secret-darkblue">Kelas Premium</span>
                      </Dialog.Title>

                      <div className="mb-5 overflow-hidden border border-secret-darkblue rounded-2xl">
                        <div className="h-[100px] relative overflow-hidden">
                          <Image
                            src="/orangKetawa.svg"
                            width={500}
                            height={500}
                            layout="responsive"
                            alt="Video Preview"
                            className="object-cover object-center"
                          />
                        </div>

                        <div className="p-5 text-sm">
                          <div className="flex flex-col mb-3">
                            <div className="flex items-center justify-between ">
                              <h1 className="font-bold text-secret-darkblue">
                                {data.category}
                              </h1>
                              <div className="flex items-center space-x-1">
                                <BiSolidStar
                                  className="text-yellow-400"
                                  size={16}
                                />
                                <span className="font-bold">{data.rating}</span>
                              </div>
                            </div>
                            <h2 className="font-bold text-secret-pink">{data.name}</h2>
                            <p className="text-gray-500">by {data.author}</p>
                          </div>

                          <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center space-x-2 font-semibold">
                              <GiRank3 className="text-green-400 text-lg" />
                              <span className="text-secret-text">{data.level}</span>
                            </div>

                            <div className="flex items-center space-x-2 font-semibold">
                              <FaBookBookmark className="text-green-400 text-base" />
                              <span className="text-secret-text">
                                {data.totalModule} Modul
                              </span>
                            </div>

                            <div className="flex items-center space-x-2 font-semibold">
                              <FaRegClock className="text-green-400 text-base" />
                              <span className="text-secret-text">
                                {data.totalMinute} Menit
                              </span>
                            </div>
                          </div>

                          <div className="px-4 py-1 text-sm font-bold text-white rounded-full bg-secret-darkblue w-fit">
                            Rp.{data.price}
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center justify-center">
                        <Link
                          type="button"
                          className="flex items-center px-6 py-2 space-x-2 font-bold text-white rounded-full bg-secret-pink hover:scale-105 duration-300"
                          href={`/payment/${data.id}`}  
                          onClick={() => setIsOpen(false)}
                        >
                          <span>Beli Sekarang</span>
                          <FiArrowRight className="text-white text-lg" />
                        </Link>
                      </div>
                    </Dialog.Panel>
                  </Transition.Child>
                </div>
              </div>
            </Dialog>
          </Transition>

          <div className="py-10 bg-secret-blue shadow-xl xl:h-[300px]">
            <div className="container grid gap-10 px-2 mx-auto xl:grid-cols-5">
              <div className="xl:col-span-3">
                <Link
                  className="flex items-center mb-4 space-x-2"
                  href={"/courses"}
                >
                  <FiArrowLeft color="sectext-secret-text" size={16} />
                  <div className="font-bold text-secret-text">Kelas Lainnya</div>
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
                    <span className="text-secret-text">{data.totalModule} Modul</span>
                  </div>

                  <div className="flex items-center space-x-2 font-semibold">
                    <FaRegClock className="text-secret-green text-base" />
                    <span className="text-secret-text">{data.totalMinute} Menit</span>
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
                    {/* <div className="relative py-2 rounded-full bg-zinc-300 w-[200px] overflow-hidden">
                      <div
										style={{
											width: `${detail.completion * 2}px`,
										}}
										className='absolute top-0 left-0 py-2 rounded-full bg-seborder-secret-darkblue'></div>
									<div className='absolute text-xs text-white transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'>
										{detail.completion}% complete
									</div>
                    </div> */}
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
                      handleModal = {handleModal}
                      isPaid = {data?.isPaid}
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
                <div className="flex gap-2 relative -top-16 left-4">
                <button className="bg-secret-pink text-white font-bold px-2 rounded-lg text-lg hover:scale-105 duration-300 " onClick={handleCourses}>Kelas Lainnya</button>
                <button className="bg-secret-darkblue text-white font-bold px-2 rounded-lg text-lg hover:scale-105 duration-300">Next Video</button>
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
