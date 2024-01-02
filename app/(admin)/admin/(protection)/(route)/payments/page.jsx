"use client"
import PaymentLoading from "@/components/Admin/PaymentLoading";
import { usePaymentStatus } from "@/app/utils/hooks/useAdminPayment";

const formatTanggal = (date) => {
	const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };
	return new Date(date).toLocaleDateString('en-US', options);
};
const mockArray = [1, 2, 3, 4, 5, 6];
const PaymentsPage = () => {
	const token = localStorage.getItem('token');
	const { data, isLoading, isError } = usePaymentStatus(token);

	return (
		<>
			<div className='flex items-center justify-between mb-5'>
				<h1 className='md:text-xl font-bold text-black'>Status Pembayaran</h1>
			</div>

			<div className='w-full mb-5 overflow-x-auto'>
				<table className='w-full whitespace-nowrap'>
					<thead>
						<tr className='w-full h-10 text-xs md:text-sm font-semibold leading-none tracking-wide text-gray-800 bg-secret-background'>
							<th className='w-1/7 min-w-[5rem] text-start px-5 '>Username</th>
							<th className='w-1/7 min-w-[7rem] text-start px-5'>Kategori</th>
							<th className='w-1/7 min-w-[12rem] text-start px-5'>Nama Kelas</th>
							<th className='w-1/7 min-w-[7rem] text-start px-5'>Status</th>
							<th className='w-1/7 min-w-[7rem] text-start px-5'>Metode Pembayaran</th>
							<th className='w-1/7 min-w-[7rem] text-start px-5'>Tanggal Bayar</th>
						</tr>
					</thead>
					<tbody className='w-full'>
						{isLoading ? mockArray.map((item) => <PaymentLoading key={item} />): 

						data?.map((payment) => (
							<tr
								key={payment.id}
								className='w-full h-16 text-xs md:text-sm leading-none text-gray-800 bg-white border-t border-b border-gray-100 hover:bg-gray-100'>
								<td className='px-5'>
									<span className='font-semibold'>{payment.user}</span>
								</td>
								<td className='px-5'>{payment.courseCategory}</td>
								<td className='px-5'>
									<span className='font-semibold'>{payment.courseName}</span>
								</td>
								<td className='px-5'>
									<span
										className={`
											font-bold uppercase
											${payment.is_paid
												? 'text-secret-darkblue'
												: 'text-secret-pink'
											}
										`}>
										{payment.is_paid ? 'Sudah Bayar' : 'Belum Bayar'}
									</span>
								</td>
								<td className='px-5'>{payment.paymentMethod}</td>
								<td className='px-5'>{formatTanggal(payment.buyAt)}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</>
	);
};

export default PaymentsPage;
