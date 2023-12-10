'use client';
import { useState } from 'react';
import { BiMenu, BiSearchAlt } from 'react-icons/bi';
import { IconButton } from '@/components/Admin/IconButton';

export const admin = {
	name: 'Admin',
};

export const AdminNavbar = ({ setOpen, open }) => {
	const [keyword, setKeyword] = useState('');

	const handleSearch = (e) => {
		e.preventDefault();
		console.log(keyword);
	};

	return (
		<nav className='sticky top-0 left-0 h-20 bg-secret-background'>
			<div className='container flex items-center justify-between h-full px-2 mx-auto xl:px-10'>
				<h2 className='text-lg font-bold text-secret-darkblue'>Hi, {admin?.name}</h2>
				<div className='flex items-center w-full max-w-[300px] space-x-4'>
					<form className='relative w-full' onSubmit={handleSearch}>
						<input
							type='text'
							value={keyword}
							placeholder='Cari Kursus Terbaik....'
							onChange={(e) => setKeyword(e.target.value)}
							className='w-full px-5 py-3 text-sm border border-gray-300 rounded-xl focus:outline-none form-input focus:ring-secret-darkblue focus:border-transparent focus:ring-opacity-30 focus:ring'
						/>
						<div className='absolute transform -translate-y-1/2 right-2 top-1/2'>
							<IconButton icon={BiSearchAlt} variants='primary' />
						</div>
					</form>
					<button className='p-2 rounded-xl bg-secret-darkblue xl:hidden' onClick={() => setOpen(!open)}>
						<BiMenu className='text-white' />
					</button>
				</div>
			</div>
		</nav>
	);
};
