'use client';
import { createContext } from 'react';
import { useState } from 'react';

export const ThemeContext = createContext({
	theme: 'dark',
});

export const ThemeContextProvider = ({ children }) => {
	const [theme, setTheme] = useState<'dark' | 'light'>('dark');

	return (
		<ThemeContext.Provider value={{ theme, setTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};
