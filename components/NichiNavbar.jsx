'use client';

import * as React from 'react';
import Link from 'next/link';

import { BiBrain, BiSearchAlt } from 'react-icons/bi';
import { FiBell, FiList, FiUser } from 'react-icons/fi';

const Navbar = () => {
	const [keyword, setKeyword] = React.useState('');

	const handleSearch = (e) => {
		e.preventDefault();
		console.log(keyword);
	};

	return (
		<div className='bg-darkblue-500'>
			<nav className='container flex items-center justify-between h-20 px-2 mx-auto'>
				<div className='flex items-center space-x-4'>
					<Link href='/' className='flex items-center space-x-2'>
						<BiBrain color='white' size={25} />
						<h1 className='text-xl text-white'>Belajar</h1>
					</Link>
					<form className='relative hidden xl:block' onSubmit={handleSearch}>
						<input
							type='text'
							value={keyword}
							placeholder='Cari Kursus Terbaik....'
							onChange={(e) => setKeyword(e.target.value)}
							className='w-[500px] px-5 py-3 rounded-xl placeholder:text-sm'
						/>
						<button className='absolute right-0 p-2 mr-2 transform -translate-y-1/2 top-1/2 bg-darkblue-500 rounded-xl search'>
							<BiSearchAlt color='white' />
						</button>
					</form>
				</div>

				<ul className='flex items-center space-x-4'>
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
				</ul>
			</nav>
		</div>
	);
};

export default Navbar;
