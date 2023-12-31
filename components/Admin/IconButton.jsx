export const IconButton = ({ icon, variants, ...props }) => {
	const Icon = icon;

	return (
		<div
			className={
				`relative w-8 h-8 rounded-xl transition-all duration-200 ease-in-out group
				${variants === 'primary' ? 'bg-secret-darkblue hover:bg-secret-background' : 
				variants === 'secondary' ? 'bg-secret-background hover:bg-secret-darkblue' :
				''}
				`
			}
			{...props}>
			<Icon
				className={
					`absolute w-6 h-6 transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 transition-all duration-200 ease-in-out
					${variants === 'primary' ? 'text-white group-hover:text-secret-darkblue' : 
					variants === 'secondary' ? 'text-secret-darkblue group-hover:text-white' : 
				''}
					`
				}
			/>
		</div>
	);
};
