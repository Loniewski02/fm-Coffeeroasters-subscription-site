type Props = {
	img: string;
	name: string;
	desc: string;
};

const CoollectionItem: React.FC<Props> = ({ img, name, desc }) => {
	return (
		<div className='md:flex-row md:justify-between flex flex-col gap-6 items-center lg:flex-col lg:gap-18 md:max-w-[620px] lg:max-w-full'>
			<img
				src={img}
				alt='coffe bag'
				className='w-[200px] md:w-[255px]'
			/>
			<div className='text-center md:text-left flex flex-col gap-6 lg:text-center'>
				<h3 className='text-2xl text-DarkGreyBlue'>{name}</h3>
				<p className='max-w-70 text-lm lg:text-base text-DarkGreyBlue lg:max-w-[255px]'>{desc}</p>
			</div>
		</div>
	);
};

export default CoollectionItem;
