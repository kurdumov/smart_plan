import React from 'react';
import { NavItem, NavSeparator } from '../../../components/layouts/Navigation/Nav';
import { authPages } from '../../../config/pages.config';
import User from '../../../components/layouts/User/User';
import { useAuth } from '../../../context/authContext';

const UserTemplate = () => {
	const { isLoading, userData, onLogout } = useAuth();

	return (
		<User
			isLoading={isLoading}
			name={userData?.firstName}
			position={userData?.position}
			src={userData?.image?.thumb}>
			<NavSeparator />
			<NavItem {...authPages.profilePage} />
			<NavItem text='Logout' icon='HeroArrowRightOnRectangle' onClick={() => onLogout()} />
		</User>
	);
};

export default UserTemplate;
