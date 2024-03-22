type Props = {
	num: number;
	title: string;
	desc: string;
};

const HowItem: React.FC<Props> = ({ num, title, desc }) => {
	let number;

	num < 10 ? (number = '0' + num) : (number = num);

	return (
		<div className='flex flex-col gap-6 max-w-[327px] text-center md:w-full md:max-w-[220px] lg:max-w-[250px] xl:max-w-[285px] md:text-left md:gap-10'>
			<span className='text-7xl text-PaleOrange font-fraunces'>{number}</span>
			<h3 className='text-DarkGreyBlue text-xxl lg:max-w-[255px] lg:text-[32px]'>{title}</h3>
			<p className='text-lm text-DarkGreyBlue lg:text-base'>{desc}</p>
		</div>
	);
};

export default HowItem;
