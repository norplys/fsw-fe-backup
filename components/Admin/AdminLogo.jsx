import { BiBrain } from 'react-icons/bi';

export const AdminLogo = () => {
	return (
		<div className='flex items-center space-x-2'>
			<div className='relative flex items-center justify-center w-8 h-8 overflow-hidden rounded-full bg-secret-pink'>
				<BiBrain className='text-xl text-white' />
			</div>
			<h1 className='text-xl font-bold text-white'>SkillHUB</h1>
		</div>
	);
};
