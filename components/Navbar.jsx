'use client';

import {useState} from 'react';
import Link from 'next/link';

import { BiBrain, BiSearchAlt } from 'react-icons/bi';
import { FiBell, FiList, FiUser } from 'react-icons/fi';
import { CiLogin } from "react-icons/ci"


const Navbar = () => {
	const [keyword, setKeyword] = useState('');
  const [isLogin, setIsLogin] = useState(false);

	const handleSearch = (e) => {
		e.preventDefault();
		console.log(keyword);
	};

	return (
		<div className='bg-secret-background sticky top-0 z-20 shadow-2xl black100/40'>
			<nav className='container flex items-center justify-between h-20 px-2 mx-auto'>
				<div className='flex items-center space-x-4'>
					<Link href='/' className='flex items-center space-x-2'>
						<BiBrain className='text-black' size={25} />
						<div className='flex'>
						<h1 className='text-2xl text-black flex items-center font-bold px-1'>Skill</h1>
						<h1 className='text-2xl text-black font-bold'>HUB</h1>
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
            isLogin ?
            <>
            <li>
						<Link href='/' className='flex items-center px-4 py-1 space-x-2 rounded-lg bg-darkblue-300'>
							<FiList color='white' size={16} />
							<p className='font-semibold text-white'>Kelas</p>
						</Link>
					</li>
					<li>
						<Link href='#'>
							<FiBell color='white' size={25} />
						</Link>
					</li>
					<li>
						<Link href='#'>
							<FiUser color='white' size={25} />
						</Link>
					</li>
          </>
          :
          <li>
            <Link href='/login'>
              <button className='px-4 py-2 font-semibold text-white rounded-lg bg-secret-orange flex gap-4 bg-secret-darkblue'>
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
