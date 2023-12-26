'use client';

import {Fragment, useState, useEffect} from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import { Dialog, Transition } from '@headlessui/react';
import { BiX, BiSolidTrash } from 'react-icons/bi';
import { IconButton } from '@/components/Admin/IconButton';
import Module from './ChapterModule';
import Image from 'next/image';


export const CourseForm = ({ isOpen, setIsOpen }) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		control,
		watch,
	} = useForm({
		defaultValues: {
			nama: '',
			kategori: '',
			kode: '',
			tipe: '',
			level: '',
			harga: '',
			targetKelas: [' '],
			chapter: [{
				name : '',
				module : [{ title : '', video : ''}],
			}],
			deskripsi: '',
			image: '',
		},
	});
	const [image, setImage] = useState(null);
	const imageFile = watch('image');
	useEffect(() => {
		if(imageFile?.length === 0){
			setImage(null);
			return;
		}
		if (imageFile) {
			const newUrl = URL.createObjectURL([imageFile[0]]);
			if(newUrl !== image) {
				setImage(newUrl);
			}
		}
		return () => URL.revokeObjectURL(imageFile);

	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [imageFile]);
	
	

	const { fields, append, remove } = useFieldArray({
		name: 'targetKelas',
		control,
		rules : {
			required: 'Target Kelas harus diisi',
		}
	});

	const {fields: fields2, append: append2, remove: remove2} = useFieldArray({
		name : 'chapter',
		control,
		rules : {
			required: 'Chapter harus diisi',
		}
	});

	const removeImage = () => {
		setImage(null);
	}
	
	const onSubmit = (data) => console.log(data);

	return (
		<Transition appear show={isOpen} as={Fragment}>
			<Dialog as='div' className='relative z-30' onClose={() => setIsOpen(false)}>
				<Transition.Child
					as={Fragment}
					enter='ease-out duration-300'
					enterFrom='opacity-0'
					enterTo='opacity-100'
					leave='ease-in duration-200'
					leaveFrom='opacity-100'
					leaveTo='opacity-0'>
					<div className='fixed inset-0 bg-black/80 backdrop-blur-base' />
				</Transition.Child>

				<div className='fixed inset-0 overflow-y-auto'>
					<div className='flex items-center justify-center min-h-full p-4'>
						<Transition.Child
							as={Fragment}
							enter='ease-out duration-300'
							enterFrom='opacity-0 scale-95'
							enterTo='opacity-100 scale-100'
							leave='ease-in duration-200'
							leaveFrom='opacity-100 scale-100'
							leaveTo='opacity-0 scale-95'>
							<Dialog.Panel className='w-full max-w-screen-md p-5 xl:p-10 transition-all transform bg-white shadow-xl rounded-2xl max-h-[80vh] overflow-y-auto relative'>
								<Dialog.Title
									as='h3'
									className='mb-5 text-xl font-bold text-center text-secret-darkblue'>
									Tambah Kelas
								</Dialog.Title>

								<div className='absolute top-0 right-0 m-5'>
									<IconButton icon={BiX} variants='secondary' onClick={() => setIsOpen(false)} />
								</div>

								<form className='w-full max-w-lg mx-auto flex flex-col justify-center' onSubmit={handleSubmit(onSubmit)}>
									<div className='mb-4'>
										<label
											htmlFor='nama'
											className='block mb-2 text-base font-semibold text-gray-700 '>
											Nama Kelas
										</label>
										<input
											type='text'
											placeholder='Nama Kelas'
											className={
												`w-full px-4 py-2 text-base border border-gray-300 rounded-xl focus:outline-none bg-slate-50'
												${errors.nama ? 'border-red-500 ' : ''}`
											}
											{...register('nama', {
												required: 'Nama Kelas harus diisi',
												minLength: {
													value: 3,
													message: 'Nama Kelas minimal 3 karakter',
												},
												maxLength: {
													value: 50,
													message: 'Nama Kelas maksimal 50 karakter',
												},
											})}
										/>
										<span className='block mt-1 text-xs text-red-500' role='alert'>
											{errors.nama?.message}
										</span>
									</div>

									<div className='mb-4'>
										<label
											htmlFor='kategori'
											className='block mb-2 text-base font-semibold text-gray-700 '>
											Kategori
										</label>
										<select
											className={`
												w-full px-4 py-2 text-base border border-gray-300 rounded-xl focus:outline-none'
												${errors.kategori ? 'border-red-500 ': ''}`
											}
											{...register('kategori', {
												required: 'Kategori harus diisi',
											})}>
											<option value=''>Pilih Kategori</option>
											<option value='UI/UX Design'>UI/UX Design</option>
											<option value='Data Science'>Data Science</option>
											<option value='Digital Marketing'>Digital Marketing</option>
										</select>
										<span className='block mt-1 text-xs text-red-500' role='alert'>
											{errors.kategori?.message}
										</span>
									</div>

									<div className='mb-4'>
										<label
											htmlFor='kode'
											className='block mb-2 text-base font-semibold text-gray-700 '>
											Kode Kelas
										</label>
										<input
											type='text'
											placeholder='Kode'
											className={
												`w-full px-4 py-2 text-base border border-gray-300 rounded-xl focus:outline-none '
												${errors.kode ? 'border-red-500': ''}`
											}
											{...register('kode', {
												required: 'kode harus diisi',
											})}
										/>
										<span className='block mt-1 text-xs text-red-500' role='alert'>
											{errors.kode?.message}
										</span>
									</div>

									<div className='mb-4'>
										<label
											htmlFor='tipe'
											className='block mb-2 text-base font-semibold text-gray-700 '>
											Tipe
										</label>
										<select
											className={
												`w-full px-4 py-2 text-base border border-gray-300 rounded-xl focus:outline-none '
												${errors.tipe ? 'border-red-500' : ''}`
											}
											{...register('tipe', {
												required: 'Tipe harus diisi',
											})}>
											<option value=''>Pilih Tipe</option>
											<option value='Gratis'>Gratis</option>
											<option value='Premium'>Premium</option>
										</select>
										<span className='block mt-1 text-xs text-red-500' role='alert'>
											{errors.tipe?.message}
										</span>
									</div>

									<div className='mb-4'>
										<label
											htmlFor='level'
											className='block mb-2 text-base font-semibold text-gray-700 '>
											Level
										</label>
										<select
											className={
												`w-full px-4 py-2 text-base border border-gray-300 rounded-xl focus:outline-none ',
												${errors.level ? 'border-red-500' : '' }`
											}
											{...register('level', {
												required: 'Level harus diisi',
											})}>
											<option value=''>Pilih Level</option>
											<option value='Beginner'>Beginner</option>
											<option value='Intermediate'>Intermediate</option>
											<option value='Advanced'>Advanced</option>
										</select>
										<span className='block mt-1 text-xs text-red-500' role='alert'>
											{errors.level?.message}
										</span>
									</div>

									<div className='mb-4'>
										<label
											htmlFor='harga'
											className='block mb-2 text-base font-semibold text-gray-700 '>
											Harga
										</label>
										<input
											type='number'
											placeholder='Harga'
											className={
												`w-full px-4 py-2 text-base border border-gray-300 rounded-xl focus:outline-none '
												${errors.harga ? 'border-red-500': ''}`
											}
											{...register('harga', {
												required: 'Harga harus diisi',
												min: {
													value: 0,
													message: 'Harga minimal 0',
												},
												max: {
													value: 1000000000,
													message: 'Harga maksimal 1000000000',
												},
											})}
										/>
										<span className='block mt-1 text-xs text-red-500' role='alert'>
											{errors.harga?.message}
										</span>
									</div>

									<div className='mb-6'>
										<label
											htmlFor='targetKelas'
											className='block mb-2 text-base font-semibold text-gray-700 '>
											Target Kelas
										</label>
										<button type='button' className='text-base font-bold text-white bg-secret-darkblue px-2 py-1 rounded-lg' onClick={() => append(" ")}>Tambah Target Kelas</button>
										{
											fields.map((field, index) => (
												<div key={field.id} className='flex items-center space-x-2 my-2'>
													<input
														type='text'
														placeholder='Target Kelas'
														className={
															`w-full px-4 py-2 text-base border border-gray-300 rounded-xl focus:outline-none '
															${errors.targetKelas ? 'border-red-500' : ''}`
														}
														{...register(`targetKelas.${index}`, {
															required: 'Target Kelas harus diisi',
															minLength: {
																value: 3,
																message: 'Target Kelas minimal 3 karakter',
															},
															maxLength: {
																value: 50,
																message: 'Target Kelas maksimal 50 karakter',
															},
														})}
													/>
											{index !== 0 ? <button type='button' className='text-base font-bold text-white bg-red-500 p-1 rounded-lg' onClick={() => remove(index)}>Hapus</button> : ''}
												</div>
											))
										}
										<div className='text-red-500 text-xs mt-1'>{errors.targetKelas?.root?.message}</div>
									</div>

									<div className='mb-6'>
										<label
											htmlFor='chapter'
											className='block mb-2 text-base font-semibold text-gray-700 '>
											Chapter
										</label>
										<button type='button' className='text-base font-bold text-white bg-secret-darkblue px-2 py-1 rounded-lg' onClick={() => append2([{
											name : '',
											module : [{ title : '', video : ''}],
										}])}>Tambah Chapter</button>
										{
											fields2.map((field, index) => (
												<div key={field.id} className='flex flex-col w-full  space-x-2 my-2'>
												<p className='font-semibold mb-2'>Chapter {index+1}</p>
												<div className='flex gap-2'>
												<input {...register(`chapter.${index}.name`)} type='text' placeholder='Nama Chapter' className={`w-full px-4 py-2 text-base border border-gray-300 rounded-xl focus:outline-none ${errors.chapter ? 'border-red-500' : ''} `} />
												{index !== 0 ? <button type='button' className='text-base font-bold text-white bg-red-500 p-1 rounded-lg' onClick={() => remove2(index)}>Hapus</button> : ''}
												</div>
												<div key={field.id} className='flex items-center space-x-2 my-2'>
													<Module moduleIndex={index} control={control} register={register} errors={errors}/>
												</div>
												</div>
											))
										}
										<div className='text-red-500 text-xs mt-1'>{errors.chapter?.root?.message}</div>
									</div>

									<div className='mb-6'>
										<label
											htmlFor='deskripsi'
											className='block mb-2 text-base font-semibold text-gray-700 '>
											Deskripsi
										</label>
										<textarea
											rows={3}
											placeholder='Deskripsi'
											className={
												`w-full px-4 py-2 text-base border border-gray-300 rounded-xl focus:outline-none '
												${errors.deskripsi ? 'border-red-500' : ''}`
											}
											{...register('deskripsi', {
												required: 'Deskripsi harus diisi',
												minLength: {
													value: 3,
													message: 'Deskripsi minimal 3 karakter',
												},
												maxLength: {
													value: 500,
													message: 'Deskripsi maksimal 500 karakter',
												},
											})}
										/>
										<span className='block mt-1 text-xs text-red-500' role='alert'>
											{errors.deskripsi?.message}
										</span>
									</div>

									<div className='mb-6 '>
										<label
											htmlFor='image'
											className='block mb-2 text-base font-semibold text-gray-700 '>
											Image
										</label>
										<div className={`border border-gray-300 grid rounded-xl p-2 ${errors.image ? 'border-red-500': ''}`}>
										<div className='mb-2 flex gap-2'>
										<label for="image" className="bg-secret-darkblue font-bold text-white w-fit py-1 px-2 rounded-xl">Browse...</label>
										{image && <button onClick={removeImage} className='text-secret-pink text-xl'><BiSolidTrash/></button>}
										</div>
										<input
											type='file'
											id='image'
											placeholder='image'
											className='hidden'
											{...register('image', {
												required: 'Gambar harus diisi',
											})}
										/>
										{image && <Image src={image} alt='image' width={500} height={500} className='rounded-xl object-cover' />}
										</div>
										<span className='block mt-1 text-xs text-red-500' role='alert'>
											{errors.image?.message}
										</span>
									</div>
									

									<div className='flex items-center space-x-2'>
										<button
											type='reset'
											className='w-full px-4 py-2 space-x-2 text-base font-semibold text-center border border-gray-300 rounded-full text-secret-darkblue'>
											Reset
										</button>
										<button
											type='submit'
											className='w-full px-4 py-2 space-x-2 text-base font-semibold text-center text-white rounded-full bg-secret-darkblue'>
											Simpan
										</button>
									</div>
								</form>
							</Dialog.Panel>
						</Transition.Child>
					</div>
				</div>
			</Dialog>
		</Transition>
	);
};
