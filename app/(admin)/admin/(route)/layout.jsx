'use client';

import * as React from 'react';
import { usePathname } from 'next/navigation';
import { AdminCard } from '@/components/Admin/AdminCard';

import { Sidebar } from '@/components/Admin/Sidebar';
import { AdminNavbar } from '../../../../components/Admin/AdminNavbar';

const links = [
	{
		label: 'Dashboard',
		href: '/admin/payments',
	},
	{
		label: 'Kelola Kelas',
		href: '/admin/courses',
	},
];

const dashboard = [
	{
		label: 'Active User',
		count: '450',
		color: 'bg-secret-pink',
	},
	{
		label: 'Total Course',
		count: '25',
		color: 'bg-secret-darkblue',
	},
	{
		label: 'Premium Course',
		count: '20',
		color: 'bg-secret-cyan',
	},
];

const AdminLayout = ({ children }) => {
	const current = usePathname();
	const [keyword, setKeyword] = React.useState('');
	const [open, setOpen] = React.useState(false);

	const handleSearch = (e) => {
		e.preventDefault();
		console.log(keyword);
	};

	return (
		<main className='flex min-h-screen'>
			<Sidebar links={links} current={current} open={open} setOpen={setOpen} />

			<section className='relative w-full'>
				<AdminNavbar setOpen={setOpen} open={open} />

				<section className='py-5 xl:py-20'>
					<div className='container px-2 mx-auto xl:px-10'>
						<div className='grid items-center grid-cols-1 gap-8 xl:grid-cols-3'>
							{dashboard?.map((item, index) => (
								<AdminCard statistic={item} key={index} />
							))}
						</div>
					</div>
				</section>

				<section>
					<div className='container px-2 mx-auto xl:px-10'>{children}</div>
				</section>
			</section>
		</main>
	);
};

export default AdminLayout;
