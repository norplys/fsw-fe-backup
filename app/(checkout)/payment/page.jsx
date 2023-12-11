'use client'

import React, { useState } from 'react'
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import Link from 'next/link'
import Image from 'next/image'

import { FaChevronDown } from "react-icons/fa"
import { FaChevronUp } from "react-icons/fa"
import { FaArrowLeft } from "react-icons/fa6";


const KelasPembayaran = () => {

    const handleInputClick = (e) => {
        e.stopPropagation();
      };
   

  return (
    <div>
        {/* KEMBALI DAN NOTIFIKASI BATAS PEMBAYARAN */}
        <div className='md:px-[100px] px-5 py-6 shadow-md'>
            {/* LINK KEMBALI */}
            <Link href='#' className="flex gap-5">
                <FaArrowLeft />
                <h1 className='font-bold'>Kembali</h1>
            </Link>

            <div className='bg-secret-red mx-auto px-5 py-3 rounded-xl md:w-[800px] mt-2'>
                <h1 className='text-center text-white font-bold md:text-[16px] text-[12px]'>Selesaikan Pembayaran sampai 10 Maret 2023 12:00</h1>
            </div>
        </div>

        <div className='flex md:flex-row flex-col md:px-[100px] px-5 gap-10 h-[600px]'>
            {/* KIRI */}
        {/* kotak Pembayaran */}
        <div className='md:w-[600px] '>
            {/* BANK TRANSFER */}
            <Menu as="div" className=" inline-block text-left w-full mb-10 mt-10">
            <div>
                <Menu.Button className="inline-flex w-full justify-between gap-x-1.5 rounded-md bg-[#3c3c3c] px-3 py-2 text-sm font-semibold text-white shadow-sm "
               >
                Bank Transfer
                <FaChevronDown color='white' id='chev' />
                </Menu.Button>
            </div>

            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
            <Menu.Items className=" w-full right-0 z-10 mt-2 h-[400px] origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="py-1">
                <Menu.Item>
                <Link href='#'>Keterangan Bank</Link>
                </Menu.Item>
                
            </div>
            </Menu.Items>
            </Transition>
            </Menu>
            {/* CREDIT CARD */}
            <Menu as="div" className=" inline-block text-left w-full">
            <div>
                <Menu.Button className="inline-flex w-full justify-between gap-x-1.5 rounded-md bg-secret-pink px-3 py-2 text-sm font-semibold text-white shadow-sm " 
                
                >
                Credit Card
                <FaChevronDown color='white' />
              
                </Menu.Button>
            </div>

            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
            <Menu.Items className="flex w-full z-10 mt-2 h-[400px]  rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="py-1">
                <Menu.Item>
                    <div className='p-10  '>
                        {/* PAYMENT OPTIONS */}
                        <div className='flex gap-5 place-content-center  place-items-center'>
                             <Link href='#'>
                                <Image
                                    src='/icon/mastercard logo.svg'
                                    width={50}
                                    height={50}
                                    alt='mastercard'/>
                             </Link>
                             <Link href='#'>
                                <Image
                                    src='/icon/visa logo.svg'
                                    width={50}
                                    height={50}
                                    alt='visa'/>
                             </Link>
                             <Link href='#'>
                                <Image
                                    src='/icon/amex logo.svg'
                                    width={50}
                                    height={50}
                                    alt='amex'/>
                             </Link>
                             <Link href='#'>
                                <Image
                                    src='/icon/paypal logo.svg'
                                    width={50}
                                    height={50}
                                    alt='paypal'/>
                             </Link>
                        </div>
                        {/* CARD DETAIL */}
                        <form action="" className='md:w-[400px]'>
                            <div className='mt-3'>
                                <h3 className='font-bold'>Card Number</h3>
                                <input 
                                type="text" 
                                className='border-b-2 border-x-0 border-t-0 active:border-none focus:border-none border-black w-full' 
                                onClick={handleInputClick}
                                placeholder='4480 0000 0000 0000'/>
                            </div>

                            <div className='mt-3'>
                                <h3 className='font-bold'>Card Holder Name</h3>
                                <input 
                                type="text" 
                                className='border-b-2 border-x-0 border-t-0 active:border-none focus:border-none border-black w-full' 
                                onClick={handleInputClick}
                                placeholder='John Doe'/>
                            </div>

                            <div className='flex gap-5 mt-3'>
                                <div>
                                    <h3 className='font-bold'>CVV</h3>
                                    <input 
                                    type="text" 
                                    className='border-b-2 border-x-0 border-t-0 active:border-none focus:border-none border-black md:w-[250px] w-[140px]' 
                                    onClick={handleInputClick}
                                    placeholder='000'/>
                                </div>

                                <div>
                                    <h3 className='font-bold'>Expiry Date</h3>
                                    <input 
                                    type="text" 
                                    className='border-b-2 border-x-0 border-t-0 active:border-none focus:border-none border-black md:w-[132px] w-[100px]' 
                                    onClick={handleInputClick}
                                    placeholder='07/24'/>
                                </div>
                            </div>
                        </form>
                    </div>
                </Menu.Item>
                
            </div>
            </Menu.Items>
            </Transition>
            </Menu>
        </div>
        {/* KANAN */}
        {/* PEMBAYARAN KELAS */}
        <div className='md:w-[400px] w-[300px] rounded-[16px] shadow-xl p-5 flex-grow-0 flex-shrink-0 h-[372px] '>
            <h1 className='font-bold'>Pembayaran Kelas</h1>
            {/* KOTAK COURSE */}
            <div className="md:w-[323px] h-[150px] shadow-md rounded-[15px] mx-auto mt-3 bg-secret-background">
                <div className=''>
                <Image
                    src='/pembayaranKelas.svg'
                    height={60}
                    width={323}
                />
                {/* TEXT KONTEN */}
                    <div className='p-2'>
                        <h3 className='font-semibold md:text-[14px]  text-secret-pink'>UI/UX Design</h3>
                        <h3 className='font-semibold md:text-[12px] text-[11px]'>Intro to Basic of User Interaction Design</h3>
                        <p className='md:text-[10px] text-[8px]'>By Simon Doe</p>
                    </div>
                </div>
                <div className='flex mt-5 justify-between'>
                {/* HARGA */}
                <div className='flex flex-col gap-2'>
                    <h4 className='font-bold md:text-[16px]'>Harga</h4>
                    <p className='md:text-[14px] text-[12px]'>Rp 349.000</p>
                </div>
                {/* PPN */}
                <div className='flex flex-col gap-2'>
                    <h4 className='font-bold'>PPN 11%</h4>
                    <p className='md:text-[14px] text-[12px]'>Rp 38.390</p>
                </div>
                {/* TOTAL BAYAR */}
                <div className='flex flex-col gap-2'>
                    <h4 className='font-bold'>Total Bayar</h4>
                    <p className='font-bold text-secret-pink md:text-[14px] text-[12px]'>Rp 387.390</p>
                </div>
            </div>
            {/* TOMBOL BAYAR */}
            <button className=' justify-between flex w-full bg-secret-pink px-5 py-3 rounded-[15px] mt-5 '>
                <h2 className='font-bold text-white md:text-[16px] text-[12px] '>Bayar dan Ikuti Kelas Selamanya</h2>
                <Image
                    src='/icon/carbon_next-filled.svg'
                    height={20}
                    width={20}
                    alt='next'
                    className='md:w-[20px] md:h-[20px] '/>
            </button>
            </div>
            
        </div>

        </div>
    </div>
  )
}

export default KelasPembayaran