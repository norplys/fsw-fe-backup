'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link';

import { BiSearchAlt } from "react-icons/bi";
import { FiUser } from "react-icons/fi";
import { FiBell } from "react-icons/fi";

import { BiBrain } from 'react-icons/bi';


const NavbarIn = () => {
    
  return (
        <nav class="mx-auto block w-full max-w-screen-xl top-0 sticky z-20 bg-secret-background  py-2 px-4 text-white  lg:px-16 ">
        <div>
            <div class="container mx-auto flex items-center justify-between text-gray-900">
                <div className='flex gap-2 '>
					<Link href='/' className='flex items-center space-x-2'>
						<BiBrain className='text-white bg-secret-pink rounded-full text-5xl p-2' />
						<div className='flex'>
							<h1 className='text-2xl text-black flex items-center font-bold'>Skill</h1>
							<h1 className='text-2xl font-bold text-black'>HUB</h1>
						</div>
					</Link>
                    <div className='relative lg:flex leading-loose md:mb-3 mb-2 '>
                        <input 
                            type="text"
                            placeholder='Cari Kursus Terbaik....'
                            name='search'
                            className='w-[175px] lg:w-[320px] lg:h-[62px] h-[40px] px-5 py-3 rounded-xl mt-2 lg:mt-6 text-[8px] lg:text-[18px]'/> 

                        <button className='search absolute md:top-[65%] top-[60%] -translate-y-1/2 right-3 transform  p-2 rounded-xl' >
                            <BiSearchAlt color='black'/>
                        </button> 
                    </div> 
                </div>

            

            
            
            </div>
            
        </div>
    </nav>
  )
}

export default NavbarIn