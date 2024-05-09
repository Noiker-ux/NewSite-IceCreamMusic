'use client';

import style from './Preview.module.css';
import Link from 'next/link';
import { motion } from 'framer-motion';
export const Preview = () => {
	return (
		<div className={style.preview__wrapper}>
			<div className={style.text}>
				<h1 className={style.title}>Все для артиста в одном месте</h1>
				<p className={style.description}>
					Управляйте своим творчеством, продажами и маркетингом в одном месте,
					чтобы сделать вашу музыку заметной и доступной миллионам слушателей!
				</p>
				<div className={style.links}>
					<motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
						<Link className={style.login} href={'/'}>
							Вход в аккаунт
						</Link>
					</motion.div>
					<Link className={style.more} href={'/'}>
						Узнать больше
					</Link>
				</div>
			</div>
			<img
				style={{ objectFit: 'contain', maxWidth: '48rem' }}
				src={'/novinki.png'}
				width={740}
				height={740}
				alt='Новинки'
			/>
		</div>
	);
};
