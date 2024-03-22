'use client';
import Button from '../../components/UI/Button';
import Wrapper from '../../components/layout/Wrapper';
import { useRouter } from 'next/navigation';

const Header = () => {
	const router = useRouter();

	const nawigateHanler = () => {
		router.push('/subscribe');
	};

	return (
		<header className='sectionX headerY'>
			<Wrapper
				className={`bg-[url('../public/assets/home/mobile/image-hero-coffeepress.jpg')] lg:bg-[url('../public/assets/home/desktop/image-hero-coffeepress.jpg')] md:bg-[url('../public/assets/home/tablet/image-hero-coffeepress.jpg')]  bg-center rounded-[10px] flex flex-col items-center md:items-start justify-center bg-cover bg-no-repeat section-inner-x  py-25 lg:py-20`}>
				<h1 className='text-[40px] lg:text-7xl lg:max-w-lg md:text-5xl text-center md:text-left text-LightCream mb-6 lg:mb-8'>
					Great coffe made simple.
				</h1>
				<p className='mb-10 text-lm text-center lg:text-base lg:mb-14 font-normal md:text-left text-LightCream max-w-70 md:max-w-[400px] '>
					Start your mornings with the world’s best coffees. Try our expertly curated artisan coffees from our best
					roasters delivered directly to your door, at your schedule.
				</p>
				<Button
					onClick={nawigateHanler}
					type='button'>
					Create your plan
				</Button>
			</Wrapper>
		</header>
	);
};

export default Header;
