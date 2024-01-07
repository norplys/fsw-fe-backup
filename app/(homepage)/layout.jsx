import * as React from 'react';
import Navbar from '@/components/NichiNavbar';

const Layout = ({ children }) => {
	return (
		<>
			<Navbar />
			<main>{children}</main>
		</>
	);
};

export default Layout;
