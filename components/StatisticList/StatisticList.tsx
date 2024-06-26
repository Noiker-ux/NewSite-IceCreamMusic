'use client';
import { motion } from 'framer-motion';
import { Statistic } from '../../data/Statistics/Statistics';
import { Title } from '../Title/Title';
import { StatisticItem } from './StatisticItem/StatisticItem';
import style from './StatisticList.module.css';

export const StatisticList = () => {
	return (
		<motion.div
			transition={{ duration: 1 }}
			initial={{ opacity: 0, y: 160 }}
			whileInView={{ opacity: 1, y: 0 }}
			className={style.wrapper}>
			<Title>Наши цифры</Title>
			<div className={style.StatisticList}>
				{Statistic.map((StatisticElement) => (
					<StatisticItem
						key={StatisticElement.label}
						count={StatisticElement.count}
						label={StatisticElement.label}
					/>
				))}
			</div>
		</motion.div>
	);
};
