import { CgProfile } from "react-icons/cg";
import { useUsers } from "@/app/context/usersContext";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
import { VscLoading } from "react-icons/vsc";


export default function ProfileSaya (){
  const { user } = useUsers();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    values:{
      name: user?.name,
      email: user?.email,
      phone: user?.phone,
      country: user?.country,
      city: user?.city,
    }
  });
  const onSubmit = async(data) => {
    try {
      const token = localStorage.getItem("token");
      const res = axios.put(`https://api.academy-skillhub.com/v1/profile`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      await toast.promise(res, {
        loading: "Loading...",
        success: "Berhasil mengubah profil",
        error: "Gagal mengubah profil",
      });
    } catch (error) {
      toast.error(error.response.data.message);
    }

  };
    return (
        <form className="items-center justify-between px-4 md:px-12 w-full md:w-[20rem] text-[0.625rem]" onSubmit={handleSubmit(onSubmit)}>
                  <div className="flex flex-row justify-center px-8 my-2 md:my-6">
                    <CgProfile className=" text-6xl" />
                  </div>
                  <div className="flex flex-col md:w-[16rem] mb-2">
                    <label
                      htmlFor="name"
                      className="text-gray-800 font-bold leading-tight tracking-normal text-xs md:text-sm mb-2"
                    >
                      Nama
                    </label>
                    <input
                      {...register("name", { required: true })}
                      type="text"
                      id="name"
                      className={`text-gray-600 focus:outline-none focus:border focus:border-indigo-700 w-full h-8 flex items-center pl-3 border-gray-300 rounded-xl border text-xs md:text-sm ${errors.name ? 'border-red-500' : ''}`}
                      placeholder="Text"
                    />
                  </div>
                  {/* </div> */}
                  <div className="flex flex-col md:w-[16rem] my-2">
                    <label
                      htmlFor="name"
                      className="text-gray-800 font-bold leading-tight tracking-normal text-xs md:text-sm mb-2"
                    >
                      Email
                    </label>
                    <input
                      {...register("email", { required: true, validate : /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/ })}
                      type="text"
                      id="name"
                      className={`text-gray-600 focus:outline-none focus:border focus:border-indigo-700 w-full h-8 flex items-center pl-3 border-gray-300 rounded-xl border text-xs md:text-sm ${errors.email ? 'border-red-500' : ''}`}
                      placeholder="email@gmail.com"
                      disabled
                    />
                  </div>
                  <div className="flex flex-col md:w-[16rem] my-2">
                    <label
                      htmlFor="name"
                      className="text-gray-800  font-bold leading-tight tracking-normal text-xs md:text-sm mb-2"
                    >
                      Nomor Telepon
                    </label>
                    <input
                      {...register("phone", { required: true, validate : /^[0-9]+$/ })}
                      type="text"
                      id="name"
                      className={`text-gray-600 focus:outline-none focus:border focus:border-indigo-700 w-full h-8 flex items-center pl-3 border-gray-300 rounded-xl border text-xs md:text-sm ${errors.phone ? 'border-red-500' : ''}`}
                      placeholder="Text"
                    />
                  </div>
                  <div className="flex flex-col md:w-[16rem] my-2">
                    <label
                      htmlFor="name"
                      className="text-gray-800  font-bold leading-tight tracking-normal text-xs md:text-sm mb-2"
                    >
                      Negara
                    </label>
                    <input
                      {...register("country", { required: true })}
                      type="text"
                      id="name"
                      className={`text-gray-600 focus:outline-none focus:border focus:border-indigo-700 w-full h-8 flex items-center pl-3 border-gray-300 rounded-xl border text-xs md:text-sm ${errors.country ? 'border-red-500' : ''}`}
                      placeholder="Negara"
                    />
                  </div>
                  <div className="flex flex-col md:w-[16rem] my-2">
                    <label
                      htmlFor="name"
                      className="text-gray-800  font-bold leading-tight tracking-normal text-xs md:text-sm mb-2"
                    >
                      Kota
                    </label>
                    <input
                      {...register("city", { required: true })}
                      type="text"
                      id="name"
                      className={`text-gray-600 focus:outline-none focus:border focus:border-indigo-700 w-full h-8 flex items-center pl-3 border-gray-300 rounded-xl border text-xs md:text-sm ${errors.city ? 'border-red-500' : ''}`}
                      placeholder="Jakarta"
                    />
                  </div>
                  <div className="flex items-center justify-center md:w-[16rem] p-5 mb-8">
                    <button
                      type="submit"
                      className="bg-[#6148FF] text-white active:bg-indigo-500 font-bold text-[0.625rem] py-2 px-6 rounded-2xl hover:bg-indigo-400 mr-1 mb-1 ease-linear transition-all duration-300 text-xs md:text-sm w-full flex justify-center"

                    >
                      {isSubmitting ? <VscLoading className="animate-spin text-xl"/> :  "Simpan Profil Saya"}
                    </button>
                  </div>
                </form>
    )
}