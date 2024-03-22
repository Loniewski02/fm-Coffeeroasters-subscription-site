import Wrapper from '../layout/Wrapper';
import Benefit from './Benefit';

import CoffeBean from '../../../public/assets/home/general/icon-coffee-bean.svg';
import Gift from '../../../public/assets/home/general/icon-gift.svg';
import Truck from '../../../public/assets/home/general/icon-truck.svg';

const Benefits = () => {
	return (
		<section className='sectionX sectionY '>
			<Wrapper className='relative flex flex-col items-center text-center py-16 md:py-14 lg:py-25 section-inner-x'>
				<div className='absolute left-0 top-0 w-full h-[902px] bg-DarkGreyBlue rounded-[10px] z-0 md:h-[523px]' />
				<h2 className='text-center lg:text-[40px] md:text-[32px] text-xxl text-LightCream mb-6 lg:mb-8 relative z-10'>
					Why choose us?
				</h2>
				<p className='max-w-70 md:max-w-[540px] md:text-lm text-LightCream text-lm relative z-10 mb-16 lg:mb-21 md:mb-18 lg:text-base'>
					A large part of our role is choosing which particular coffees will be featured in our range. This means
					working closely with the best coffee growers to give you a more impactful experience on every level.
				</p>
				<div className='flex flex-col w-full items-center gap-6 relative z-10 lg:flex-row justify-between'>
					<Benefit
						title='Best quality'
						desc='Discover an endless variety of the world’s best artisan coffee from each of our roasters.'>
						<CoffeBean className='md:w-14 h-14' />
					</Benefit>
					<Benefit
						title='Best quality'
						desc='Discover an endless variety of the world’s best artisan coffee from each of our roasters.'>
						<Gift className='md:w-14 h-14' />
					</Benefit>
					<Benefit
						title='Best quality'
						desc='Discover an endless variety of the world’s best artisan coffee from each of our roasters.'>
						<Truck className='md:w-14 h-[39]' />
					</Benefit>
				</div>
			</Wrapper>
		</section>
	);
};

export default Benefits;
