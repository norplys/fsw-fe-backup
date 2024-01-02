import { LuUsers } from 'react-icons/lu';
import { VscLoading } from 'react-icons/vsc';

export const AdminCard = ({ statistic, data, isLoading, value, isError}) => {
	const valueData = data?.[value];
	return (
		
		<div className={`flex items-center p-4 md:p-6 space-x-4 rounded-2xl ${statistic.color}`}>
			<div className='relative flex-shrink-0 w-10 h-14 md:w-16 md:h-16 bg-white rounded-3xl'>
				<LuUsers className='absolute w-8 h-8 transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 text-secret-darkblue' />
			</div>
			<div className='flex flex-col'>
				<h5 className='md:text-2xl text-white/80'>{isError ? "An Error Occured, Please Reload The Page" : isLoading ? <VscLoading className='animate-spin'/> : valueData}</h5>
				<span className='text-white text-sm md:text-base'>{statistic.label}</span>

			</div>
		</div>
	);
};
