'use client'

import React from 'react'
import Image from 'next/image'

import { BiSearchAlt } from "react-icons/bi";
import { FiUser } from "react-icons/fi";
import { FiBell } from "react-icons/fi";


const Navbar = () => {
  return (
        <nav className="mx-auto block w-full max-w-screen-xl  bg-DARKBLUE05  py-2 px-4 text-white  lg:px-16 ">
        <div>
            <div className="container mx-auto flex items-center justify-between text-gray-900">
                <div className='flex gap-2'>
                    <a
                        href="#"
                        className="mr-4  cursor-pointer p-[-20px]"
                    >
                        <Image
                            src='Belajar_white 3.svg'
                            className='relative top-0'
                            alt='logo'
                            width={100}
                            height={100}
                        />
                    </a>
                    <div className='relative flex leading-loose'>
                        <input 
                            type="text"
                            placeholder='Cari Kursus Terbaik....'
                            name='search'
                            className='w-[500px] h-[62px] px-5 py-3 rounded-xl mt-6'/> 

                        <button className='search absolute top-1/2 -translate-y-1/2 right-3 transform bg-DARKBLUE05 p-2 rounded-xl' >
                            <BiSearchAlt color='white'/>
                        </button> 
                    </div> 
                </div>



            <ul className="hidden items-center gap-6 lg:flex">
                <li className="block p-1 ">
                <a className="flex gap-1 items-center bg-DARKBLUE03 px-6 py-1 rounded-lg" href="#">
                    <Image
                        src='icon/fi_list.svg'
                        width={20}
                        height={10}
                        alt='list-icon'/>
                    <p className='text-white font-semibold'>Kelas</p>
                </a>
                </li>
                <li className="block p-1 ">
                <a className="flex items-center" href="#">
                    <FiBell color='white' size={25}/>
                </a>
                </li>
                <li className="block p-1 ">
                <a className="flex items-center" href="#">
                    <FiUser color='white' size={25}/>
                </a>
                </li>
            </ul>
            
            <button
                className="middle none relative ml-auto h-6 max-h-[40px] w-6 max-w-[40px] rounded-lg text-center font-sans text-xs font-medium uppercase text-blue-gray-500 transition-all hover:bg-transparent focus:bg-transparent active:bg-transparent disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:hidden"
                data-collapse-target="navbar"
            >
                <span className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 transform">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                >
                    <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                    ></path>
                </svg>
                </span>
            </button>
            </div>
            
        </div>
    </nav>
  )
}

export default Navbar