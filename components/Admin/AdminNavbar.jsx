'use client';
import { BiMenu, BiSearchAlt } from 'react-icons/bi';
import { IconButton } from '@/components/Admin/IconButton';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';

export const AdminNavbar = ({ setOpen, open }) => {
	const { register, handleSubmit } = useForm();
	const { push } = useRouter();

	const handleSearch = (data) => {
		push(`/admin/courses?search=${data.keyword}`);
	};

	const onChange = (e) => {
		e.preventDefault();
		e.target.value === '' ? push(`/admin/courses`) : '';
	};

	return (
		<nav className='sticky top-0 left-0 h-20 bg-secret-background z-10'>
			<div className='container flex items-center justify-between h-full px-2 mx-auto xl:px-10'>
				<h2 className='text-xs md:text-sm lg:text-lg font-bold text-secret-darkblue mx-5'>Hi, Admin</h2>
				<div className='flex items-center w-full max-w-[300px] space-x-4'>
					<form className='relative w-full' onSubmit={handleSubmit(handleSearch)}>
						<input
							{
								...register('keyword', {
									onChange: (e) => onChange(e),
								})
							}
							type='text'
							placeholder='Cari Kursus...'
							className='w-full px-5 py-3 text-xs md:text-sm border border-gray-300 rounded-xl focus:outline-none form-input focus:ring-secret-darkblue focus:border-transparent focus:ring-opacity-30 focus:ring'
						/>
						<button className='absolute transform -translate-y-1/2 right-2 top-1/2' type='submit'>
							<IconButton icon={BiSearchAlt} variants='primary' />
						</button>
					</form>
					<button className='p-2 rounded-xl bg-secret-darkblue flex lg:hidden' onClick={() => setOpen(!open)}>
						<BiMenu className='text-white' />
					</button>
				</div>
			</div>
		</nav>
	);
};
