import { ReactNode } from 'react';

type Props = {
	className?: string;
	children: ReactNode;
};

const Wrapper: React.FC<Props> = ({ className, children }) => {
	return <div className={`my-0 mx-auto w-full max-w-7xl ${className && className}`}>{children}</div>;
};

export default Wrapper;
