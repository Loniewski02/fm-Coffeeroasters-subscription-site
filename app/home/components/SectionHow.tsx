'use client';
import { useRouter } from 'next/navigation';
import Button from '../../components/UI/Button';
import Wrapper from '../../components/layout/Wrapper';
import HowItem from './HowItem';

const DUMMY_DATA = [
	{
		id: 'i1',
		title: 'Pick your coffee',
		desc: 'Select from our evolving range of artisan coffees. Our beans are ethically sourced and we pay fair prices for them. There are new coffees in all profiles every month for you to try out.',
	},
	{
		id: 'i2',
		title: 'Choose the frequency',
		desc: 'Customize your order frequency, quantity, even your roast style and grind type. Pause, skip or cancel your subscription with no commitment through our online portal.',
	},
	{
		id: 'i3',
		title: 'Receive and enjoy!',
		desc: 'We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning world-class coffees curated to provide a distinct tasting experience.',
	},
];

const SectionHow = () => {
	const router = useRouter();

	const nawigateHanler = () => {
		router.push('/subscribe');
	};

	return (
		<section className='sectionX sectionY'>
			<Wrapper className='lg:section-inner-x'>
				<h2 className='text-2xl text-Gray mb-20 md:mb-13 text-center md:text-left text-Grey lg:mb-24'>How it works</h2>
				<div className='hidden mb-15 lg:mb-20 md:block h-[2px] relative w-[500px] lg:w-[760px] bg-PaleOrange'>
					<div className='absolute bg-LightCream w-8 h-8 rounded-full border-[2px] border-DarkCyan left-0 -translate-y-1/2' />
					<div className='absolute bg-LightCream w-8 h-8 rounded-full border-[2px] border-DarkCyan right-0 -translate-y-1/2' />
					<div className='absolute bg-LightCream w-8 h-8 rounded-full border-[2px] border-DarkCyan left-1/2 -translate-y-1/2 -translate-x-1/2' />
				</div>
				<div className='flex flex-col items-center gap-14 md:flex-row justify-between md:items-start md:gap-6 lg:gap-12 xl:gap-24 lg:justify-start'>
					{DUMMY_DATA.map((item, index) => (
						<HowItem
							key={item.id}
							num={index + 1}
							title={item.title}
							desc={item.desc}
						/>
					))}
				</div>
				<Button
					type='button'
					onClick={nawigateHanler}
					className='mt-20 md:mt-11 lg:mt-16'>
					Create your plan
				</Button>
			</Wrapper>
		</section>
	);
};

export default SectionHow;
