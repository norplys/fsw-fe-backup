'use client';

import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { clsx } from 'clsx';
import { BiPlay, BiShield, BiSolidChat, BiSolidStar, BiTime, BiX } from 'react-icons/bi';
import { FiArrowLeft, FiArrowRight, FiArrowRightCircle, FiSmartphone } from 'react-icons/fi';
import { Dialog, Transition } from '@headlessui/react';

const detail = {
	category: 'UI/UX Design',
	title: 'Intro To Basic Of User Interaction Design',
	instructor: 'Simon Doe',
	level: 'Beginner',
	completion: 50,
	rating: 5.0,
	time: 45,
	price: 349000,
	chapters: [
		{
			id: 100,
			title: 'Pendahuluan',
			time: 60,
			section: [
				{
					id: 101,
					title: 'Tujuan Mengikuti Kelas Design System',
					complete: true,
				},
				{
					id: 102,
					title: 'Pengenalan Design System',
					complete: true,
				},
				{
					id: 103,
					title: 'Contoh Dalam Membangun Design System',
					complete: false,
				},
			],
		},
		{
			id: 200,
			title: 'Memulai Design',
			time: 120,
			section: [
				{
					id: 201,
					title: 'Color Palette',
					complete: false,
				},
				{
					id: 202,
					title: 'Typography, Layout dan Crid',
					complete: false,
				},
				{
					id: 203,
					title: 'Membuat Components',
					complete: false,
				},
				{
					id: 204,
					title: 'Membuat Assets',
					comlete: false,
				},
			],
		},
	],
	about: 'Design system adalah kumpulan komponen design, code, ataupun dokumentasi yang dapat digunakan sebagai panduan utama yang memunginkan designer serta developer memiliki lebih banyak kontrol atas berbagai platform. Dengan hadirnya design system, dapat menjaga konsistensi tampilan user interface dan meningkatkan user experience menjadi lebih baik. Disisi bisnis, design system sangat berguna dalam menghemat waktu dan biaya ketika mengembangkan suatu produk. Bersama mentor XXX, kita akan mempelajari design system dari mulai manfaat, alur kerja pembuatannya, tools yang digunakan, hingga pada akhirnya, kita akan membuat MVP dari design system. Selain itu, mentor juga akan menjelaskan berbagai resource yang dibutuhkan untuk mencari inspirasi mengenai design system. Kelas ini sesuai untuk Anda yang ingin memahami apa itu design system. Tidak hanya ditujukan untuk IJI/UX Designer ataupun Developer, kelas ini sangat sesuai untuk stakeholder lain agar dapat memudahkan tim dalam bekerja sama. Yuk segera daftar dan kami tunggu di kelas ya!',
	targets: [
		'Anda yang ingin memahami poin penting design system',
		'Anda yang ingin membantu perusahaan lebih optimal dalam membuat design produk',
		'Anda yang ingin latihan membangun design system',
		'Anda yang ingin latihan membangun design system',
	],
};

const rupiah = (number) => {
	return new Intl.NumberFormat('id-ID', {
		style: 'currency',
		currency: 'IDR',
	}).format(number);
};

const DetailKelas = () => {
	const { id } = useParams();
	const [isOpen, setIsOpen] = React.useState(false);

	return (
		<>
			<Transition appear show={isOpen} as={React.Fragment}>
				<Dialog as='div' className='relative z-10' onClose={() => setIsOpen(false)}>
					<Transition.Child
						as={React.Fragment}
						enter='ease-out duration-300'
						enterFrom='opacity-0'
						enterTo='opacity-100'
						leave='ease-in duration-200'
						leaveFrom='opacity-100'
						leaveTo='opacity-0'>
						<div className='fixed inset-0 bg-black/80'></div>
					</Transition.Child>

					<div className='fixed inset-0 overflow-y-auto'>
						<div className='flex items-center justify-center min-h-full p-4 text-center'>
							<Transition.Child
								as={React.Fragment}
								enter='ease-out duration-300'
								enterFrom='opacity-0 scale-95'
								enterTo='opacity-100 scale-100'
								leave='ease-in duration-200'
								leaveFrom='opacity-100 scale-100'
								leaveTo='opacity-0 scale-95'>
								<Dialog.Panel className='relative w-full max-w-lg p-6 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl'>
									<button
										className='absolute top-0 right-0 p-2 m-4 transition-all duration-200 ease-in-out bg-transparent rounded-full hover:bg-darkblue-500 group'
										onClick={() => setIsOpen(false)}>
										<BiX
											className='transition-all duration-200 ease-in-out text-darkblue-500 group-hover:text-white'
											size={25}
										/>
									</button>

									<Dialog.Title as='h3' className='mb-5 text-xl font-bold text-center'>
										Selangkah lagi menuju
										<br />
										<span className='text-darkblue-500'>Kelas Premium</span>
									</Dialog.Title>

									<div className='mb-5 overflow-hidden border border-darkblue-500 rounded-2xl'>
										<div className='h-[100px] relative overflow-hidden'>
											<Image
												src='/static/image.jpg'
												width={500}
												height={500}
												layout='responsive'
												alt='Video Preview'
												className='object-cover object-center'
											/>
										</div>

										<div className='p-5 text-sm'>
											<div className='flex flex-col mb-3'>
												<div className='flex items-center justify-between '>
													<h1 className='font-bold text-darkblue-500'>{detail.category}</h1>
													<div className='flex items-center space-x-1'>
														<BiSolidStar className='text-yellow-400' size={16} />
														<span className='font-bold'>{detail.rating.toFixed(1)}</span>
													</div>
												</div>
												<h2 className='font-bold'>{detail.title}</h2>
												<p className='text-gray-500'>by {detail.instructor}</p>
											</div>

											<div className='flex items-center justify-between mb-3'>
												<div className='flex items-center space-x-2 font-semibold'>
													<BiShield className='text-green-400' size={20} />
													<span className='text-black'>{detail.level}</span>
												</div>

												<div className='flex items-center space-x-2 font-semibold'>
													<FiSmartphone className='text-green-400' size={20} />
													<span className='text-black'>{detail.chapters.length} Modul</span>
												</div>

												<div className='flex items-center space-x-2 font-semibold'>
													<BiTime className='text-green-400' size={20} />
													<span className='text-black'>{detail.time} Menit</span>
												</div>
											</div>

											<button className='px-3 py-1 text-xs font-bold text-white rounded-full bg-darkblue-300'>
												Beli {rupiah(detail.price)}
											</button>
										</div>
									</div>

									<div className='flex items-center justify-center'>
										<button
											type='button'
											className='flex items-center px-6 py-2 space-x-2 font-bold text-white rounded-full bg-darkblue-500'
											onClick={() => setIsOpen(false)}>
											<span>Beli Sekarang</span>
											<FiArrowRight className='text-white' size={20} />
										</button>
									</div>
								</Dialog.Panel>
							</Transition.Child>
						</div>
					</div>
				</Dialog>
			</Transition>

			<div className='py-10 bg-check-fill xl:h-[300px]'>
				<div className='container grid gap-10 px-2 mx-auto xl:grid-cols-5'>
					<div className='xl:col-span-3'>
						<Link href='/' className='flex items-center mb-4 space-x-2'>
							<FiArrowLeft color='black' size={16} />
							<span className='font-bold text-black'>Kelas Lainnya</span>
						</Link>

						<div className='flex flex-col mb-3'>
							<div className='flex items-center justify-between '>
								<h1 className='text-2xl font-bold text-darkblue-500'>{detail.category}</h1>
								<div className='flex items-center space-x-1'>
									<BiSolidStar className='text-yellow-400' size={16} />
									<span className='font-bold text-black'>{detail.rating.toFixed(1)}</span>
								</div>
							</div>
							<h2 className='text-xl font-bold text-black'>{detail.title}</h2>
							<p className='text-sm text-gray-500 '>by {detail.instructor}</p>
						</div>

						<div className='flex items-center justify-between mb-4 max-w-[400px]'>
							<div className='flex items-center space-x-2 font-semibold'>
								<BiShield className='text-green-400' size={20} />
								<span className='text-black'>{detail.level}</span>
							</div>

							<div className='flex items-center space-x-2 font-semibold'>
								<FiSmartphone className='text-green-400' size={20} />
								<span className='text-black'>{detail.chapters.length} Modul</span>
							</div>

							<div className='flex items-center space-x-2 font-semibold'>
								<BiTime className='text-green-400' size={20} />
								<span className='text-black'>{detail.time} Menit</span>
							</div>
						</div>

						<button
							className='flex items-center justify-center px-6 py-2 space-x-2 bg-green-400 rounded-full drop-shadow'>
							<span className='font-bold text-white'>Join Group Telegram</span>
							<BiSolidChat className='text-white' size={20} />
						</button>
					</div>

					<div className='xl:col-span-2'>
						<div className='p-8 bg-white drop-shadow rounded-2xl'>
							<div className='flex items-center justify-between mb-4'>
								<h1 className='text-xl font-bold'>Materi Belajar</h1>
								<div className='relative py-2 rounded-full bg-zinc-300 w-[200px] overflow-hidden'>
									<div
										style={{
											width: `${detail.completion * 2}px`,
										}}
										className='absolute top-0 left-0 py-2 rounded-full bg-darkblue-500'></div>
									<div className='absolute text-xs text-white transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'>
										{detail.completion}% complete
									</div>
								</div>
							</div>

							{detail?.chapters.map((chapter, index) => (
								<div key={chapter.id}>
									<div className='flex items-center justify-between mb-2 text-sm font-bold'>
										<h4 className='text-darkblue-500'>
											Chapter {index + 1} - {chapter.title}
										</h4>
										<span className='text-blue-500'>{chapter.time} Menit</span>
									</div>

									<div className='mb-4 divide-y-2 divide-zinc-100'>
										{chapter?.section.map((section, index) => (
											<div className='flex items-center justify-between py-3' key={section.id}>
												<div className='flex items-center w-4/5 space-x-2'>
													<div className='relative flex-shrink-0 w-10 h-10 rounded-full bg-check-fill'>
														<span className='absolute text-xs text-black font-bold transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'>
															{index + 1}
														</span>
													</div>
													<p className='text-sm text-zinc-500'>{section.title}</p>
												</div>
												<div
													className={clsx(
														'relative flex-shrink-0 w-8 h-8 rounded-full',
														section.complete ? 'bg-green-500' : 'bg-darkblue-500'
													)}>
													<div className='absolute text-xs font-bold transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'>
														<BiPlay className='text-white' size={12} />
													</div>
												</div>
											</div>
										))}
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>

			<div className='py-10'>
				<div className='container grid gap-10 px-2 mx-auto xl:grid-cols-5'>
					<div className='xl:col-span-3'>
						<div className='relative mb-4 bg-zinc-900 rounded-2xl aspect-video'>
							<div className='absolute inset-0 flex items-center justify-center'>
								<button className='flex items-center justify-center w-16 h-16 rounded-full shadow-md bg-darkblue-500'>
									<BiPlay className='text-white' size={30} />
								</button>
							</div>
						</div>

						<h2 className='mb-3 text-xl font-bold'>Tentang Kelas</h2>
						<p className='mb-5 leading-relaxed text-gray-500'>{detail.about}</p>

						<h2 className='mb-3 text-xl font-bold'>Kelas Ini Ditujukan Untuk</h2>
						<ol className='mb-5 leading-relaxed text-gray-500 list-decimal list-inside'>
							{detail.targets.map((target, index) => (
								<li key={index}>{target}</li>
							))}
						</ol>
					</div>
				</div>
			</div>
		</>
	);
};

export default DetailKelas;
