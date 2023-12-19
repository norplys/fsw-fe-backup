import { BiFilter, BiSearch } from 'react-icons/bi';
import { AdminCard } from '@/components/Admin/AdminCard';

const payments = [
	{
		id: 1,
		username: 'johndoe',
		course: {
			kategori: 'UI/UX Design',
			nama: 'Belajar UI/UX Design dengan Figma',
		},
		status: 'Sudah Bayar',
		metode: 'Credit Card',
		tanggal: new Date('2021-08-01').toISOString(),
	},
	{
		id: 2,
		username: 'johndoe',
		course: {
			kategori: 'Data Science',
			nama: 'Data Cleaning untuk Pemula',
		},
		status: 'Belum Bayar',
		metode: 'Credit Card',
		tanggal: new Date('2021-08-01').toISOString(),
	},
	{
		id: 3,
		username: 'johndoe',
		course: {
			kategori: 'Data Science',
			nama: 'Data Visualization untuk Pemula',
		},
		status: 'Belum Bayar',
		metode: 'Credit Card',
		tanggal: new Date('2021-08-01').toISOString(),
	},
	{
		id: 4,
		username: 'johndoe',
		course: {
			kategori: 'Data Science',
			nama: 'Data Analysis untuk Pemula',
		},
		status: 'Sudah Bayar',
		metode: '-',
		tanggal: new Date('2021-08-01').toISOString(),
	},
	{
		id: 5,
		username: 'johndoe',
		course: {
			kategori: 'Data Science',
			nama: 'Machine Learning untuk Pemula',
		},
		status: 'Sudah Bayar',
		metode: '-',
		tanggal: new Date('2021-08-01').toISOString(),
	},
	{
		id: 6,
		username: 'johndoe',
		course: {
			kategori: 'Data Science',
			nama: 'Natural Language Processing untuk Pemula',
		},
		status: 'Sudah Bayar',
		metode: 'Credit Card',
		tanggal: new Date('2021-08-01').toISOString(),
	},
	{
		id: 7,
		username: 'johndoe',
		course: {
			kategori: 'Data Science',
			nama: 'Deep Learning untuk Pemula',
		},
		status: 'Sudah Bayar',
		metode: 'Credit Card',
		tanggal: new Date('2021-08-01').toISOString(),
	},
];

const formatTanggal = (date) => {
	const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };
	return new Date(date).toLocaleDateString('en-US', options);
};

const dashboard = [
	{
	  label: "Active User",
	  count: "450",
	  color: "bg-secret-pink",
	},
	{
	  label: "Total Course",
	  count: "25",
	  color: "bg-secret-darkblue",
	},
	{
	  label: "Premium Course",
	  count: "20",
	  color: "bg-secret-cyan",
	},
  ];

const PaymentsPage = () => {
	return (
		<>
		<section className="py-5 xl:py-20">
        <div className="grid items-center grid-cols-1 gap-8 xl:grid-cols-3 mx-5">
          {dashboard?.map((item, index) => (
            <AdminCard statistic={item} key={index} />
          ))}
        </div>
      </section>
			<div className='flex items-center justify-between mb-5'>
				<h1 className='text-xl font-bold text-black'>Status Pembayaran</h1>
				<div className='flex items-center space-x-3'>
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
							<th className='w-1/7 min-w-[5rem] text-start px-5'>Username</th>
							<th className='w-1/7 min-w-[7rem] text-start px-5'>Kategori</th>
							<th className='w-1/7 min-w-[12rem] text-start px-5'>Nama Kelas</th>
							<th className='w-1/7 min-w-[7rem] text-start px-5'>Status</th>
							<th className='w-1/7 min-w-[7rem] text-start px-5'>Metode Pembayaran</th>
							<th className='w-1/7 min-w-[7rem] text-start px-5'>Tanggal Bayar</th>
						</tr>
					</thead>
					<tbody className='w-full'>
						{payments.map((payment) => (
							<tr
								key={payment.id}
								className='w-full h-16 text-sm leading-none text-gray-800 bg-white border-t border-b border-gray-100 hover:bg-gray-100'>
								<td className='px-5'>
									<span className='font-semibold'>{payment.username}</span>
								</td>
								<td className='px-5'>{payment.course.kategori}</td>
								<td className='px-5'>
									<span className='font-semibold'>{payment.course.nama}</span>
								</td>
								<td className='px-5'>
									<span
										className={`
											font-bold uppercase
											${payment.status === 'Sudah Bayar'
												? 'text-secret-darkblue'
												: 'text-secret-pink'
											}
										`}>
										{payment.status}
									</span>
								</td>
								<td className='px-5'>{payment.metode}</td>
								<td className='px-5'>{formatTanggal(payment.tanggal)}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</>
	);
};

export default PaymentsPage;