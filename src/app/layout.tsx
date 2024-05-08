'use client';

import './globals.css';

import { ThemeContextProvider } from '../../context/ThemeContext';

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<ThemeContextProvider>{children}</ThemeContextProvider>
		</html>
	);
}
