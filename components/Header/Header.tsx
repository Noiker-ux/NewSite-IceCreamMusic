'use client';
import Link from 'next/link';
import { Logo } from '../Logo/Logo';
import style from './Header.module.css';
import { ToggleTheme } from '../ToggleTheme/ToggleTheme';

export const Header = () => {
	return (
		<header className={style.header}>
			<div className={style.content}>
				<Logo className={style.header__logo} />
				<nav>
					<ul className={style.menu__list}>
						<li className={style.menu__item}>
							<Link className={style.menu__link} href={'/'}>
								Главная
							</Link>
						</li>
						<li className={style.menu__item}>
							<Link className={style.menu__link} href={'/distribution'}>
								Дистрибуция
							</Link>
						</li>
						<li className={style.menu__item}>
							<Link className={style.menu__link} href={'/platforms'}>
								Платформы
							</Link>
						</li>
						<li className={style.menu__item}>
							<Link className={style.menu__link} href={'/questions'}>
								Вопросы
							</Link>
						</li>
					</ul>
				</nav>
				<div className={style.addons}>
					<ToggleTheme />
					<Link href={'https://lk.icecreammusic.ru/'}>Вход в аккаунт</Link>
				</div>
			</div>
		</header>
	);
};
