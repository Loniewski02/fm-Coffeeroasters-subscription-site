'use client';
import Link from 'next/link';
import Wrapper from './layout/Wrapper';
import Logo from '../../public/assets/shared/logo.svg';

import { ROUTES } from '../routes';

import FacebookIco from '../../public/assets/shared/icon-facebook.svg';
import TwitterIco from '../../public/assets/shared/icon-twitter.svg';
import InstagramIco from '../../public/assets/shared/icon-instagram.svg';
import { usePathname } from 'next/navigation';

const classes = 'transition-color duration-300';
const SOCIALS: { id: string; name: string; url: string; element: JSX.Element }[] = [
	{ id: 's1', name: 'Facebook', url: '#', element: <FacebookIco className={classes} /> },
	{ id: 's2', name: 'Twitter', url: '#', element: <TwitterIco className={classes} /> },
	{ id: 's3', name: 'Instagram', url: '#', element: <InstagramIco className={classes} /> },
];

const Footer = () => {
	const pathname = usePathname();

	return (
		<footer className='sectionX py-18'>
			<Wrapper className='bg-DarkGreyBlue lg:relative py-13 flex flex-col items-center justify-center gap-12 section-inner-x lg:py-11 lg:gap-25 md:gap-8 lg:flex-row lg:justify-start'>
				<Link
					href='/'
					aria-label='Home Page'
					className=' text-white'>
					<Logo className='h-6 w-[217px] md:h-[26px] md:w-[236px]' />
				</Link>
				<div className='flex flex-col items-center gap-6 md:flex-row md:mb-8 lg:mb-0 '>
					{ROUTES.map((route) => (
						<Link
							key={route.id}
							href={route.url}
							className={`${
								pathname === route.url ? 'active text-white' : 'text-Grey'
							} relative max-w-max  uppercase font-bold  text-xs tracking-wide link`}>
							{route.name}
						</Link>
					))}
				</div>
				<div className='lg:absolute right-21 flex gap-6 items-center'>
					{SOCIALS.map((social) => (
						<a
							key={social.id}
							href={social.url}
							aria-label={social.name}
							className='text-LightCream hover:text-PaleOrange'>
							{social.element}
						</a>
					))}
				</div>
			</Wrapper>
		</footer>
	);
};

export default Footer;
