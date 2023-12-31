import Link from 'next/link';
import { BiX } from 'react-icons/bi';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment, forwardRef } from 'react';
import { IconButton } from '@/components/Admin/IconButton';
import { AdminLogo } from '@/components/Admin/AdminLogo';
import { useRouter } from 'next/navigation';

export const Sidebar = ({ links, current, open, setOpen }) => {
	return (
		<>
			<Transition.Root show={open} as={Fragment}>
				<Dialog
					as='div'
					className='fixed inset-0 z-10 overflow-hidden bg-black bg-opacity-50 lg:hidden'
					onClose={setOpen}>
					<Transition.Child
						as={Fragment}
						enter='transition-opacity ease-linear duration-300'
						enterFrom='opacity-0'
						enterTo='opacity-100'
						leave='transition-opacity ease-linear duration-300'
						leaveFrom='opacity-100'
						leaveTo='opacity-0'>
						<Dialog.Overlay className='absolute inset-0' />
					</Transition.Child>

					<Dialog.Panel className='absolute inset-0 overflow-hidden' onClick={() => setOpen(false)}>
						<Transition.Child
							as={Fragment}
							enter='transition ease-in-out duration-300 transform'
							enterFrom='-translate-x-full'
							enterTo='translate-x-0'
							leave='transition ease-in-out duration-300 transform'
							leaveFrom='translate-x-0'
							leaveTo='-translate-x-full'>
							<Content links={links} current={current} setOpen={setOpen} asDialog />
						</Transition.Child>
					</Dialog.Panel>
				</Dialog>
			</Transition.Root>

			<Content links={links} current={current} asDialog={false} />
		</>
	);
};

const Content = forwardRef(({ links, current, asDialog, setOpen }, ref) => {
	const {push} = useRouter();
	const handleLogOut = () => {
		localStorage.removeItem('token');
		push('/admin/login');
	}
	return (
		<aside
			ref={ref}
			className={
				`w-full max-w-[200px] bg-secret-darkblue transition-all duration-300 ease-out
				${ asDialog ? 'absolute inset-y-0 left-0' : 'relative hidden lg:flex lg:flex-col'}`
			}>
			<div className='absolute bottom-0 left-0 m-6 xl:hidden'>
				<IconButton icon={BiX} onClick={() => setOpen(false)} variants='secondary' />
			</div>

			<div className='flex items-center justify-center py-16'>
				<AdminLogo />
			</div>
			{links?.map((link, index) => (
				<Link
					key={index}
					href={link.href}
					className={
						`w-full block px-10 py-3 transition-all duration-200 ease-out'
						${current === link.href ? 'bg-secret-background text-black' : 'text-white hover:bg-white/10'}`
					}>
					<p className='font-semibold'>{link.label}</p>
				</Link>
			))}
			<button className='w-full px-10 py-3 text-white hover:bg-white/10 text-start' onClick={handleLogOut}>
				<p className='font-semibold'>Keluar</p>
			</button>
		</aside>
	);
});

Content.displayName = 'Content';
