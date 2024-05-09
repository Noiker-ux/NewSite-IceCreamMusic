'use client';
import style from './CardStore.module.css';
import IStore from '../../../data/Stores/Stores.interface';
import { motion } from 'framer-motion';
export const CardStore = ({ image, alt }: IStore) => {
	return (
		<motion.div className={style.card}>
			<img
				className={style.image}
				alt={alt}
				src={image}
				width={225}
				height={80}
			/>
		</motion.div>
	);
};
