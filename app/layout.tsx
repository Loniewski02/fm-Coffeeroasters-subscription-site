import type { Metadata } from 'next';
import { Barlow, Fraunces } from 'next/font/google';
import './globals.css';

import MainNav from './components/MainNav';
import Footer from './components/Footer';

const fontFraunces = Fraunces({
	subsets: ['latin'],
	weight: ['900'],
	display: 'block',
	variable: '--font-fraunces',
});

const fontBarlow = Barlow({
	subsets: ['latin'],
	weight: ['400'],
	display: 'block',
	variable: '--font-barlow',
});

export const metadata: Metadata = {
	title: 'My App',
	description: 'My App',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={`${fontBarlow.variable} ${fontFraunces.variable} font-sans`}>
				<MainNav />
				<div className='mx-auto max-w-7xl overflow-x-clip font-sans'>{children}</div>
				<Footer />
			</body>
		</html>
	);
}
