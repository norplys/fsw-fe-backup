import { Fragment } from "react";
import { BiSolidStar, BiX } from "react-icons/bi";
import { FiArrowRight } from "react-icons/fi";
import { FaBookBookmark, FaRegClock } from "react-icons/fa6";
import { GiRank3 } from "react-icons/gi";
import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";
import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { VscLoading } from "react-icons/vsc"; 
import { useQueryClient } from "react-query";

export default function FreeEnrollModal({ data, isOpen, setIsOpen, token }) {
  const queryClient = useQueryClient();
  const [isLoading, setIsLoading] = useState(false);
    const handleEnroll = async (id, token) => {
      try {
        setIsLoading(true);
        await axios.post(
          "https://api.academy-skillhub.com/v1/courses/enrollment",
          {
            course_uuid: id,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        toast.success("Berhasil mendaftar kelas");
        queryClient.invalidateQueries(["classDetails", id]);
        setIsOpen(false);
        setIsLoading(false);
      }
      catch (err) {
        toast.error("Gagal mendaftar kelas mohon coba lagi");
        setIsLoading(false);
      }
    }
    const capitalize = (string) => {
      return string.charAt(0).toUpperCase() + string.slice(1);
    };
    return (
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
                <div className="fixed inset-0 bg-black/80"></div>
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
                    <Dialog.Panel className="relative w-full max-w-lg overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl p-3 md:p-6">
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
                        className="mb-5 md:text-xl font-bold text-center"
                      >
                        Selangkah lagi menuju
                        <br />
                        <span className="text-secret-darkblue">
                          Kelas Gratis
                        </span>
                      </Dialog.Title>

                      <div className="mb-5 overflow-hidden border border-secret-darkblue rounded-2xl">
                        <div className="h-[100px] relative overflow-hidden">
                          <Image
                            src={data?.image}
                            width={500}
                            height={500}
                            layout="responsive"
                            alt="Video Preview"
                            className="h-full w-full object-cover"
                          />
                        </div>

                        <div className="p-5 text-sm">
                          <div className="flex flex-col mb-3">
                            <div className="flex items-center justify-between ">
                              <h1 className="font-bold text-secret-darkblue">
                                {data?.category}
                              </h1>
                              <div className="flex items-center space-x-1">
                                <BiSolidStar
                                  className="text-yellow-400"
                                  size={16}
                                />
                                <span className="font-bold">{data?.rating}</span>
                              </div>
                            </div>
                            <h2 className="font-bold text-secret-pink">
                              {data?.name}
                            </h2>
                            <p className="text-gray-500">by {data?.author}</p>
                          </div>

                          <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
                            <div className="flex items-center space-x-2 font-semibold">
                              <GiRank3 className="text-green-700 text-sm md:text-lg" />
                              <span className="text-secret-text text-xs md:text-base">
                                {capitalize(data?.level)} Level
                              </span>
                            </div>

                            <div className="flex items-center space-x-2 font-semibold">
                              <FaBookBookmark className="text-green-700 text-sm md:text-base" />
                              <span className="text-secret-text text-xs md:text-base">
                                {data?.totalModule} Modul
                              </span>
                            </div>

                            <div className="flex items-center space-x-2 font-semibold">
                              <FaRegClock className="text-green-700 text-xs md:text-base" />
                              <span className="text-secret-text text-xs md:text-base">
                                {data?.totalMinute} Menit
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center justify-center">
                        <button
                          type="button"
                          className={`flex items-center px-6 py-2 space-x-2 font-bold text-white rounded-full bg-secret-pink hover:scale-105 duration-300 ${isLoading ? "cursor-wait" : "cursor-pointer"}`}
                          onClick={() => handleEnroll(data?.id, token)}
                        >
                          {isLoading ? <VscLoading className="animate-spin font-bold text-lg mx-11"/>  : <><span className="text-sm md:text-base">Ikuti Sekarang</span><FiArrowRight className="text-white md:text-lg" /></>}
                          
                        </button>
                      </div>
                    </Dialog.Panel>
                  </Transition.Child>
                </div>
              </div>
            </Dialog>
          </Transition>
    );
}
