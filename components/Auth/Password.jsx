import { useForm } from "react-hook-form";
import { VscLoading } from "react-icons/vsc";
import axios from "axios";
import toast from "react-hot-toast";
export default function Password(){
    const { register, handleSubmit,watch, formState: { errors, isSubmitting } } = useForm();
    const onSubmit = async (data)=> {
        try {
            const token = localStorage.getItem("token");
            const res = axios.put(
                "https://final-project-online-course.et.r.appspot.com/v1/update-password",
                {
                    oldPassword: data.oldPassword,
                    newPassword: data.password1,
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            await toast.promise( res , {
                loading: "Loading",
                success: "Berhasil mengubah password",
                error: "Gagal mengubah password",
            })
        }
        catch (err) {
            toast.error(err?.response?.data?.message);
        }

    };
    return(
        <form className="items-center justify-between px-4 md:px-12 w-full md:w-[20rem] text-[0.625rem]" onSubmit={handleSubmit(onSubmit)}>
                            <div className="flex flex-row justify-center px-8 gap-10 my-6">
                                <h1 className="font-black text-xl">Ubah Password</h1>
                            </div>
                            {/* <div className="flex p-1 gap-2"> */}
                                <div className="flex flex-col md:w-[16rem] mb-2">
                                    <label htmlFor="name" className="text-gray-800 font-bold leading-tight tracking-normal text-xs mb-2">Masukkan Password Lama</label>
                                    <input
                                        {...register("oldPassword", { required: true })}
                                        type="password"
                                        id="name" 
                                        className={`text-gray-600 focus:outline-none focus:border focus:border-indigo-700 w-full h-8 flex items-center pl-3 border-gray-300 rounded-xl border text-sm ${errors.oldPassword ? 'border-red-500' : ''}`} 
                                        placeholder="Text" 
                                        />
                                </div>
                            {/* </div> */}
                            <div className="flex flex-col md:w-[16rem] my-2">
                                <label htmlFor="name" className="text-gray-800 font-bold leading-tight tracking-normal text-xs mb-2">Masukkan Password Baru</label>
                                <input 
                                    {...register("password1", { required: true, minLength: 8 })}
                                    type="password"
                                    id="name" 
                                    className={`text-gray-600 focus:outline-none focus:border focus:border-indigo-700 w-full h-8 flex items-center pl-3 border-gray-300 rounded-xl border text-sm ${errors.password1 ? 'border-red-500' : ''}`} 
                                    placeholder="Text" />
                            </div>
                            <div className="flex flex-col md:w-[16rem] my-2">
                                <label htmlFor="name" className="text-gray-800  font-bold leading-tight tracking-normal text-xs mb-2">Ulangi Password Baru</label>
                                <input
                                    {...register("password2", { required: true, validate : value => value === watch('password1') })} 
                                    type="password"
                                    id="name" 
                                    className={`text-gray-600 focus:outline-none focus:border focus:border-indigo-700 w-full h-8 flex items-center pl-3 border-gray-300 rounded-xl border text-sm ${errors.password2 ? 'border-red-500' : ''}`} 
                                    placeholder="Text" />
                            </div>
                            <div className="flex items-center justify-center md:w-[16rem] p-5 mb-8">
                            {isSubmitting ? 
                            <div
                                className="bg-[#6148FF] text-white active:bg-indigo-500 font-bold text-[0.625rem] py-2 px-6 rounded-2xl hover:bg-indigo-400 mr-1 mb-1 ease-linear transition-all duration-150 text-sm w-full flex justify-center cursor-progress">
                                <VscLoading className=" h-5 w-5 mr-3 animate-spin" />
                            </div> 
                            : 
                            <button
                                type="submit"
                                className="bg-[#6148FF] text-white active:bg-indigo-500 font-bold text-[0.625rem] py-2 px-6 rounded-2xl hover:bg-indigo-400 mr-1 mb-1 ease-linear transition-all duration-150 text-sm w-full">
                                Ubah Password
                            </button>}
                        </div>
        </form>
    );
}