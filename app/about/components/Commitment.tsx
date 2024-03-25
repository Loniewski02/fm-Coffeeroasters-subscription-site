import Wrapper from '@/app/components/layout/Wrapper';
import mobileBg from '@/public/assets/about/mobile/image-commitment.jpg';
import tabletBg from '@/public/assets/about/tablet/image-commitment.jpg';
import desktopBg from '@/public/assets/about/desktop/image-commitment.jpg';

const Commitment = () => {
	return (
		<section className='sectionX sectionY'>
			<Wrapper className='flex flex-col items-center md:flex-row md:justify-center xl:justify-between md:gap-16 xl:section-inner-x'>
				<img
					src={mobileBg.src}
					alt=''
					className='block md:hidden mb-12 rounded-lg h-full max-w-[350px]'
				/>
				<img
					src={tabletBg.src}
					alt=''
					className='hidden md:block lg:hidden rounded-lg h-full'
				/>
				<img
					src={desktopBg.src}
					alt=''
					className='hidden lg:block  rounded-lg h-full'
				/>
				<div className='text-center text-DarkGreyBlue md:max-w-[340px] md:text-left lg:max-w-[540px] '>
					<h2 className='text-[32px] mb-8 lg:text-[40px]'>Our commitment</h2>
					<p className='text-lm lg:text-base'>
						We’re built on a simple mission and a commitment to doing good along the way. We want to make it easy for
						you to discover and brew the world’s best coffee at home. It all starts at the source. To locate the
						specific lots we want to purchase, we travel nearly 60 days a year trying to understand the challenges and
						opportunities in each of these places. We collaborate with exceptional coffee growers and empower a global
						community of farmers through with well above fair-trade benchmarks. We also offer training, support farm
						community initiatives, and invest in coffee plant science. Curating only the finest blends, we roast each
						lot to highlight tasting profiles distinctive to their native growing region.
					</p>
				</div>
			</Wrapper>
		</section>
	);
};

export default Commitment;
