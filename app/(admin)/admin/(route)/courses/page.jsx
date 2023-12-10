'use client';

import {useState} from 'react';
import { BiFilter, BiPlus, BiSearch } from 'react-icons/bi';

import { CourseForm } from '@/components/Admin/Course/CourseForm';


const courses = [
	{
		id: 1,
		kode: 'KLS-001',
		kategori: 'UI/UX Design',
		nama: 'Belajar UI/UX Design dengan Figma',
		tipe: 'Gratis',
		level: 'Beginner',
		harga: 0,
	},
	{
		id: 2,
		kode: 'KLS-002',
		kategori: 'Data Science',
		nama: 'Data Cleaning untuk Pemula',
		tipe: 'Premium',
		level: 'Beginner',
		harga: 100000,
	},
	{
		id: 3,
		kode: 'KLS-003',
		kategori: 'Data Science',
		nama: 'Data Visualization untuk Pemula',
		tipe: 'Premium',
		level: 'Beginner',
		harga: 100000,
	},
	{
		id: 4,
		kode: 'KLS-004',
		kategori: 'Data Science',
		nama: 'Data Analysis untuk Pemula',
		tipe: 'Premium',
		level: 'Beginner',
		harga: 100000,
	},
	{
		id: 5,
		kode: 'KLS-005',
		kategori: 'Data Science',
		nama: 'Machine Learning untuk Pemula',
		tipe: 'Premium',
		level: 'Beginner',
		harga: 100000,
	},
	{
		id: 6,
		kode: 'KLS-006',
		kategori: 'Data Science',
		nama: 'Natural Language Processing untuk Pemula',
		tipe: 'Premium',
		level: 'Beginner',
		harga: 100000,
	},
	{
		id: 7,
		kode: 'KLS-007',
		kategori: 'Data Science',
		nama: 'Deep Learning untuk Pemula',
		tipe: 'Premium',
		level: 'Beginner',
		harga: 100000,
	},
	{
		id: 8,
		kode: 'KLS-008',
		kategori: 'Data Science',
		nama: 'Time Series untuk Pemula',
		tipe: 'Premium',
		level: 'Beginner',
		harga: 100000,
	},
	{
		id: 9,
		kode: 'KLS-009',
		kategori: 'Data Science',
		nama: 'Recommender System untuk Pemula',
		tipe: 'Premium',
		level: 'Beginner',
		harga: 100000,
	},
];

const currency = (number) => {
	return new Intl.NumberFormat('id-ID', {
		style: 'currency',
		currency: 'IDR',
	}).format(number);
};

const CoursesPage = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<>
			<div className='flex items-center justify-between mb-5'>
				<h1 className='text-xl font-bold text-black'>Kelola Kelas</h1>
				<div className='flex items-center space-x-3'>
					<button
						className='flex items-center px-4 py-2 space-x-2 text-sm font-semibold text-white rounded-full bg-secret-darkblue'
						onClick={() => setIsOpen(true)}>
						<BiPlus className='w-5 h-5 mr-2' />
						Tambah Kelas
					</button>
					<button className='flex items-center px-4 py-2 space-x-2 text-sm font-semibold border rounded-full text-secret-darkblue border-secret-darkblue'>
						<BiFilter className='w-5 h-5 mr-2' />
						Filter
					</button>
					<button className='relative w-10 h-10 rounded-full hover:bg-secret-darkblue group'>
						<BiSearch className='absolute w-5 h-5 transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 text-secret-darkblue group-hover:text-white' />
					</button>
				</div>
			</div>

			<div className='w-full mb-5 overflow-x-auto'>
				<table className='w-full whitespace-nowrap'>
					<thead>
						<tr className='w-full h-10 text-sm font-semibold leading-none tracking-wide text-gray-800 bg-secret-background'>
							<th className='w-1/7 min-w-[5rem] text-start px-5'>Kode Kelas</th>
							<th className='w-1/7 min-w-[7rem] text-start px-5'>Kategori</th>
							<th className='w-1/7 min-w-[12rem] text-start px-5'>Nama Kelas</th>
							<th className='w-1/7 min-w-[5rem] text-start px-5'>Tipe</th>
							<th className='w-1/7 min-w-[5rem] text-start px-5'>Level</th>
							<th className='w-1/7 min-w-[7rem] text-start px-5'>Harga</th>
							<th className='w-1/7 min-w-[12rem] text-start px-5'>Action</th>
						</tr>
					</thead>
					<tbody className='w-full'>
						{courses?.map((course) => (
							<tr
								key={course.id}
								className='w-full h-16 text-sm leading-none text-gray-800 bg-white border-t border-b border-gray-100 hover:bg-gray-100'>
								<td className='px-5 text-start'>
									<span className='font-semibold'>{course.kode}</span>
								</td>
								<td className='px-5 text-start'>{course.kategori}</td>
								<td className='px-5 text-start'>
									<span className='font-semibold'>{course.nama}</span>
								</td>
								<td className='px-5 text-start'>
									<span
										className={
											`font-bold uppercase ${course.tipe === 'Gratis' ? 'text-secret-darkblue' : 'text-secret-pink'}`
										}>
										{course.tipe}
									</span>
								</td>
								<td className='px-5 text-start'>{course.level}</td>
								<td className='px-5 text-start'>{currency(course.harga)}</td>
								<td className='px-5 text-start'>
									<div className='inline-flex items-center justify-center space-x-2'>
										<button className='px-4 py-1 text-sm font-semibold text-white rounded-full bg-secret-darkblue'>
											Ubah
										</button>
										<button className='px-4 py-1 text-sm font-semibold text-white rounded-full bg-secret-pink'>
											Hapus
										</button>
									</div>
								</td>
							</tr>
						))}
						{courses?.length === 0 && (
							<tr className='w-full h-16 text-sm leading-none text-gray-800 bg-white border-t border-b border-gray-100'>
								<td colSpan={7} className='px-5 text-center'>
									Belum ada data
								</td>
							</tr>
						)}
					</tbody>
				</table>
			</div>

			<CourseForm isOpen={isOpen} setIsOpen={setIsOpen} />
		</>
	);
};

export default CoursesPage;
