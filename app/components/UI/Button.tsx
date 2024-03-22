type Props = {
	children: React.ReactNode;
	type: 'button' | 'submit' | 'reset';
	className?: string;
	ariaLabel?: string;
	onClick: () => void;
};

const Button: React.FC<Props> = (props) => {
	return (
		<button
			type={props.type}
			onClick={props.onClick}
			aria-label={props.ariaLabel ? props.ariaLabel : ''}
			className={`${
				props.className && props.className
			} px-8 py-4 rounded-md bg-DarkCyan text-LightCream font-fraunces text-lg hover:bg-CyanHover transition active:scale-105`}>
			{props.children}
		</button>
	);
};

export default Button;
