import { BiBrain } from 'react-icons/bi';

export const AdminLogo = () => {
	return (
		<div className='flex items-center justify-center  space-x-2'>
			<div className='flex items-center justify-center p-2 rounded-full bg-secret-pink'>
				<BiBrain className='text-xl text-white' />
			</div>
			<h1 className='text-xl font-bold text-white'>SkillHUB</h1>
		</div>
	);
};
