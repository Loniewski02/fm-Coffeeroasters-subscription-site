type Props = {
	children: React.ReactNode;
	title: string;
	desc: string;
};

const Benefit: React.FC<Props> = ({ children, title, desc }) => {
	return (
		<div className='py-12 lg:flex-col lg:px-6 md:py-10 lg:py-12 lg:pt-18 px-4 rounded-lg md:max-w-max w-full bg-DarkCyan flex flex-col items-center gap-14 md:flex-row md:pl-18 md:pr-12'>
			{children}
			<div className='px-4 flex flex-col gap-6 md:text-left lg:text-center'>
				<h3 className='text-LightCream text-2xl'>{title}</h3>
				<p className='text-base md:text-lm lg:text-base text-LightCream max-w-[212px] md:max-w-[344px]'>{desc}</p>
			</div>
		</div>
	);
};

export default Benefit;
