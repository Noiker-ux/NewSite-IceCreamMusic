'use client';

import { useContext } from 'react';
import { Footer } from '../../../components/Footer/Footer';
import { Header } from '../../../components/Header/Header';
import { Rubik } from 'next/font/google';
import { ThemeContext } from '../../../context/ThemeContext';

const rubik = Rubik({ subsets: ['latin'] });

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const { theme } = useContext(ThemeContext);
	return (
		<body data-theme={theme} className={rubik.className}>
			<div className='container'>
				<Header />
				{children}
				<Footer />
			</div>
		</body>
	);
}
