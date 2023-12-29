'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { Sidebar } from '@/components/Admin/Sidebar';
import { AdminNavbar } from '@/components/Admin/AdminNavbar';
import {Toaster} from "react-hot-toast";
import { AdminCard } from '@/components/Admin/AdminCard';

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
	const [keyword, setKeyword] = useState('');
	const [open, setOpen] = useState(false);

	const handleSearch = (e) => {
		e.preventDefault();
		console.log(keyword);
	};

	return (
		<main className='flex min-h-screen'>
			<Toaster position='bottom-left'/>
			<Sidebar links={links} current={current} open={open} setOpen={setOpen} />

			<section className='relative w-full'>
				
				<AdminNavbar setOpen={setOpen} open={open} />
				<section>
				<section className="py-5 xl:py-20">
        <div className="grid items-center grid-cols- gap-8 xl:grid-cols-3 mx-5">
          {dashboard?.map((item, index) => (
            <AdminCard statistic={item} key={index} />
          ))}
        </div>
      </section>
					<div className='container px-2 mx-auto xl:px-10'>{children}</div>
				</section>
			</section>
		</main>
	);
};

export default AdminLayout;
