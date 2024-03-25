import Wrapper from './Wrapper';

type Props = {
	children?: React.ReactNode;
	title: string;
	desc: string;
	font: 'big' | 'small';
	bgClass: string;
};

const Header: React.FC<Props> = ({ title, desc, children, font, bgClass }) => {
	return (
		<header className='sectionX headerY'>
			<Wrapper
				className={`${bgClass} lg:min-h-[450px] min-h-[400px] bg-center rounded-[10px] flex flex-col items-center md:items-start justify-center bg-cover bg-no-repeat section-inner-x py-25 lg:py-20`}>
				<h1
					className={`${
						font === 'big' ? 'text-4xl md:text-5xl lg:text-7xl' : 'text-xxl md:text-[32px]'
					} lg:max-w-lg text-center md:text-left text-LightCream mb-6 lg:mb-8`}>
					{title}
				</h1>
				<p className='text-lm text-center lg:text-base font-normal md:text-left text-LightCream max-w-70 md:max-w-[445px] '>
					{desc}
				</p>
				{children}
			</Wrapper>
		</header>
	);
};

export default Header;
