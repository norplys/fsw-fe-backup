import Image from "next/image";
import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { BiX } from "react-icons/bi";
import { useState } from "react";
import axios from "axios";
import { VscLoading } from "react-icons/vsc";
import toast  from "react-hot-toast";

export default function OnBoardingModals({
  data,
  token
}) {
  const [isOpen, setIsOpen] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const handleOnboarding = async (token, uuid) => {
    setIsLoading(true);
    try{
      await axios.put(`https://api.academy-skillhub.com/v1/courses/onboarding/${uuid}`, {}, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success("Berhasil mengupdate onboarding");
      setIsOpen(false);
    }
    catch(err){
      toast.error("Gagal memulai kelas mohon coba lagi");
      setIsLoading(false);
    }
  }
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
                  className="mb-5 text-lg md:text-2xl font-bold text-center text-secret-darkblue "
                >
                  OnBoarding
                </Dialog.Title> 
                  <div className="h-56 w-full flex items-center mb-3">
                  <Image
                    className="bg-white h-full w-full"
                    src="/Group.svg"
                    width={140}
                    height={100}
                    alt={name}
                  />
                  </div>
                  <div className="flex flex-col gap-3 justify-center">
                    <p className="text-secret-text text-sm md:text-base font-bold text-center border-b-2 border-secret-darkblue pb-2">
                      Persiapkan hal berikut untuk belajar yang maksimal :
                    </p>
                    <p className="text-secret-text text-xs md:text-sm mb-3 text-center">
                        {data.onboarding}
                    </p>
                  </div>

                  <button className="flex justify-center gap-1 mt-1 w-full py-2 bg-secret-pink rounded-[15px] relative hover:scale-105 duration-300 text-white font-bold" onClick={() => handleOnboarding(token, data?.id)}>
                    <div className="flex">
                      {isLoading ? <VscLoading className="animate-spin font-bold text-lg mx-11"/>  : <><span className="text-sm md:text-base">Saya Sudah Siap Belajar</span></>}
                    </div>
                  </button>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
