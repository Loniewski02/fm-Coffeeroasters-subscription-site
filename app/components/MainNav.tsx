'use client';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

import Link from 'next/link';
import Wrapper from './layout/Wrapper';
import Logo from '../../public/assets/shared/logo.svg';

const ROUTES = [
	{ name: 'Home', url: '/' },
	{ name: 'About Us', url: '/about' },
	{ name: 'Create Your Plan', url: '/subscribe' },
];

const MainNav = () => {
	const [isMobileMenuShown, setIsMobileMenuShown] = useState(false);
	const pathname = usePathname();

	const showMobileMenuHandler = () => {
		setIsMobileMenuShown((prevState) => !prevState);
	};

	const barClasses = 'block w-full h-[3px] bg-DarkGreyBlue rounded-sm absolute left-0';

	return (
		<nav className='sticky bg-LightCream top-0 left-0 right-0 px-6 py-8 md:p-10'>
			<Wrapper className='flex flex-row justify-between items-center '>
				<Link
					href='/'
					aria-label='Home Page'>
					<Logo className='h-[18px] w-[163px] md:h-[26px] md:w-[236px]' />
				</Link>
				<button
					aria-label='menu button '
					onClick={showMobileMenuHandler}
					className='w-6 h-[22px] p-1 md:hidden'>
					<span className='block relative h-full'>
						<span className={`${barClasses} top-0`} />
						<span className={`${barClasses} top-1/2 transform -translate-y-1/2`} />
						<span className={`${barClasses} bottom-0`} />
					</span>
				</button>
				<div
					className={`${
						isMobileMenuShown ? 'block' : 'hidden'
					} md:block md:static md:p-0 fixed md:bg-transparent top-[86px] left-0 h-full w-full md:w-auto md:h-auto bg-gradient-to-b from-LightCream from-40% to-transparent p-10`}>
					<div className='flex flex-col gap-8 items-center md:flex-row '>
						{ROUTES.map((route) => (
							<Link
								key={route.url}
								href={route.url}
								aria-label={`${route.name} Page`}
								className={`${
									pathname === route.url ? 'active' : 'md:text-Grey'
								} relative  md:px-[1px] py-1 link md:uppercase tracking-wider font-fraunces md:font-barlow md:font-bold text-2xl md:text-xs`}>
								{route.name}
							</Link>
						))}
					</div>
				</div>
			</Wrapper>
		</nav>
	);
};

export default MainNav;
