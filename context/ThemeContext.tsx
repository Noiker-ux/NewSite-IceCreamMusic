'use client';
import { ReactNode, createContext } from 'react';
import { useState } from 'react';

export const ThemeContext = createContext({
	theme: 'dark',
	setTheme: (str: 'dark' | 'light') => {},
});

export const ThemeContextProvider = ({ children }: { children: ReactNode }) => {
	const [theme, setTheme] = useState<'dark' | 'light'>('dark');

	return (
		<ThemeContext.Provider value={{ theme, setTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};
