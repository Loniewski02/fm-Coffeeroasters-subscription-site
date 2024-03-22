import Wrapper from '@/app/components/layout/Wrapper';

const Header = () => {
	return (
		<header className='sectionX headerY'>
			<Wrapper className="md:py-28 bg-[url('../public/assets/about/mobile/image-hero-whitecup.jpg')] md:bg-[url('../public/assets/about/tablet/image-hero-whitecup.jpg')] lg:bg-[url('../public/assets/about/desktop/image-hero-whitecup.jpg')] md:items-start md:text-left rounded-[10px] bg-center bg-no-repeat bg-cover pt-28 pb-21 text-LightCream flex flex-col items-center text-center lg:py-[136px] lg:text-[40px] section-inner-x">
				<h1 className='text-xxl md:text-[32px] mb-6'>About Us</h1>
				<p className=' max-w-70 text-lm md:max-w-[400px] lg:text-base'>
					Coffeeroasters began its journey of exotic discovery in 1999, highlighting stories of coffee from around the
					world. We have since been dedicated to bring the perfect cup - from bean to brew - in every shipment.
				</p>
			</Wrapper>
		</header>
	);
};

export default Header;
