"use client";

import React from "react";
import Image from "next/image";
import { useState } from "react";

import { BiSearchAlt } from "react-icons/bi";

const NavbarBeranda = () => {
  // search useState
  const [Search, setSearch] = useState("");
  return (
    <nav className="block w-full sticky top-0 bg-DARKBLUE05  py-2 px-4 text-white z-10">
        <div className="container mx-auto flex items-center justify-between text-gray-900 max-w-6xl">
          <div className="flex items-center gap-2">
            <a href="#" className="mr-4  cursor-pointer p-[-20px]">
              <Image
                src="Belajar_white 3.svg"
                className="relative top-0"
                alt="logo"
                width={100}
                height={100}
              />
            </a>
            <div className="relative flex leading-loose">
              <input
                type="text"
                placeholder="Cari Kursus Terbaik...."
                name="search"
                className="px-5 py-2 rounded-xl"
                value={Search}
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
              />

              <button className="search absolute top-1/2 -translate-y-1/2 right-3 transform bg-DARKBLUE05 p-2 rounded-xl">
                <BiSearchAlt color="white" />
              </button>
            </div>
          </div>

          <ul className="hidden items-center gap-6 lg:flex">
            <li className="block p-1 ">
              <a className="flex items-center gap-1" href="#">
                <Image src="icon/fi_log-in.svg" width={20} height={20} alt="login" />
                <p className="text-white">Masuk</p>
              </a>
            </li>
          </ul>
        </div>
    </nav>
  );
};

export default NavbarBeranda;
