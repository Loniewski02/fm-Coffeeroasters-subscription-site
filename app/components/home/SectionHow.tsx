import Wrapper from '../layout/Wrapper';
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
	return (
		<section className='sectionX sectionY'>
			<Wrapper className='section-inner-x'>
				<h2 className='text-2xl text-Gray mb-20'>How it works</h2>
				<div>
					{DUMMY_DATA.map((item, index) => (
						<HowItem
							key={item.id}
							num={index + 1}
							title={item.title}
							desc={item.desc}
						/>
					))}
				</div>
			</Wrapper>
		</section>
	);
};

export default SectionHow;
