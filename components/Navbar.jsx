'use client';

import {useState, useEffect} from 'react';
import Link from 'next/link';

import { BiBrain, BiSearchAlt } from 'react-icons/bi';
import { FiBell, FiList, FiUser } from 'react-icons/fi';
import { CiLogin } from "react-icons/ci"
import { useUsers } from '@/app/context/usersContext';


const Navbar = () => {
	useEffect(() => {
		const token = localStorage.getItem('token');
		if(token && !user){
			setToken(token);
			handleToken(token);
		}else if(token){
			setToken(token);
		}
	}, []);
	const { user, handleToken, removeUser } = useUsers();
	const [token, setToken] = useState("");
	const [keyword, setKeyword] = useState('');

	const handleLogOut = () => {
		setToken("");
		removeUser();
	};

	const handleSearch = (e) => {
		e.preventDefault();
		console.log(keyword);
	};
	return (
		<div className='bg-secret-background sticky top-0 z-20 shadow-2xl black100/40'>
			<nav className='container flex items-center justify-between h-20 px-2 mx-auto'>
				<div className='flex items-center space-x-4'>
					<Link href='/' className='flex items-center space-x-2'>
						<BiBrain className='text-white bg-secret-pink rounded-full text-5xl p-2' />
						<div className='flex'>
						<h1 className='text-2xl text-secret-text flex items-center font-bold'>Skill</h1>
						<h1 className='text-2xl font-bold text-secret-text'>HUB</h1>
						</div>
					</Link>
					<form className='relative hidden shadow-2xl shadow-black-200/40 xl:block' onSubmit={handleSearch}>
						<input
							type='text'
							value={keyword}
							placeholder='Cari Kursus Terbaik....'
							onChange={(e) => setKeyword(e.target.value)}
							className='w-80 px-5 py-3 rounded-xl placeholder:text-sm text-black'
						/>
						<button className='absolute right-0 p-2 mr-2 transform -translate-y-1/2 top-1/2 rounded-xl search'>
							<BiSearchAlt className='text-black' />
						</button>
					</form>
				</div>

				<ul className='flex items-center space-x-4'>
					{
            user ?
            <>

						<span className='font-bold mr-4 text-base'>HI, {user.name}</span>
						<Link href='/my-courses' className='flex items-center px-4 py-1 space-x-2 rounded-lg bg-secret-darkblue'>
							<FiList className='text-white' size={16} />
							<p className='font-semibold text-white'>Kelas</p>
						</Link>
					
					
						<Link href='#'>
							<FiBell className='text-secret-text' size={25} />
						</Link>
					
					
						<Link href='#'>
							<FiUser className='text-secret-text' size={25} />
						</Link>
				
					<button className='text-center  px-4 py-1 space-x-2 text-white font-bold rounded-lg bg-secret-pink' onClick={handleLogOut}>
						LogOut
					</button>
          </>
          :
          <li>
            <Link href='/login'>
              <button className='px-4 py-2 font-semibold text-white rounded-lg flex gap-4 bg-secret-darkblue'>
              <CiLogin className='text-white' size={25} />
                Masuk
              </button>
            </Link>
          </li>
          }
				</ul>
			</nav>
		</div>
	);
};

export default Navbar;
