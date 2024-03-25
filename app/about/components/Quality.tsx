import mobileImg from '@/public/assets/about/mobile/image-quality.jpg';
import tabletImg from '@/public/assets/about/tablet/image-quality.jpg';
import desktopImg from '@/public/assets/about/desktop/image-quality.jpg';
import Wrapper from '@/app/components/layout/Wrapper';

const Quality = () => {
	return (
		<section className='sectionX sectionY pt-[140px] md:pt-[232px] xl:pt-[188px]'>
			<Wrapper className='section-inner-x bg-DarkGreyBlue rounded-[10px] pb-16 flex flex-col items-center xl:flex-row xl:gap-6 xl:justify-between'>
				<img
					src={mobileImg.src}
					alt=''
					className='md:hidden w-[280px] h-full rounded-lg -mt-[78px] mb-16'
				/>
				<img
					src={tabletImg.src}
					alt=''
					className='hidden md:block xl:hidden w-[573px] h-full rounded-lg -mt-[161px] mb-16'
				/>
				<img
					src={desktopImg.src}
					alt=''
					className='hidden xl:block w-[445px] h-full rounded-lg -mt-[88px] order-2 '
				/>
				<div className='text-LightCream text-center max-w-[540px] order-1 xl:text-left'>
					<h2 className='text-xxl md:text-[32px] mb-6 lg:mb-8 lg:text-[40px]'>Uncompromising quality</h2>
					<p className='text-lm lg:text-base'>
						Although we work with growers who pay close attention to all stages of harvest and processing, we employ, on
						our end, a rigorous quality control program to avoid over-roasting or baking the coffee dry. Every bag of
						coffee is tagged with a roast date and batch number. Our goal is to roast consistent, user-friendly coffee,
						so that brewing is easy and enjoyable.
					</p>
				</div>
			</Wrapper>
		</section>
	);
};

export default Quality;
