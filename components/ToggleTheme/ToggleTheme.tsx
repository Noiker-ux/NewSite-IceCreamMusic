import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import style from './ToggleTheme.module.css';

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
			<img
				src={theme === 'light' ? '/theme/sun.png' : '/theme/moon.png'}
				width={20}
				height={20}
				className={theme === 'dark' ? style.dark : style.light}
				alt='ThemeIcon'
			/>
		</button>
	);
};
