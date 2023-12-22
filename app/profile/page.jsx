"use client"
import Link from "next/link"
import { BiExit } from "react-icons/bi"
import { FaArrowLeft } from "react-icons/fa"
import { CgProfile } from "react-icons/cg"
import { FiEdit3, FiSettings, FiShoppingCart } from "react-icons/fi"
import {useUsers} from "@/app/context/usersContext"
import { useForm } from "react-hook-form"


export default function Profile (){
    const {user} = useUsers();
    const {register, handleSubmit, formState: { errors }} = useForm({
        defaultValues: {
            name: user?.name,
            email: user?.email,
            phone: user?.phone,
            country: user?.country,
            city: user?.city
        }
    });
    return (
        <> 
        <div className='h-auto md:h-40 p-6 bg-secret-blue '>
            <Link href='/' className="flex justify-start px-4 md:px-12 gap-2 md:gap-5 mb-4 md:mb-8">
                <FaArrowLeft className="text-4xl w-6 h-6"/>
                 <h1 className='font-bold text-xl'>Kembali Ke Beranda</h1>
            </Link>
            <div>
                
            </div>
            <div className="flex flex-col items-center">
                <div className="card bg-white w-full md:w-[50rem] h-auto md:h-[37rem] rounded-xl border border-secret-pink mb-8">
                    <h1 className='flex justify-center font-bold px-5 py-5 bg-secret-pink rounded-t-xl text-2xl'>Akun</h1>
                    
                    <div className="flex flex-col md:flex-row">
                        <div className="md:w-1/2">
                            <div className="flex flex-row justify-start px-4 md:px-8 gap-5 my-2 md:my-5 hover:text-blue-600">
                                <FiEdit3 className="text-4xl w-7 h-7" />
                                <div className="flex flex-col justify-between">
                                    <a href="/profile" className="font-bold text-lg">Profile Saya</a>
                                </div>
                            </div>

                            <div className="flex flex-row justify-start px-4 md:px-8 gap-5 my-2 md:my-5 hover:text-blue-600">
                                <FiSettings className="text-4xl w-7 h-7" />
                                <div className="flex flex-col justify-between">
                                    <a href="/profile/ubah-password" className="font-bold text-lg">Ubah Password</a>
                                </div>
                            </div>

                            <div className="flex flex-row justify-start px-4 md:px-8 gap-5 my-2 md:my-5 hover:text-blue-600">
                                <FiShoppingCart className="text-4xl w-7 h-7" />
                                <div className="flex justify-between">
                                    <a href="/profile/riwayat-pembayaran" className="font-bold text-lg">Riwayat Pembayaran</a>
                                </div>
                            </div>
                        </div>
                        <div className="md:w-1/2">
                        <form className="items-center justify-between px-4 md:px-12 w-full md:w-[20rem] text-[0.625rem]">
                            <div className="flex flex-row justify-center px-8 gap-10 my-6">
                                <CgProfile className=" w-16 h-16" />
                            </div>
                            {/* <div className="flex p-1 gap-2"> */}
                                <div className="flex flex-col md:w-[16rem] mb-2">
                                    <label htmlFor="name" className="text-gray-800 font-bold leading-tight tracking-normal text-sm mb-2">Nama</label>
                                    <input
                                        {...register('name', { required: true })} 
                                        type="text"
                                        id="name" 
                                        className="text-gray-600 focus:outline-none focus:border focus:border-indigo-700 w-full h-8 flex items-center pl-3 border-gray-300 rounded-xl border text-sm" 
                                        placeholder="Text" />
                                </div>
                            {/* </div> */}
                            <div className="flex flex-col md:w-[16rem] my-2">
                                <label htmlFor="name" className="text-gray-800 font-bold leading-tight tracking-normal text-sm mb-2">Email</label>
                                <input 
                                    {...register('email', { required: true })}
                                    type="text"
                                    id="name" 
                                    className="text-gray-600 focus:outline-none focus:border focus:border-indigo-700 w-full h-8 flex items-center pl-3 border-gray-300 rounded-xl border text-sm" 
                                    placeholder="Text" />
                            </div>
                            <div className="flex flex-col md:w-[16rem] my-2">
                                <label htmlFor="name" className="text-gray-800  font-bold leading-tight tracking-normal text-sm mb-2">Nomor Telepon</label>
                                <input 
                                    {...register('phone', { required: true })}
                                    type="text"
                                    id="name" 
                                    className="text-gray-600 focus:outline-none focus:border focus:border-indigo-700 w-full h-8 flex items-center pl-3 border-gray-300 rounded-xl border text-sm" 
                                    placeholder="Text" />
                            </div>
                            <div className="flex flex-col md:w-[16rem] my-2">
                                <label htmlFor="name" className="text-gray-800  font-bold leading-tight tracking-normal text-sm mb-2">Negara</label>
                                <input 
                                    {...register('country', { required: true })}
                                    type="text"
                                    id="name" 
                                    className="text-gray-600 focus:outline-none focus:border focus:border-indigo-700 w-full h-8 flex items-center pl-3 border-gray-300 rounded-xl border text-sm" 
                                    placeholder="Text" />
                            </div>
                            <div className="flex flex-col md:w-[16rem] my-2">
                                <label htmlFor="name" className="text-gray-800  font-bold leading-tight tracking-normal text-sm mb-2">Kota</label>
                                <input 
                                    {...register('city', { required: true })}
                                    type="text"
                                    id="name" 
                                    className="text-gray-600 focus:outline-none focus:border focus:border-indigo-700 w-full h-8 flex items-center pl-3 border-gray-300 rounded-xl border text-sm" 
                                    placeholder="Text" />
                            </div>
                            <div className="flex items-center justify-center md:w-[16rem] p-5 mb-8">
                            <button
                                type="button"
                                className="bg-[#6148FF] text-white active:bg-indigo-500 font-bold text-[0.625rem] py-2 px-6 rounded-2xl hover:bg-indigo-400 mr-1 mb-1 ease-linear transition-all duration-150 text-sm">
                                Simpan Profil Saya
                            </button>
                        </div>
                        </form>
                        </div>
                    </div>

                </div>
            </div>
        </div>


        </>
    )
}
