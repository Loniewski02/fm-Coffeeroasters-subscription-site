type Props = {
	num: number;
	title: string;
	desc: string;
};

const HowItem: React.FC<Props> = ({ num, title, desc }) => {
	let number;

	num < 10 ? (number = '0' + num) : (number = num);

	return (
		<div className='flex flex-col gap-6'>
			<span className='text-7xl text-PaleOrange font-fraunces'>{number}</span>
			<h3 className='text-DarkGreyBlue text-xxl '>{title}</h3>
			<p className='text-lm text-DarkGreyBlue'>{desc}</p>
		</div>
	);
};

export default HowItem;
