import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import style from './ToggleTheme.module.css';
import Image from 'next/image';

export const ToggleTheme = () => {
	const { theme, setTheme } = useContext(ThemeContext);
	return (
		<button
			className={style.switch}
			onClick={() => {
				if (theme === 'dark') {
					setTheme('light');
				} else {
					setTheme('dark');
				}
			}}>
			<Image
				src={theme === 'light' ? '/theme/sun.png' : '/theme/moon.png'}
				width={30}
				height={30}
				className={theme === 'dark' ? style.dark : style.light}
				alt='ThemeIcon'
			/>
		</button>
	);
};
