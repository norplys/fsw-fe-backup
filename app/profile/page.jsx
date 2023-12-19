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
        <div className='h-36 p-6 bg-secret-blue '>
            <Link href='/' className="flex justify-start px-72 gap-5 mb-8">
                <FaArrowLeft />
                 <h1 className='font-bold'>Kembali Ke Beranda</h1>
            </Link>
            <div>
                
            </div>
            <div className="flex justify-center items-center ">
                <div className="card bg-white w-3/6 h-[30rem] rounded-xl border border-secret-pink mb-8">
                    <h1 className='flex justify-center font-bold px-5 py-5 bg-secret-pink rounded-t-xl'>Akun</h1>
                    
                    <div className="flex flex-row">
                        <div>
                            <div className="flex flex-row justify-start px-8 gap-2 my-5">
                                <FiEdit3 className="text-4xl w-6 h-6" />
                                <div className="flex justify-between">
                                    <p className="font-bold text-blue-700 text-sm">Profile Saya</p>
                                </div>
                            </div>

                            <div className="flex flex-row justify-start px-8 gap-5 my-5">
                                <FiSettings className="text-4xl w-6 h-6" />
                                <div className="flex justify-between">
                                    <p className="font-bold text-xs">Ubah Password</p>
                                </div>
                            </div>

                            <div className="flex flex-row justify-start px-8 gap-5 my-5">
                                <FiShoppingCart className="text-4xl w-6 h-6" />
                                <div className="flex justify-between">
                                    <p className="font-bold text-xs">Riwayat Pembayaran</p>
                                </div>
                            </div>

                            <div className="flex flex-row justify-start px-8 gap-5 my-5">
                                <BiExit className="text-4xl w-6 h-6" />
                                <div className="flex justify-between">
                                    <p className="font-bold text-xs">Keluar</p>
                                </div>
                            </div>
                        </div>
                        <div>
                        <form className="items-center justify-between px-12 w-[20rem] text-[0.625rem] ">
                            <div className="flex flex-row justify-center px-8 gap-10 my-6">
                                <CgProfile className=" w-14 h-14" />
                            </div>
                            {/* <div className="flex p-1 gap-2"> */}
                                <div className="flex flex-col w-[14rem]">
                                    <label htmlFor="name" className="text-gray-800  font-bold leading-tight tracking-normal">Nama</label>
                                    <input
                                        {...register('name', { required: true })} 
                                        type="text"
                                        id="name" 
                                        className="text-gray-600 focus:outline-none focus:border focus:border-indigo-700 w-full h-8 flex items-center pl-3  border-gray-300 rounded-xl border" 
                                        placeholder="Text" />
                                </div>
                            {/* </div> */}
                            <div className="flex flex-col w-[14rem]">
                                <label htmlFor="name" className="text-gray-800 font-bold leading-tight tracking-normal">Email</label>
                                <input 
                                    {...register('email', { required: true })}
                                    type="text"
                                    id="name" 
                                    className="text-gray-600 focus:outline-none focus:border focus:border-indigo-700  h-8 flex items-center pl-3  border-gray-300 rounded-xl border" 
                                    placeholder="Text" />
                            </div>
                            <div className="flex flex-col w-[14rem]">
                                <label htmlFor="name" className="text-gray-800  font-bold leading-tight tracking-normal">Nomor Telepon</label>
                                <input 
                                    {...register('phone', { required: true })}
                                    type="text"
                                    id="name" 
                                    className="text-gray-600 focus:outline-none focus:border focus:border-indigo-700 h-8 flex items-center pl-3  border-gray-300 rounded-xl border" 
                                    placeholder="Text" />
                            </div>
                            <div className="flex flex-col w-[14rem]">
                                <label htmlFor="name" className="text-gray-800  font-bold leading-tight tracking-normal">Negara</label>
                                <input 
                                    {...register('country', { required: true })}
                                    type="text"
                                    id="name" 
                                    className="text-gray-600 focus:outline-none focus:border focus:border-indigo-700 h-8 flex items-center pl-3  border-gray-300 rounded-xl border" 
                                    placeholder="Text" />
                            </div>
                            <div className="flex flex-col w-[14rem]">
                                <label htmlFor="name" className="text-gray-800  font-bold leading-tight tracking-normal">Kota</label>
                                <input 
                                    {...register('city', { required: true })}
                                    type="text"
                                    id="name" 
                                    className="text-gray-600 focus:outline-none focus:border focus:border-indigo-700 h-8 flex items-center pl-3  border-gray-300 rounded-xl border" 
                                    placeholder="Text" />
                            </div>
                            <div className="flex items-center justify-center w-[14rem] p-5 mb-5">
                            <button
                                type="button"
                                className="bg-[#6148FF] text-white active:bg-indigo-500 font-bold text-[0.625rem] py-2 px-6 rounded-2xl hover:bg-indigo-400 mr-1 mb-1 ease-linear transition-all duration-150">
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
