'use client';

import * as React from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { BiPlay, BiShield, BiSolidChat, BiSolidStar, BiTime, BiX } from 'react-icons/bi';
import { FiArrowLeft, FiArrowRight, FiSmartphone } from 'react-icons/fi';
import { Dialog, Transition } from '@headlessui/react';
import { useClassDetails } from '@/app/utils/hooks/useClassDetails';
import Chapter from '@/components/ClassDetail/Chapter';
import Image from 'next/image';

const mockArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const DetailKelas = () => {
	const { id } = useParams();
	const [isOpen, setIsOpen] = React.useState(true);
	const { data, isLoading, error } = useClassDetails(id);
	console.log(data);

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
				

				{
					isLoading ? <div className='flex items-center justify-center h-screen text-white'>Loading...</div> :


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
												src='/orangKetawa.svg'
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
													<h1 className='font-bold text-darkblue-500'>Mock Category</h1>
													<div className='flex items-center space-x-1'>
														<BiSolidStar className='text-yellow-400' size={16} />
														<span className='font-bold'>{data.rating}</span>
													</div>
												</div>
												<h2 className='font-bold'>{data.name}</h2>
												<p className='text-gray-500'>by {data.author}</p>
											</div>

											<div className='flex items-center justify-between mb-3'>
												<div className='flex items-center space-x-2 font-semibold'>
													<BiShield className='text-green-400' size={20} />
													<span className='text-black'>{data.level}</span>
												</div>

												<div className='flex items-center space-x-2 font-semibold'>
													<FiSmartphone className='text-green-400' size={20} />
													<span className='text-black'>{data.totalModule} Modul</span>
												</div>

												<div className='flex items-center space-x-2 font-semibold'>
													<BiTime className='text-green-400' size={20} />
													<span className='text-black'>{data.totalMinute} Menit</span>
												</div>
											</div>

											<button className='px-3 py-1 text-xs font-bold text-white rounded-full bg-darkblue-300'>
												Beli {data.price}
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
				}
				</Dialog>
			</Transition>



			{ 
			 isLoading ? <div className='flex items-center justify-center h-screen text-white'>Loading...</div> :
				error ? <div className='flex items-center justify-center h-screen text-white'>{error}</div> :
			
			<div className='py-10 bg-check-fill xl:h-[300px]'>
				<div className='container grid gap-10 px-2 mx-auto xl:grid-cols-5'>
					<div className='xl:col-span-3'>
						<Link href='/' className='flex items-center mb-4 space-x-2'>
							<FiArrowLeft color='black' size={16} />
							<span className='font-bold text-black'>Kelas Lainnya</span>
						</Link>

						<div className='flex flex-col mb-3'>
							<div className='flex items-center justify-between '>
								<h1 className='text-2xl font-bold text-darkblue-500'>Mock Category</h1>
								<div className='flex items-center space-x-1'>
									<BiSolidStar className='text-yellow-400' size={16} />
									<span className='font-bold text-black'>{data.rating}</span>
								</div>
							</div>
							<h2 className='text-xl font-bold text-black'>{data.name}</h2>
							<p className='text-sm text-gray-500 '>by {data.author}</p>
						</div>

						<div className='flex items-center justify-between mb-4 max-w-[400px]'>
							<div className='flex items-center space-x-2 font-semibold'>
								<BiShield className='text-green-400' size={20} />
								<span className='text-black'>{data.level}</span>
							</div>

							<div className='flex items-center space-x-2 font-semibold'>
								<FiSmartphone className='text-green-400' size={20} />
								<span className='text-black'>{data.totalModule} Modul</span>
							</div>

							<div className='flex items-center space-x-2 font-semibold'>
								<BiTime className='text-green-400' size={20} />
								<span className='text-black'>{data.totalMinute} Menit</span>
							</div>
						</div>

						<button
							className='flex items-center justify-center px-6 py-2 space-x-2 bg-green-400 rounded-full drop-shadow'>
							<span className='font-bold text-white'>Mock Telegram Link</span>
							<BiSolidChat className='text-white' size={20} />
						</button>
					</div>

					<div className='xl:col-span-2'>
						<div className='p-8 bg-white drop-shadow rounded-2xl'>
							<div className='flex items-center justify-between mb-4'>
								<h1 className='text-xl font-bold'>Materi Belajar</h1>
								<div className='relative py-2 rounded-full bg-zinc-300 w-[200px] overflow-hidden'>
									{/* progress bar here */}
									{/* <div
										style={{
											width: `${detail.completion * 2}px`,
										}}
										className='absolute top-0 left-0 py-2 rounded-full bg-darkblue-500'></div>
									<div className='absolute text-xs text-white transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'>
										{detail.completion}% complete
									</div> */}
								</div>
							</div>

							{data.courseModules.map((chapter, index) => (
								<Chapter key={index} name={chapter.name} time={chapter.estimation} modules={chapter.module} index={index} />
							))}
						</div>
					</div>
				</div>
			</div>
			}

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
						<p className='mb-5 leading-relaxed text-gray-500'>Mock About</p>

						<h2 className='mb-3 text-xl font-bold'>Kelas Ini Ditujukan Untuk</h2>
						<ol className='mb-5 leading-relaxed text-gray-500 list-decimal list-inside'>
							{mockArray.map((target, index) => (
								<li key={index}>Mock List</li>
							))}
						</ol>
					</div>
				</div>
			</div>
		</>
	);
};

export default DetailKelas;
