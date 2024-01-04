'use client';

import {useState, useEffect} from 'react';
import Link from 'next/link';
import { BiBrain, BiSearchAlt } from 'react-icons/bi';
import { FiBell, FiList, FiUser } from 'react-icons/fi';
import { CiLogin } from "react-icons/ci"
import { useUsers } from '@/app/context/usersContext';
import { useRouter } from 'next/navigation';
import RespMenu from './RespMenu';
import { FiAlignJustify } from "react-icons/fi";
import { RxCross2 } from 'react-icons/rx';


const Navbar = () => {
	useEffect(() => {
		const token = localStorage.getItem('token');
		ifToken(token);
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	const { user, handleToken, removeUser } = useUsers();
	const [keyword, setKeyword] = useState('');
	const [showMenu, setShowMenu] = useState(false);
	const {push} = useRouter();

	const ifToken =  async (token) => {
		try{
		if(token && !user){
			await handleToken(token);
		}
	}
	catch(err){
		localStorage.removeItem('token');
	}
	}	

	const handleLogOut = () => {
		removeUser();
		push('/');
	};

	const onChange = (e) => {
		e.preventDefault();
		e.target.value === '' ? 
		push(`/courses`) : ""
		setKeyword(e.target.value)
	}

	const handleSearch = (e) => {
		e.preventDefault();
		push(`/courses?search=${keyword}`);
	};
	return (
		<div className="bg-secret-background sticky top-0 z-20 shadow-2xl black100/40">
		  <nav className="container flex gap-2  items-center justify-between h-50 md:h-20 py-2 mx-auto px-2">
			<div className="flex items-center space-x-4">
			  <Link href="/" className="flex items-center space-x-2">
				<BiBrain className="text-white bg-secret-pink rounded-full text-3xl md:text-5xl p-1 md:p-2" />
				<div className="flex">
				  <h1 className="md:text-2xl text-secret-text flex items-center font-bold">
					SkillHUB
				  </h1>
				</div>
			  </Link>
			  <form
				className="relative hidden shadow-2xl shadow-black-200/40 xl:block"
				onSubmit={handleSearch}
			  >
				<input
				  type="text"
				  value={keyword}
				  placeholder="Cari Kursus..."
				  onChange={onChange}
				  className="w-80 px-5 py-3 rounded-xl placeholder:text-sm text-black"
				/>
				<button className="absolute right-0 p-2 mr-2 transform -translate-y-1/2 top-1/2 rounded-xl search">
				  <BiSearchAlt className="text-black" />
				</button>
			  </form>
			</div>
	
			<ul className="items-center space-x-4 hidden lg:flex">
			  {user ? (
				<div className="flex flex-col md:flex-row gap-5">
				  <div className="flex gap-2">
					<span className="font-bold mr-0 md:mr-4 text-base">
					  HI, {user.name}
					</span>
					<Link
					  href="/my-courses"
					  className="flex items-center px-4 py-1 space-x-2 rounded-lg bg-secret-darkblue hover:scale-105 duration-300"
					>
					  <FiList className="text-white" size={16} />
					  <p className="font-semibold text-white">Kelas</p>
					</Link>
	
					<Link href="/profile/notification">
					  <FiBell className="text-secret-text hover:text-secret-text4" size={25} />
					</Link>
	
					<Link href="/profile">
					  <FiUser className="text-secret-text hover:text-secret-text4" size={25} />
					</Link>
	
					<button
					  className="text-center  px-4 py-1 space-x-2 text-white font-bold rounded-lg bg-secret-pink hover:scale-105 duration-300"
					  onClick={handleLogOut}
					>
					  Keluar
					</button>
				  </div>
				</div>
			  ) : (
				<li>
				  <Link href="/login">
					<button className="px-4 py-2 font-semibold text-white rounded-lg flex justify-center items-center gap-4 bg-secret-darkblue text-xs md:text-base">
					  <CiLogin className="text-white text-sm md:text-base" />
					  Masuk
					</button>
				  </Link>
				</li>
			  )}
			</ul>
			<button className="lg:hidden" onClick={() => setShowMenu(!showMenu)}>{showMenu ? <RxCross2 className="text-secret-darkblue text-2xl" /> : <FiAlignJustify className="text-secret-darkblue text-2xl" /> }</button>
			<RespMenu user={user} handleLogOut={handleLogOut} showMenu={showMenu} handleSearch={handleSearch} onChange={onChange} keyword={keyword} />
		  </nav>
		</div>
	  );
	};

export default Navbar;
